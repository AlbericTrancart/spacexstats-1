var ReviewViewModel=function(){var n=this;n.objects=ko.observableArray(),n.init=function(){$.ajax("/missioncontrol/review/get",{dataType:"json",type:"GET",success:function(o){$.each(o,function(o,t){n.objects.push(t)})}})},n.action=function(n,o){$.ajax("/missioncontrol/review/update/"+n,{dataType:"json",type:"POST",data:{action:o},success:function(n){},error:function(n){}})},n.init()};