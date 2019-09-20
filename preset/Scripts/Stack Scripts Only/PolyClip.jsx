// (c) Copyright 2006-2007.  Adobe Systems, Incorporated.  All rights reserved.

/*
@@@BUILDINFO@@@ PolyClip.jsx 1.0.0.0
*/

//
// PolyClip.jsx - Aribitrary polygon-polygon clipper.
// Based on "Efficient Clipping of Aribitrary Polygons" by Greiner & Hormann
// ACM Transactions on Graphics 17(2), April 1998
//
// Translated from http://davis.wpi.edu/~matt/courses/clipping/
//

function ClipNode( p, next, prev, intersect, alpha )
{
    this.xy = p;
    this.next = next;
    this.prev = prev;
    if (prev) this.prev.next = this;
    if (next) this.next.prev = this;
    this.nextPoly = null;
    this.neighbor = null;
    this.intersect = intersect;
    this.entry = false;
    this.visited = false;
    this.alpha = alpha;
}

// Static so argument may be null
ClipNode.lastNode = function(p)
{
    var aux = p;
    while (aux && aux.next)
        aux = aux.next;
    return aux;
};

ClipNode.prototype.circle = function()
{
    var aux = ClipNode.lastNode(this);
    aux.prev.next = this;
    this.prev = aux.prev;
    delete aux;
};

// convert nodes into points
ClipNode.prototype.getPoints = function()
{
    var aux;
    var pts = [];
    for (aux = this; aux; aux = aux.next)
        pts.push(aux.xy);
    return pts;
};


ClipNode.intersect = function( p1, p2, q1, q2 )
{
    const kInfinitePoint = new TPoint(Infinity, Infinity);
    var xy = TPoint.lineSegmentIntersect( p1.xy, p2.xy, q1.xy, q2.xy, true );

    if (xy === kInfinitePoint)
        return null;

    var tp = p1.xy.distanceTo(xy) / p1.xy.distanceTo(p2.xy);
    var tq = q1.xy.distanceTo(xy) / q1.xy.distanceTo(q2.xy);

    return {alpha_p:tp, alpha_q:tq, point:xy};
};

ClipNode.clip = function( s, c, sPos, cPos, farLeft )
{
    function markEntryPoints( p, q, flag )
    {
        var e, aux, left, type = 0;

        // Find winding number (inside/outside test)
        left = new ClipNode( new TPoint(farLeft, p.xy.fY), null, null, false, 0.0 );
        for (aux = q; aux.next; aux = aux.next)
            if (ClipNode.intersect( left, p, aux, aux.next))
                type++;
        delete left;
        e = type % 2;

        if (flag) e = 1 - e;
        for (aux = p; aux.next; aux = aux.next)
            if (aux.intersect)
            {
                aux.entry = e;
                e = 1 - e;
            }
    }

    function nextNode(p)
    {
        var aux = p;
        while (aux && aux.intersect)
            aux = aux.next;
        return aux;
    }

    function insert( ins, first, last )
    {
        var aux = first;
        while (aux != last && aux.alpha < ins.alpha)
            aux = aux.next;
        ins.next = aux;
        ins.prev = aux.prev;
        if (ins.prev)
            ins.prev.next = ins;
        ins.next.prev = ins;
    }

    function first(p)
    {
        var aux = p;
        if (aux)
            do
                aux = aux.next;
            while ((aux != p) && (!aux.intersect || (aux.intersect && aux.visited)));
        return aux;
    }

    sPos = (typeof(sPos) == "undefined") ? true : sPos;
    cPos = (typeof(cPos) == "undefined") ? true : cPos;

    var auxs, auxc, is, ic;

    auxs = ClipNode.lastNode(s);
    new ClipNode( s.xy, null, auxs, false, 0.0 );

    auxc = ClipNode.lastNode(c);
    new ClipNode( c.xy, null, auxc, false, 0.0 );

    // Phase one: Find intersections
    for (auxs = s; auxs.next; auxs = auxs.next)
        if (! auxs.intersect)
            for (auxc = c; auxc.next; auxc = auxc.next)
                if (! auxc.intersect)
                {
                    var result = ClipNode.intersect( auxs, nextNode(auxs.next),
                                                     auxc, nextNode(auxc.next) );
                    if (result)
                    {
                        is = new ClipNode( result.point, null, null, true, result.alpha_p );
                        ic = new ClipNode( result.point, null, null, true, result.alpha_q );
                        is.neighbor = ic;
                        ic.neighbor = is;
                        insert( is, auxs, nextNode( auxs.next ) );
                        insert( ic, auxc, nextNode( auxc.next ) );
                    }
                }

    // Phase two: Find entry/exit points
    markEntryPoints( s, c, sPos );
    markEntryPoints( c, s, cPos );

    s.circle();
    c.circle();

    // Phase three: Collect the output polygons
    var crt, newNode, old, forward, root = null;

    while ((crt = first(s)) != s)
    {
        old = null;
        for (; !crt.visited; crt = crt.neighbor)
            for (forward = crt.entry ;;)
            {
                newNode = new ClipNode( crt.xy, old, null, false, 0.0 );
                old = newNode;
                crt.visited = true;
                crt = forward ? crt.next : crt.prev;
                if (crt.intersect)
                {
                    crt.visited = true;
                    break;
                }
            }

        old.nextPoly = root;
        root = old;
    }
    return root;
};

// Computer the intersection of two polygons; returns
// convex polygon result.  Note the underlying clipping
// code is able to handle concave polygons, and perform
// union and subtraction operations as well as intersection,
// but that interface is not exported here.
TPoint.intersectConvexPolygons = function( subject, clip, setOperation )
{
    // converts points into nodes
    function makeClipNodes( ptlist )
    {
        var i;
        var n, nodes = null;
        for (i in ptlist)
        {
            n = new ClipNode( new TPoint(ptlist[i].fX, ptlist[i].fY), nodes, null, false, 0.0 );
            if (nodes) nodes.prev = n;
            nodes = n;
        }
        return nodes;
    }

    function computeClip( setOp, farLeft )
    {
        var flagSet = { intersect:    {sFlag: true,  cFlag: true},
                        union:        {sFlag: false, cFlag: false},
                        minusSubject: {sFlag: true,  cFlag: false},
                        minusClip:    {sFlag: false, cFlag: true}};

        var s = makeClipNodes( subject );
        var c = makeClipNodes( clip );
        return ClipNode.clip( s, c, flagSet[setOp].sFlag, flagSet[setOp].cFlag, farLeft );
    }

    // Do a quick pre-test to make sure it's even worth bothering.
    var clipBounds = TRect.getBounds( clip );
    var subjBounds = TRect.getBounds( subject );

    // If the bounds don't overlap, quit now.
    if (! clipBounds.intersects(subjBounds))
        return null;
        
    // The winding number algorithm needs to start to the left of any
    // of the polygon data
    var farLeft = Math.min( clipBounds.fLeft, subjBounds.fLeft ) - 10.0;

    if (typeof setOperation === "undefined")
        setOperation = "intersect";

    var clipResult = computeClip( setOperation, farLeft );
    if (! clipResult) return null;

    var resultPointLists = [], c = clipResult;
    while (c)
    {
        resultPointLists.push( c.getPoints() );
        c = c.nextPoly;
    }

    return resultPointLists;
};
