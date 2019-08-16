Muclease = function() {
    try {
        JSON;
    } catch (e) {
        $.writeln("无法使用 Muclease，因为未载入 JSON 解析库，请载入 json2.js ");
    }
    return this;
};
Muclease.prototype.actionReferenceToObject = function(actionReference) {
    var ob = {};
    _scanAF(actionReference, ob);

    function _scanAF(actionReference, ob) {
        try {
            ob.container = {};
            var c = actionReference.getContainer();
            if (c != undefined) {
                _scanAF(c, ob.container);
            }
        } catch (e) {

        }
        try {
            ob.form = actionReference.getForm().toString();
        } catch (e) {

        }
        try {
            ob.desiredClass = typeIDToStringID(actionReference.getDesiredClass());
        } catch (e) {

        }
        try {
            ob.enumeratedType = typeIDToStringID(actionReference.getEnumeratedType());
        } catch (e) {

        }
        try {
            ob.enumeratedValue = typeIDToStringID(actionReference.getEnumeratedValue());
        } catch (e) {

        }
        try {
            ob.identifier = actionReference.getIdentifier();
        } catch (e) {

        }
        try {
            ob.index = actionReference.getIndex();
        } catch (e) {

        }
        try {
            ob.offset = actionReference.getOffset();
        } catch (e) {

        }
        try {
            ob.property = typeIDToStringID(actionReference.getProperty());
        } catch (e) {

        }
        try {
            var t = actionReference.getName();
            if (t.length > 0) {
                ob.name = t
            }
        } catch (e) {

        }
    }
    return ob;
};
Muclease.prototype.actionDescriptorToObject = function(actionDescriptor, in_outSimple) {
    if (actionDescriptor == undefined) {
        return null;
    }
    var out_ob = {};
    _scanAD(actionDescriptor, out_ob, false, in_outSimple);

    function _scanAD(ad, ob, isAList, outSimple) {
        var len = ad.count;
        for (var i = 0; i < len; i += 1) {
            if (isAList) {
                var key = i;
            } else {
                var key = ad.getKey(i);
            }
            var obType = ad.getType(key);
            var obValue = null;
            if ("DescValueType.BOOLEANTYPE" == obType) {
                obValue = ad.getBoolean(key);
            } else if ("DescValueType.STRINGTYPE" == obType) {
                obValue = ad.getString(key);
            } else if ("DescValueType.INTEGERTYPE" == obType) {
                obValue = ad.getInteger(key);
            } else if ("DescValueType.DOUBLETYPE" == obType) {
                obValue = ad.getDouble(key);
            } else if ("DescValueType.CLASSTYPE" == obType) {
                obValue = ad.getClass(key);
            } else if ("DescValueType.RAWTYPE" == obType) {
                obValue = ad.getData(key);
            } else if ("DescValueType.LARGEINTEGERTYPE" == obType) {
                obValue = ad.getLargeInteger(key);
            } else if ("DescValueType.ALIASTYPE" == obType) {
                obValue = ad.getPath(key).fullName;
            } else if ("DescValueType.UNITDOUBLE" == obType) {
                obValue = {
                    doubleType: typeIDToStringID(ad.getUnitDoubleType(key)),
                    doubleValue: ad.getUnitDoubleValue(key)
                };
            } else if ("DescValueType.ENUMERATEDTYPE" == obType) {
                obValue = {
                    enumerationType: typeIDToStringID(ad.getEnumerationType(key)),
                    enumerationValue: typeIDToStringID(ad.getEnumerationValue(key))
                };
            } else if ("DescValueType.REFERENCETYPE" == obType) {
                obValue = Muclease.prototype.actionReferenceToObject(ad.getReference(key));
            } else if ("DescValueType.OBJECTTYPE" == obType) {
                obValue = {};
                _scanAD(ad.getObjectValue(key), obValue, false, outSimple);
            } else {
                if ("DescValueType.LISTTYPE" == obType) {
                    if (outSimple) {
                        obValue = [];
                        _scanAD(ad.getList(key), obValue, true, outSimple);
                    } else {
                        obValue = {};
                        _scanAD(ad.getList(key), obValue, true, outSimple);
                    }
                }
            }
            if (isAList) {
                var name = key;
            } else {
                var name = typeIDToStringID(key);
            }
            if (outSimple) {
                if (isAList) {
                    ob[key] = obValue;
                } else {
                    ob[name] = obValue;
                    if ("DescValueType.OBJECTTYPE" == obType) {
                        ob[name]._objectType = typeIDToStringID(ad.getObjectType(key));
                    }
                }
            } else {
                ob[name] = {
                    value: obValue,
                    type: obType.toString()
                };
                if ("DescValueType.OBJECTTYPE" == obType) {
                    ob[name].objectType = typeIDToStringID(ad.getObjectType(key));
                }
            }
        }
    }
    return out_ob;
};
Muclease.prototype.actionDescriptorToSimpleObject = function(actionDescriptor) {
    return Muclease.prototype.actionDescriptorToObject(actionDescriptor, true);
};
Muclease.prototype.actionDescriptorToJSON = function(actionDescriptor) {
    var ob = Muclease.prototype.actionDescriptorToObject(actionDescriptor);
    return JSON.stringify(ob);
};
Muclease.prototype.actionDescriptorToSampleJSON = function(actionDescriptor) {
    var ob = Muclease.prototype.actionDescriptorToObject(actionDescriptor, true);
    return JSON.stringify(ob);
};
Muclease.prototype.actionReferenceToJSON = function(actionReference) {
    var ob = Muclease.prototype.actionReferenceToObject(actionReference);
    return JSON.stringify(ob);
};
Muclease.prototype.jsonToFile = function(filePath, json) {
    var f = new File(filePath);
    f.open("w");
    f.write(json);
    f.close();
};
Muclease.prototype.objectToActionReference = function(ob) {
    if (ob.constructor !== Object) {
        return "not_Object";
    }
    var af = new ActionReference();
    _creatAF(ob, af);

    function _creatAF(ob, af) {
        var hasDesiredClass = false;
        if (ob.property !== undefined) {
            var idDC = stringIDToTypeID(ob.desiredClass);
            var idPR = stringIDToTypeID(ob.property);
            af.putProperty(idDC, idPR);
            hasDesiredClass = true;
        }
        if (ob.identifier !== undefined) {
            af.putIdentifier(stringIDToTypeID(ob.desiredClass), ob.identifier);
            hasDesiredClass = true;
        }
        if (ob.index !== undefined) {
            af.putIndex(stringIDToTypeID(ob.desiredClass), ob.index);
            hasDesiredClass = true;
        }
        if (ob.offset !== undefined) {
            af.putOffset(stringIDToTypeID(ob.desiredClass), ob.offset);
            hasDesiredClass = true;
        }
        if (ob.name !== undefined) {
            af.putName(stringIDToTypeID(ob.desiredClass), ob.name);
            hasDesiredClass = true;
        }
        if (ob.enumeratedValue !== undefined && ob.enumeratedType !== undefined) {
            af.putEnumerated(stringIDToTypeID(ob.desiredClass), stringIDToTypeID(ob.enumeratedType), stringIDToTypeID(ob.enumeratedValue));
            hasDesiredClass = true;
        }
        if (ob.desiredClass !== undefined && hasDesiredClass == false) {
            af.putClass(stringIDToTypeID(ob.desiredClass));
        }
        if (ob.container !== undefined) {
            if (isEmptyObject(ob.container) == false) {
                _creatAF(ob.container, af);
            }
        }
    }
    return af;
};
Muclease.prototype.objectToActionDescriptor = function(ob) {
    var ad = new ActionDescriptor();
    _creatAD(ob, ad);

    function _creatAD(in_ob, in_ad, mod) {
        for (var i in in_ob) {
            if (in_ob[i].type == "DescValueType.UNITDOUBLE") {
                if (mod == "list") {
                    in_ad.putUnitDouble(stringIDToTypeID(in_ob[i].value.doubleType), in_ob[i].value.doubleValue);
                } else {
                    in_ad.putUnitDouble(stringIDToTypeID(i), stringIDToTypeID(in_ob[i].value.doubleType), in_ob[i].value.doubleValue);
                }
            }
            if (in_ob[i].type == "DescValueType.DOUBLETYPE") {
                if (mod == "list") {
                    in_ad.putDouble(in_ob[i].value);
                } else {
                    in_ad.putDouble(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.BOOLEANTYPE") {
                in_ad.putBoolean(stringIDToTypeID(i), in_ob[i].value);
                if (mod == "list") {
                    in_ad.putBoolean(in_ob[i].value);
                } else {
                    in_ad.putBoolean(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.CLASSTYPE") {
                if (mod == "list") {
                    in_ad.putClass(stringIDToTypeID(in_ob[i].value));
                } else {
                    in_ad.putClass(stringIDToTypeID(i), stringIDToTypeID(in_ob[i].value));
                }
            }
            if (in_ob[i].type == "DescValueType.RAWTYPE") {
                if (mod == "list") {
                    in_ad.putData(in_ob[i].value);
                } else {
                    in_ad.putData(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.ENUMERATEDTYPE") {
                if (mod == "list") {
                    in_ad.putEnumerated(stringIDToTypeID(in_ob[i].value.enumerationType), stringIDToTypeID(in_ob[i].value.enumerationValue));
                } else {
                    in_ad.putEnumerated(stringIDToTypeID(i), stringIDToTypeID(in_ob[i].value.enumerationType), stringIDToTypeID(in_ob[i].value.enumerationValue));
                }
            }
            if (in_ob[i].type == "DescValueType.INTEGERTYPE") {
                if (mod == "list") {
                    in_ad.putInteger(in_ob[i].value);
                } else {
                    in_ad.putInteger(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.LARGEINTEGERTYPE") {
                if (mod == "list") {
                    in_ad.putLargeInteger(in_ob[i].value);
                } else {
                    in_ad.putLargeInteger(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.ALIASTYPE") {
                if (mod == "list") {
                    in_ad.putPath(new File(in_ob[i].value));
                } else {
                    in_ad.putPath(stringIDToTypeID(i), new File(in_ob[i].value));
                }
            }
            if (in_ob[i].type == "DescValueType.STRINGTYPE") {
                if (mod == "list") {
                    in_ad.putString(in_ob[i].value);
                } else {
                    in_ad.putString(stringIDToTypeID(i), in_ob[i].value);
                }
            }
            if (in_ob[i].type == "DescValueType.REFERENCETYPE") {
                var af = Muclease.prototype.objectToActionReference(in_ob[i].value);
                if (mod == "list") {
                    in_ad.putReference(af);
                } else {
                    in_ad.putReference(stringIDToTypeID(i), af);
                }
            }
            if (in_ob[i].type == "DescValueType.LISTTYPE") {
                var aList = new ActionList();
                _creatAD(in_ob[i].value, aList, "list");
                if (mod == "list") {
                    in_ad.putList(aList);
                } else {
                    in_ad.putList(stringIDToTypeID(i), aList);
                }
            }
            if (in_ob[i].type == "DescValueType.OBJECTTYPE") {
                var aOb = new ActionDescriptor();
                _creatAD(in_ob[i].value, aOb, "object");
                if (mod == "list") {
                    in_ad.putObject(stringIDToTypeID(in_ob[i].objectType), aOb);
                } else {
                    in_ad.putObject(stringIDToTypeID(i), stringIDToTypeID(in_ob[i].objectType), aOb);
                }
            }
        }
    }
    return ad;
};
Muclease.prototype.executeActionObjcet = function(eventID, ob) {
    var ad = Muclease.prototype.objectToActionDescriptor(ob);
    try {
        executeAction(eventID, ad, DialogModes.NO);
        return true;
    } catch (e) {
        log("ERR executeAction fail, executeActionObjcet:" + typeIDToCharID(eventID));
        log(json(ob));
        return false;
    }
};
Muclease.prototype._ad2Json = function(ob) {
    return Muclease.prototype.actionDescriptorToJSON(ob);
};
Muclease.prototype._ad2Ob = function(actionDescriptor, in_outSimple) {
    return Muclease.prototype.actionDescriptorToObject(actionDescriptor, in_outSimple);
};
Muclease.prototype._ad2SJson = function(actionDescriptor) {
    return Muclease.prototype.actionDescriptorToSampleJSON(actionDescriptor);
};
Muclease.prototype._ad2SOb = function(actionDescriptor) {
    return Muclease.prototype.actionDescriptorToSimpleObject(actionDescriptor);
};
Muclease.prototype._af2Json = function(actionReference) {
    return Muclease.prototype.actionReferenceToJSON(actionReference);
};
Muclease.prototype._af2Ob = function(actionReference) {
    return Muclease.prototype.actionReferenceToObject(actionReference);
};
Muclease.prototype._ob2Ad = function(ob) {
    return Muclease.prototype.objectToActionDescriptor(ob);
};
Muclease.prototype._ob2Af = function(ob) {
    return Muclease.prototype.objectToActionReference(ob);
};

function isEmptyObject(obj) {
    if (obj == undefined) {
        return true;
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}