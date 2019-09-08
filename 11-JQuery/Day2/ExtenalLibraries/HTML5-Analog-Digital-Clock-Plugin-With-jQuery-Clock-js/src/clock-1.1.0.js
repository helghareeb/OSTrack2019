(function($){
    var Clock = function(){
        var _ = this;

        // default options 
        _.o = {
            width: 300,
            height: 450,
            theme: 't1',
            date: new Date()
        };

        // themes
        _.ts = {
            't1': ['#e0e0e0', '#46a0ff', '#fc9a13', '#fff', '#666'],
            't2': ['#adc3c0', '#576069', '#b9e3d9', '#f3f4f6', '#f74461'],
            't3': ['#dbd0a7','#123555','#d1494e','#e1eed2','#e69b03']
        };


        // init clock
        // element and options
        _.init = function(el, o){

            o && $.extend(_.o,o);

            _.el = el;

            (_.o.theme in _.ts)?_.t = _.ts[_.o.theme]: _.t = _.ts['t1'];

            _.o.height< _.o.width*43/30?_.w=_.o.height*30/43:_.w=_.o.width;
            _.h = _.w*43/30;

            _.r = _.w/2;

            _.c = {
                f: {
                    canvas: $('<canvas>')
                },
                p: {
                    canvas: $('<canvas>')
                }
            };
            var x = _.c;
            x.f.context = x.f.canvas[0].getContext('2d');
            x.p.context = x.p.canvas[0].getContext('2d');
            x.f.canvas.attr({"width": _.w,"height": _.w});
            x.p.canvas.attr({"width": _.w,"height": _.h});
            x.f.canvas.css("position","absolute");
            x.p.canvas.css("position","absolute");
            _.el.css({"width": _.o.width,"height": _.o.height});
            _.el.append(x.f.canvas,x.p.canvas);

            _.d = o && 'date' in o && (new Date()).getTime()-o.date.getTime() || 0;

            _.paintClock();

            _.lt = new Date();
            _.start();

            return _;
        };

        // 
        _.paintClock = function(){
            _.paintF(_.c.f.context);
            _.paintPs(_.c.p.context);
        };

        // paint clock face
        _.paintF = function(context){
            var oa = {
                context: context,
                type: 'stroke',
                style: _.t[0],
                x: _.r,
                y: _.r,
                r: _.r-1,
                sAngle: 0,
                eAngle: Math.PI*2,
                counterclockwise: true
            };

            paintArc(oa);

            oa.type = 'fill';
            oa.style = _.t[3];
            paintArc(oa);

            oa.r = .9*_.r;
            oa.style = _.t[0];
            paintArc(oa);

            oa.r = .5*_.r;
            oa.style = _.t[3];
            paintArc(oa);

            var ol = {
                context: context,
                type: 'stroke',
                style: _.t[1],
                points: []
            };

            var angle = 0,tr = .99* _.r, er = .92* _.r;
            for(var i=0;i<60;++i){
                ol.points = [{
                    x: _.r+tr*Math.cos(angle),
                    y: _.r+tr*Math.sin(angle)
                },{
                    x: _.r+er*Math.cos(angle),
                    y: _.r+er*Math.sin(angle)
                }];
                paintLine(ol);
                angle += Math.PI/30;
            }

            context.lineWidth = 2;
            context.textBaseline = 'middle';
            context.textAlign = 'center';
            context.font = .15*_.r+"px Calibri";
            angle = 0,tr = .99* _.r, er = .88* _.r;
            for(var i= 0,num=3;i<12;++i,++num<13?0:num=1){
                ol.style = _.t[1];
                ol.points = [{
                    x: _.r+tr*Math.cos(angle),
                    y: _.r+tr*Math.sin(angle)
                },{
                    x: _.r+er*Math.cos(angle),
                    y: _.r+er*Math.sin(angle)
                }];
                paintLine(ol);

                ol.style = _.t[3];
                ol.points[0] = ol.points[1];
                ol.points[2] = {x: _.r,y: _.r};
                paintLine(ol);

                context.fillStyle = _.t[1];
                context.fillText(num,_.r+.81*_.r*Math.cos(angle),_.r+.81*_.r*Math.sin(angle));
                angle += Math.PI/6;
            }

            oa.r = .2*_.r;
            oa.style = _.t[1];
            paintArc(oa);

            oa.r = .04*_.r;
            oa.style = _.t[4];
            paintArc(oa);
        };

        _.hc = .55;
        _.mc = .70;
        _.sc = .85;

        // paint clock pointers and date info
        _.paintPs = function(context){
            context.clearRect(0,0,_.o.width,_.o.height);

            var curT = new Date();
            curT.setTime(curT.getTime()-_.d);
            var h = curT.getHours(),
                m = curT.getMinutes(),
                s = curT.getSeconds(),sa = s*Math.PI/30,
                ms = m + s/60,ma = ms*Math.PI/30,
                hs = h%12 + ms/60,ha = hs*Math.PI/6;

            context.textBaseline = 'middle';
            context.textAlign = 'center';
            context.font = .1*_.r+"px YaHei";
            context.fillStyle = _.t[2];
            context.fillText(h>=12?'PM':'AM',1.35*_.r,_.r);

            paintP(context,sa,_.sc);
            paintP(context,ma,_.mc);
            paintP(context,ha,_.hc);

            var oa = {
                context: context,
                type: 'fill',
                style: _.t[4],
                x: _.r,
                y: _.r,
                r: .02*_.r,
                sAngle: 0,
                eAngle: Math.PI*2,
                counterclockwise: true
            };
            paintArc(oa);

            _.iw = _.w/3;

            context.font = .4*_.iw+"px YaHei";
            context.fillStyle = '#000';
            context.lineWidth = .13*_.iw;

            var ty = 1.1*_.w+.5*_.iw,
                tx = .5*_.iw;

            oa.y = ty;
            oa.r = .3*_.iw;
            oa.type = 'stroke';
            oa.eAngle = -.5*Math.PI;

            context.fillText(db(h),tx,ty);
            oa.x = tx;
            oa.style = _.t[2];
            oa.sAngle = ha-.5*Math.PI;
            paintArc(oa);

            tx += _.iw;
            context.fillText(db(m),tx,ty);
            oa.x = tx;
            oa.style = _.t[1];
            oa.sAngle = ma-.5*Math.PI;
            paintArc(oa);

            tx += _.iw;
            context.fillText(db(s),tx,ty);
            oa.x = tx;
            oa.style = _.t[0];
            oa.sAngle = sa-.5*Math.PI;
            paintArc(oa);
        };

        // start clock
        _.start = function(){
            _.d += (new Date()).getTime()-_.lt.getTime();
            _.paintPs(_.c.p.context);
            _.tm = setInterval(function(){
                _.paintPs(_.c.p.context);
            },1000);
        };

        // pause clock
        _.pause = function(){
            _.lt = new Date();
            _.tm = clearInterval(_.tm);
        };

        // set time  Date()
        _.setTime = function(date){
            _.d = (new Date()).getTime()- date.getTime();
        };

        // double bit int
        var db = function(x){
            return x<10?"0"+x:x;
        };

        // paint pointer
        var paintP = function(context,angle,c){
            var o = {
                context: context,
                type: 'fill',
                style: _.t[2],
                points: [{
                    x: _.r*(1+c*Math.sin(angle)),
                    y: _.r*(1-c*Math.cos(angle))
                },{
                    x: _.r*(1+.02*Math.cos(angle)),
                    y: _.r*(1+.02*Math.sin(angle))
                },{
                    x: _.r*(1-.15*c*Math.sin(angle)),
                    y: _.r*(1+.15*c*Math.cos(angle))
                },{
                    x: _.r*(1-.02*Math.cos(angle)),
                    y: _.r*(1-.02*Math.sin(angle))
                }]
            };

            paintLine(o);
        };

        // paint arc 
        /*options = {
            context,            // canvas context
            type,               // 'stroke' or 'fill'
            style,              // stroke/fill style
            x,                  // center coordinates
            y,
            r,                  // radius
            sAngle,             // start angle
            eAngle,             // end angel
            counterclockwise    // T/F
        }*/
        var paintArc = function(o){
            o.context.beginPath();
            o.context.arc(o.x, o.y, o.r, o.sAngle, o.eAngle, o.counterclockwise);
            if(o.type==='stroke'){
                o.context.strokeStyle = o.style;
                o.context.stroke();
            }
            else{
                o.context.fillStyle = o.style;
                o.context.fill();
            }
            o.context.closePath();
        };

        // paint line or polygon
        /*options = {
            context,            // canvas context
            type,               // 'stroke' or 'fill'
            style,              // stroke/fill style
            points,             // points coordinates points=[[x1,y1],[x2,y2]...[xn,yn]]
        }*/
        var paintLine = function(o){
            var len = o.points.length;
            if(len<2) return ;
            o.context.beginPath();
            o.context.moveTo(o.points[0].x, o.points[0].y);
            for(var i=1;i<len;++i){
                o.context.lineTo(o.points[i].x, o.points[i].y);
            }
            if(o.type==='stroke'){
                o.context.strokeStyle = o.style;
                o.context.stroke();
            }
            else{
                o.context.lineTo(o.points[0].x, o.points[0].y);
                o.context.fillStyle = o.style;
                o.context.fill();
            }
            o.context.closePath();
        }
    };

    $.fn.clock = function(o){
        var len = this.length;

        // more than one selector
        // chain job
        return this.each(function(index){
            var _ = $(this),
                key = 'clock'+(len>1?'-'+ ++index:''),
                instance = (new Clock().init(_,o));
            _.data(key,instance).data('key',key);
        });
    };

})(jQuery);