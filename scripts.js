var today=12
var day;


//console.log(today);


switch(today)
{
    case 0:
           day ="sunday";
           break;
    case 1:
            day ="monday";
            break;
    case 2:
            day ="tuesday";
            break;
    case 3:
            day ="wendsday";
            break; 
    case 4:
            day ="thursday";
            break; 
    case 5:
            day ="friday";
            break;
    case 6:
            day ="saturday";
            break;
            default:
                day="your value not fond";
            
}
//console.log("today is:"+day);
document.write("today is:"+day);