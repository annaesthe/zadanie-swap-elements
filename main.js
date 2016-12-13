"use strict"

$(document).ready(function() {
        
        var parent1, next1,
            parent2, next2,
            parent3, next3,
            parent4, next4,
            parent5, next5;
    
    function swapElements(item1, item2, item3, item4, item5) {
        
        parent1 = item1.parentNode;
        next1   = item1.nextSibling;
        parent2 = item2.parentNode;
        next2   = item2.nextSibling;
        parent3 = item3.parentNode;
        next3   = item3.nextSibling;
        parent4 = item4.parentNode;
        next4   = item4.nextSibling;
        parent5 = item5.parentNode;
        next5   = item5.nextSibling;
        
        // ostatnie paragrafy przenieszone są na pierwszą pozycję
        parent1.insertBefore(item5, next1);
        parent2.insertBefore(item4, next5);
        parent3.insertBefore(item3, next4);
        parent4.insertBefore(item2, next3);
        parent5.insertBefore(item1, next2); 
    }

     $('#button1').click(function(przenies1) {
        swapElements($("#para1")[0], $("#para2")[0], $("#para3")[0], $("#para4")[0], $("#para5")[0]);
    });
  
       function swapElemReverse(elm1, elm2, elm3, elm4, elm5) {
        
        parent1 = elm1.parentNode;
        next1   = elm1.nextSibling;
        parent2 = elm2.parentNode;
        next2   = elm2.nextSibling;
        parent3 = elm3.parentNode;
        next3   = elm3.nextSibling;
        parent4 = elm4.parentNode;
        next4   = elm4.nextSibling;
        parent5 = elm5.parentNode;
        next5   = elm5.nextSibling;
           
        // przenosi paragrafy z pierwszej pozycji na ostatnią
           
        parent1.insertBefore(elm2, next1);
        parent2.insertBefore(elm3, next2);
        parent3.insertBefore(elm4, next3);
        parent4.insertBefore(elm5, next4);
        parent5.insertBefore(elm1, next5);

    }

     $('#button2').click(function(przenies2) {
        swapElemReverse($("#para1")[0], $("#para2")[0], $("#para3")[0], $("#para4")[0], $("#para5")[0]);
    });
  
});
        

