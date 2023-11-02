
var tl = gsap.timeline();

tl.from("#random-text",{
    opacity:0,
    delay:0.5,
    duration:1,
})

.from("#lowest",{
    opacity:0,
    onStart:function(){
        $('#lowest').textillate({ 
            in: { 
                effect: 'fadeInUp',
                callback:function(){   //to inform that wes still have some animation
                    $('#lowest').textillate('out')  //tells that we have to perform out animation
                }
             } ,
            out:{effect:'fadeOutUp'}
        
        });
    }
}).from("#second-lowest",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#second-lowest').textillate({ 
            in: { 
                effect: 'fadeInUp',
                callback:function(){   //to inform that wes still have some animation
                    $('#second-lowest').textillate('out')  //tells that we have to perform out animation
                }
             } ,
            out:{effect:'fadeOutUp'}
        
        });
    }
}).from("#second-top",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#second-top').textillate({ 
            in: { 
                effect: 'fadeInUp',
                callback:function(){   //to inform that wes still have some animation
                    $('#second-top').textillate('out')  //tells that we have to perform out animation
                }
             } ,
            out:{effect:'fadeOutUp'}
        
        });
    }
}).from("#top",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#top').textillate({ 
            in: { 
                effect: 'fadeInUp',
                
             } 
        
        });
    },
    


}).to("#top-screen",{
    top:"-100%",
    delay:1,
    duration:1.2,
    ease:"Power4.easeOut",
    

})
.from("#header a,#navbar li,#mobile a,#mobile i",{
    y:-100,
    duration:1,
    delay:0.1,
    opacity:0,
    stagger:0.3,
})
.from("#hero",{
    duration:0.3,
    opacity:0.5,
   
    
})

