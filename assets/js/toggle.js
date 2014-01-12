$(document).ready(function(){
            
        (function($) {
            $.fn.toggleDisabled = function() {
                return this.each(function() {
                    var $this = $(this);

                    if ($this.attr('disabled')) {
                        $this.removeAttr('disabled');
                        $this.removeClass('disabled');
                    } else {
                        $this.attr('disabled', 'disabled');
                        $this.addClass('disabled');
                    }

                });
            };
        })(jQuery);
        
});

       