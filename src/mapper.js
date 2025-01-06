import { Button } from "@fourkites/elemental-atoms";
import { edsProps } from "./edsMapper.js";
import { figmaProps } from "./figmaMapper.js";

const keyMapper = {
    "Solid Button": {key:"Button", hasVariant: true, variantKey: "Variant", variantSubKey: "variantOptions"},
    "Checkbox": {key:"Checkbox", hasVariant: false, variantKey: "Variant", variantSubKey: "variantOptions"},
    "Radio Button": {key:"RadioButton", hasVariant: false, variantKey: "Variant", variantSubKey: "variantOptions"},
    "Switch with Dual Label": {key:"Switch", hasVariant: false, variantKey: "Variant", variantSubKey: "variantOptions"},
    "Basic Chip": {key:"Chip", hasVariant: false, variantKey: "Variant", variantSubKey: "variantOptions"}
}

const mapFigmaToEds = (figmaProps,edsProps) => {
    const edsMappedProps = {};
    const keysMatched = [];

    Object.keys(figmaProps).forEach((key) => {
        const figmaKey = key.toLowerCase();
        // do mapping based on edsProps key and figmaProps key provided only case is different
        if(edsProps[figmaKey]){
            keysMatched.push(figmaKey);
            edsMappedProps[figmaKey] = edsProps[figmaKey]
        }
        // do mapping based on figmaProps defaultValue and edsProps value
        const figmaValue = figmaProps[key].defaultValue.toLowerCase();
        Object.keys(edsProps).find((key) => {
            if(!keysMatched.includes(key) && (edsProps[key]?.includes(figmaValue) || edsProps[key] === figmaValue)){
                keysMatched.push(key);
                edsMappedProps[key] = edsProps[key];
            }
        });
    });
    // add the remaining unmatched props from edsProps
    Object.keys(edsProps).forEach((key) => {
        if(!keysMatched.includes(key)){
            edsMappedProps[key] = edsProps[key];
        }
    });
    return edsMappedProps;
};

const buttonVariants = (variant,Component,props) => {
    switch(variant) {
        case 'Icon + Text': {
            return `<${Component} ${{...props}} />`;
        }
        default: `<${Component} ${{...props}} />`;
    }
}

const result = {};
for(let i in figmaProps) {
    const {key,hasVariant=false,variantKey='',variantSubKey=''} = keyMapper[i] || {};
    const Component = key;
    // adding a caution step to validte all the fields in figmaProps are in edsProps and vice versa
    const mappedProps = mapFigmaToEds(figmaProps[i], edsProps[keyMapper[i]?.key]);
    // assuming all the first variants are default in nature
    result[i] = {
        default: `<${Component} ${{...mappedProps}} />`
    };
    console.log(mappedProps)
    if(!hasVariant){
        result[i] = {
            default: `<${Component} ${{...mappedProps}} />`
        };
    } else {
        let variants = {};
        for(let j=0;j<figmaProps[i]?.[variantKey]?.[variantSubKey]?.length;j++){
            const variant = figmaProps[i]?.[variantKey]?.[variantSubKey][j];
            variants[variant] = buttonVariants(variant,Component,mappedProps)
        }
        result[i] = {...result[i], ...variants};
    }
}

export const getMatchingComponent = (figmaComp, figmaRef, props) => {
    const Comp = keyMapper[figmaComp].key;
    const children = figmaRef.$textContent;
    console.log(figmaRef);
    return <Button {...props}>{children}</Button>;
}

console.log(result);