
$(document).ready(function() {
    $('.works__arrow_right').on('click', function(e) {
        e.preventDefault(); 
        var $this = $(this);
            workSlider = $this.closest('.works__slider');
            worksList = workSlider.find('.works__list');
            worksItem =  worksList.find('.works__item');
            worksItemIndex =  worksList.find('.works__item').length;
            worksItemLeft =  worksItem.filter('.works__item_left');
            worksItemActive =  worksItem.filter('.works__item_active');
            worksItemRight =  worksItem.filter('.works__item_right');
            leftIndex = worksItemLeft.index();
            activeIndex = worksItemActive.index();
            rightIndex = worksItemRight.index();

        $(worksList).animate({ opacity : 0 }, 400);
        setTimeout(function(){
            if(rightIndex==worksItemIndex-1){
                worksItemLeft.removeClass('works__item_left').next().addClass('works__item_left');
                worksItemActive.removeClass('works__item_active').next().addClass('works__item_active');
                worksItem.removeClass('works__item_right').first().addClass('works__item_right');
            } else if(activeIndex==worksItemIndex-1){
                worksItemLeft.removeClass('works__item_left').next().addClass('works__item_left');
                worksItem.removeClass('works__item_active').first().addClass('works__item_active');
                worksItemRight.removeClass('works__item_right').next().addClass('works__item_right');
            }else{
                worksItem.removeClass('works__item_left').first().addClass('works__item_left');
                worksItemActive.removeClass('works__item_active').next().addClass('works__item_active');
                worksItemRight.removeClass('works__item_right').next().addClass('works__item_right');
            }  
        },400)
        $(worksList).animate({ opacity : 1 }, 400); 
    })

   
    $('.works__arrow_left').on('click', function(e) {
        e.preventDefault(); 
        var $this = $(this);
            workSlider = $this.closest('.works__slider');
            worksList = workSlider.find('.works__list');
            worksItem =  worksList.find('.works__item');
            worksItemIndex =  worksList.find('.works__item').length;
            worksItemLeft =  worksItem.filter('.works__item_left');
            worksItemActive =  worksItem.filter('.works__item_active');
            worksItemRight =  worksItem.filter('.works__item_right');
            leftIndex = worksItemLeft.index();
            activeIndex = worksItemActive.index();
            rightIndex = worksItemRight.index();

            $(worksList).animate({ opacity : 0 }, 400);
        setTimeout(function(){
            if(rightIndex==0){
                worksItemLeft.removeClass('works__item_left').prev().addClass('works__item_left');
                worksItemActive.removeClass('works__item_active').prev().addClass('works__item_active');
                worksItem.removeClass('works__item_right').last().addClass('works__item_right');
            } else if(activeIndex==0){
                worksItemLeft.removeClass('works__item_left').prev().addClass('works__item_left');
                worksItem.removeClass('works__item_active').last().addClass('works__item_active');
                worksItemRight.removeClass('works__item_right').prev().addClass('works__item_right');
            }else{
                worksItem.removeClass('works__item_left').last().addClass('works__item_left');
                worksItemActive.removeClass('works__item_active').prev().addClass('works__item_active');
                worksItemRight.removeClass('works__item_right').prev().addClass('works__item_right');
            }    
        },400) 
        $(worksList).animate({ opacity : 1 }, 400); 
    })
})