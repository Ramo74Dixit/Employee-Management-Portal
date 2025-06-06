const obj={
    name:"Ram",
    outer:function(){
        const inner=()=>{
            console.log(this.obj);
        }
        inner();
    }
}

obj.outer();