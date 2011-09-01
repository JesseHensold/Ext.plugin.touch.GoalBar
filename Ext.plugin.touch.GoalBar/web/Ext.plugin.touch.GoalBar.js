/**
 * 
 */
// create namespace for plugins
Ext.namespace('Ext.plugin.touch');

Ext.plugin.touch.GoalBar = function(config) {
    Ext.apply(this, config);
};


//plugin code
Ext.extend(Ext.plugin.touch.GoalBar, Ext.util.Observable, {
    init:function(goalbar) {
    	var complete=goalbar.data.current/goalbar.data.complete;
    	Ext.apply(goalbar,{
	    	tpl:'<tpl for=".">'
	    	+'<div class="metric-info">{start}'
			+'<div class="goal progressbar"><div class="progress-complete" style="width:'+complete+'%"></div></div>'
			+'</div>'
			+'</tpl>'
    	});
    }// end of function init
}); // end of extend


Ext.preg("ext.plugin.touch.goalbar", Ext.plugin.touch.GoalBar);