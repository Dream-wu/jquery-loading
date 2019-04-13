;(function ($) {

    /**
     * 显示loading
     * @param a  透明度
     * @param color  进度条颜色
     */
    $.fn.showLoading= function(a, color){
        var $this = $(this);
        
        // 防止出现多层loading
        if($this.has(".w-loading").length>0) {
            return;
        }
        var offset =$this.offset();
        var html = `<div class="w-loading" style='position:absolute;z-index:99;left:${offset.left}px;top:${offset.top}px;width:${$this.width()}px;height:${$this.height()}px'>
            <div class="w-loading-bg" style='background: rgba(0,0,0,${a});height: 100%'></div>
            <div class="w-loading-block">
                <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path" stroke=${color}></circle></svg>
            </div>
        </div>`;
        $this.append(html)
    };
    //关闭loading
    $.fn.closeLoading= function(){
        $(this).find(".w-loading").remove();
    };
})(jQuery);