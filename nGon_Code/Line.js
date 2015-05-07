"use strict"
function Line(xStart, yStart, xEnd, yEnd){
    if(xStart == null && yStart == null && xEnd == null && yEnd == null){
        this.xStart = Math.floor((Math.random() * boundingBoxWidth) + 1)
        this.yStart = Math.floor((Math.random() * boundingBoxHeight) + 1)
        this.xEnd = Math.floor((Math.random() * boundingBoxWidth) + 1)
        this.yEnd = Math.floor((Math.random() * boundingBoxHeight) + 1)
    }
    else{
        this.xStart = xStart
        this.yStart = yStart
        this.xEnd = xEnd
        this.yEnd = yEnd
    }
//    this.width = 1
    this.length = calculateLength(this)
    this.mSlope = calculateSlope(this)
    this.bYIntercept = calculateB(this)

    this.x
    if(this.xStart < this.xEnd){
        this.x = xStart
    }
    else{
        this.x = this.xEnd
    }

    this.y
    if(this.yStart < this.yEnd){
        this.y = this.yStart
    }
    else{
        this.y = this.yEnd
    }
    this.canvasWidth = 0
    this.canvasHeight = 0
    this.width = Math.abs(this.yEnd - this.yStart)
    this.height = Math.abs(this.xEnd - this.xStart)



    function calculateLength(that){
        var height = that.xEnd - that.xStart
        var width = that.yEnd - that.yStart
        var squared = Math.pow(height, 2) + Math.pow(width, 2)
        return Math.sqrt(squared)
    }

    function calculateSlope(that){
        var ys = (that.yEnd - that.yStart)
        var xs = (that.xEnd - that.xStart)
        return ys / xs
    }

    function calculateB(that){
        return that.yEnd - (that.mSlope * that.xEnd)
    }

}