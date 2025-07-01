class Forms{
    constructor(){

    }

    canRoate(tiles){
        let canRoate=true;
        for(let i=0;i<tiles.length;i++){
            if(tiles[i].positionGF()[0]>=0 && tiles[i].positionGF()[0]<=19  && tiles[i].positionGF()[1]>=0 && tiles[i].positionGF()[1]<=9){
                if(gameFrame[tiles[i].positionGF()[0]][tiles[i].positionGF()[1]]!=null){
                    canRoate=false;
                }
            }
        }
        return canRoate;
    }

    cube(xStart,yStart){
        let x=xStart;
        let y=yStart;
        let tiles=[];
        for(let i=0;i<2;i++){
            for(let j=0;j<2;j++){
                let tile=new Tile(tilesModels[0],x,y);
                tiles.push(tile);
                x++;
            }
            x=xStart;
            y++;
        }
        return tiles;
    }

    T(roate,xStart,yStart,Form){   //      T form
        if(roate>=4){
            roate=roate%4;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.tDown(xStart,yStart,Form);
                break;
            case 1: tiles=this.tRight(xStart,yStart,Form);
                break;
            case 2:tiles=this.tUp(xStart,yStart,Form);
                break;
            case 3: tiles=this.tLeft(xStart,yStart,Form);
                break;
            default:tiles=this.tDown(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }

    tDown(xStart,yStart,Form){
        if(xStart==0){
            xStart++;
            Form.setX(Form.getX()+1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[1],x,y));
        x++
        tiles.push(new Tile(tilesModels[1],x,y));
        x-=2;
        tiles.push(new Tile(tilesModels[1],x,y));
        x++;
        y++;
        tiles.push(new Tile(tilesModels[1],x,y));
        return tiles;
    }

    tRight(xStart,yStart,Form){
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[1],x,y));
        y--
        tiles.push(new Tile(tilesModels[1],x,y));
        y+=2;
        tiles.push(new Tile(tilesModels[1],x,y));
        y--;
        x--;
        tiles.push(new Tile(tilesModels[1],x,y));
        return tiles;
    }
    
    tUp(xStart,yStart,Form){
        if(xStart==gameFrameCols){
            xStart--;
            Form.setX(Form.getX()-1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[1],x,y));
        x++
        tiles.push(new Tile(tilesModels[1],x,y));
        x-=2;
        tiles.push(new Tile(tilesModels[1],x,y));
        x++;
        y--;
        tiles.push(new Tile(tilesModels[1],x,y));
        return tiles;
    }
    
    tLeft(xStart,yStart,Form){
        let x=xStart;
        if(yStart==gameFrameRows){
            yStart--;
            Form.setY(Form.getY()-1);
        }
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[1],x,y));
        y--
        tiles.push(new Tile(tilesModels[1],x,y));
        y+=2;
        tiles.push(new Tile(tilesModels[1],x,y));
        y--;
        x++;
        tiles.push(new Tile(tilesModels[1],x,y));
        return tiles;
    }
    
    //I
    I(roate,xStart,yStart,Form){
        if(roate>=2){
            roate=roate%2;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.IHorizontal(xStart,yStart,Form);
                break;
            case 1: tiles=this.IVertical(xStart,yStart,Form);
                break;
            default:tiles=this.IHorizontal(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }
    
    IHorizontal(xStart,yStart,Form){
        if(xStart==0){
            xStart++;
            Form.setX(Form.getX()+1);
        }
        if(xStart==gameFrameCols){
            xStart-=2;
            Form.setX(Form.getX()-2);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[2],x,y));
        x++;
        tiles.push(new Tile(tilesModels[2],x,y));
        x++;
        tiles.push(new Tile(tilesModels[2],x,y));
        x-=3;
        tiles.push(new Tile(tilesModels[2],x,y));
        return tiles;
    }
    IVertical(xStart,yStart,Form){
        let x=xStart;
        if(yStart==gameFrameRows-1){
            yStart--;
            Form.setY(Form.getY()-1);
        }
        if(yStart==gameFrameRows){
            yStart-=2;
            Form.setY(Form.getY()-2);
        }
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[2],x,y));
        y++;
        tiles.push(new Tile(tilesModels[2],x,y));
        y++;
        tiles.push(new Tile(tilesModels[2],x,y));
        y-=3;
        tiles.push(new Tile(tilesModels[2],x,y));
        return tiles;
    }

    //S
    S(roate,xStart,yStart,Form){
        if(roate>=2){
            roate=roate%2;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.SHorizontal(xStart,yStart,Form);
                break;
            case 1: tiles=this.SVertical(xStart,yStart,Form);
                break;
            default:tiles=this.SHorizontal(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }
    SHorizontal(xStart,yStart,Form){
        if(xStart==gameFrameCols){
            xStart--;
            Form.setX(Form.getX()-1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[3],x,y));
        x++;
        tiles.push(new Tile(tilesModels[3],x,y));
        x--;
        y++;
        tiles.push(new Tile(tilesModels[3],x,y));
        x--;
        tiles.push(new Tile(tilesModels[3],x,y));
        return tiles;
    }
    SVertical(xStart,yStart,Form){
        let x=xStart;
        if(yStart==0){
            yStart++;
            Form.setY(Form.getY()+1);
        }
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[3],x,y));
        y--;
        tiles.push(new Tile(tilesModels[3],x,y));
        y++;
        x--;
        tiles.push(new Tile(tilesModels[3],x,y));
        y++;
        tiles.push(new Tile(tilesModels[3],x,y));
        return tiles;
    }

    //Z
    Z(roate,xStart,yStart,Form){
        if(roate>=2){
            roate=roate%2;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.ZHorizontal(xStart,yStart,Form);
                break;
            case 1: tiles=this.ZVertical(xStart,yStart,Form);
                break;
            default:tiles=this.ZHorizontal(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }
    ZHorizontal(xStart,yStart,Form){
        if(xStart==0){
            xStart++;
            Form.setX(Form.getX()+1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[4],x,y));
        x--;
        tiles.push(new Tile(tilesModels[4],x,y));
        x++;
        y++;
        tiles.push(new Tile(tilesModels[4],x,y));
        x++;
        tiles.push(new Tile(tilesModels[4],x,y));
        return tiles;
    }
    ZVertical(xStart,yStart,Form){
        let x=xStart;
        if(yStart==0){
            yStart++;
            Form.setY(Form.getY()+1);
        }
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[4],x,y));
        y--;
        tiles.push(new Tile(tilesModels[4],x,y));
        y++;
        x++;
        tiles.push(new Tile(tilesModels[4],x,y));
        y++;
        tiles.push(new Tile(tilesModels[4],x,y));
        return tiles;
    }


    //J
    J(roate,xStart,yStart,Form){   //      T form
        if(roate>=4){
            roate=roate%4;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.JDown(xStart,yStart,Form);
                break;
            case 1: tiles=this.JRight(xStart,yStart,Form);
                break;
            case 2:tiles=this.JUp(xStart,yStart,Form);
                break;
            case 3: tiles=this.JLeft(xStart,yStart,Form);
                break;
            default:tiles=this.JDown(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }

    JDown(xStart,yStart,Form){
        if(yStart==0){
            yStart++;
            Form.setY(Form.getY()+1);
        }
        if(yStart==gameFrameRows){
            yStart--;
            Form.setY(Form.getY()-1);
        }
        let x=xStart;
        let y=yStart;
        
        let tiles=[];
        tiles.push(new Tile(tilesModels[5],x,y));
        y--;
        tiles.push(new Tile(tilesModels[5],x,y));
        y+=2;
        tiles.push(new Tile(tilesModels[5],x,y));
        x--;
        tiles.push(new Tile(tilesModels[5],x,y));
        return tiles;
    }

    JRight(xStart,yStart,Form){
        if(xStart==gameFrameCols){
            xStart--;
            Form.setX(Form.getX()-1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[5],x,y));
        x--
        tiles.push(new Tile(tilesModels[5],x,y));
        y--;
        tiles.push(new Tile(tilesModels[5],x,y));
        y++;
        x+=2;
        tiles.push(new Tile(tilesModels[5],x,y));
        return tiles;
    }
    
    JUp(xStart,yStart,Form){
        if(yStart==gameFrameRows){
            yStart--;
            Form.setY(Form.getY()-1);
        }

        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[5],x,y));
        y--;
        tiles.push(new Tile(tilesModels[5],x,y));
        x++;
        tiles.push(new Tile(tilesModels[5],x,y));
        x--;
        y+=2;
        tiles.push(new Tile(tilesModels[5],x,y));
        return tiles;
    }
    
    JLeft(xStart,yStart,Form){
        if(xStart==0){
            xStart++;
            Form.setX(Form.getX()+1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[5],x,y));
        x--;
        tiles.push(new Tile(tilesModels[5],x,y));
        x+=2;
        tiles.push(new Tile(tilesModels[5],x,y));
        y++;
        tiles.push(new Tile(tilesModels[5],x,y));
        return tiles;
    }

    //L
    L(roate,xStart,yStart,Form){   //      T form
        if(roate>=4){
            roate=roate%4;
        }
        let tiles=[];
        switch(roate){
            case 0:tiles=this.LDown(xStart,yStart,Form);
                break;
            case 1: tiles=this.LRight(xStart,yStart,Form);
                break;
            case 2:tiles=this.LUp(xStart,yStart,Form);
                break;
            case 3: tiles=this.LLeft(xStart,yStart,Form);
                break;
            default:tiles=this.LDown(xStart,yStart,Form);
        }
        
        if(this.canRoate(tiles))
            return tiles;
        else return Form.tiles;
    }

    LDown(xStart,yStart,Form){
        if(yStart==0){
            yStart++;
            Form.setY(Form.getY()+1);
        }
        if(yStart==gameFrameRows){
            yStart--;
            Form.setY(Form.getY()-1);
        }
        let x=xStart;
        let y=yStart;
        
        let tiles=[];
        tiles.push(new Tile(tilesModels[6],x,y));
        y--;
        tiles.push(new Tile(tilesModels[6],x,y));
        y+=2;
        tiles.push(new Tile(tilesModels[6],x,y));
        x++;
        tiles.push(new Tile(tilesModels[6],x,y));
        return tiles;
    }

    LRight(xStart,yStart,Form){
        if(xStart==0){
            xStart++;
            Form.setX(Form.getX()+1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[6],x,y));
        x--
        tiles.push(new Tile(tilesModels[6],x,y));
        y++;
        tiles.push(new Tile(tilesModels[6],x,y));
        y--;
        x+=2;
        tiles.push(new Tile(tilesModels[6],x,y));
        return tiles;
    }
    
    LUp(xStart,yStart,Form){
        if(yStart==gameFrameRows){
            yStart--;
            Form.setY(Form.getY()-1);
        }

        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[6],x,y));
        y--;
        tiles.push(new Tile(tilesModels[6],x,y));
        x--;
        tiles.push(new Tile(tilesModels[6],x,y));
        x++;
        y+=2;
        tiles.push(new Tile(tilesModels[6],x,y));
        return tiles;
    }
    
    LLeft(xStart,yStart,Form){
        if(xStart==gameFrameCols){
            xStart--;
            Form.setX(Form.getX()-1);
        }
        let x=xStart;
        let y=yStart;
        let tiles=[];
        tiles.push(new Tile(tilesModels[6],x,y));
        x--;
        tiles.push(new Tile(tilesModels[6],x,y));
        x+=2;
        tiles.push(new Tile(tilesModels[6],x,y));
        y--;
        tiles.push(new Tile(tilesModels[6],x,y));
        return tiles;
    }
}