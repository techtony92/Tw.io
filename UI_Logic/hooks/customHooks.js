

export const useViewportChange = (width,height) =>{
    const viewportValues = {width:width, height:height};
    const updateViewport = (width,height) =>{
        viewportValues.width = width;
        viewportValues.height = height;
    }
    return [viewportValues, updateViewport];
}

