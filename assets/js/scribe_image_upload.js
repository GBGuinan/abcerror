// define('scribe-image-upload',[],function (scribe) {
//         var uploadImageCommand = new scribe.api.Command('insertImage');
//         uploadImageCommand.nodeName = 'IMG';

//         if (typeof options == 'function') {
//             prompt = options;
//         };

//         uploadImageCommand.execute = function () {
//             $(".upload-box").show();
//             var addClick =function(){
//                 // 1. get the url of the image
//                 var url = $("input.my-unique-class").val();
//                 var $img = $("<img>").attr({src:url});
//                 var html = $img.get(0).outerHTML;
//                 $(".upload-box").hide();
//                 // reset anything in the upload box

//                 scribe.api.SimpleCommand.prototype.execute.call(this, html);
//                 $(".add-button").unbind("click", addClick)

//             }
//             $(".add-button").click(addClick);

            
//         }

//         scribe.commands.uploadImage = uploadImageCommand;
// });

