Dropzone.options.uploadedFilesDropzone={autoProcessQueue:!1,maxFilesize:1024,addRemoveLinks:!0,uploadMultiple:!0,parallelUploads:5,maxFiles:5,init:function(){var e=this;$("#upload").on("click",function(){e.processQueue()})},successmultiple:function(e,t){var i=!1;$.each(e,function(e,o){if(t.errors){i=!0;var n,a,s,l,r;if(o.previewElement)for(o.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),l=o.previewElement.querySelectorAll("[data-dz-errormessage]"),r=[],a=0,s=l.length;s>a;a++)n=l[a],r.push(n.textContent=t)}else o.previewElement.classList.add("dz-success")}),i===!0?$.each(e,function(e,t){t.status="queued"}):($.each(t.objects,function(e,t){UploadViewModel.uploadedFiles.push(t)}),UploadViewModel.uploadSection("form"),$(".rich-select").richSelect(),$(".tagger").suggest())}};var UploadViewModel=function(){var e=this;e.changeVisibleSection=function(t){e.visibleSection(t)},e.visibleSection=ko.observable("upload"),e.uploadSection=ko.observable("dropzone"),e.uploadedFiles=ko.observableArray([]),e.templateObjectType=function(e){return 1==e.type?"image-file-template":2==e.type?"gif-file-template":3==e.type?"audio-file-template":4==e.type?"video-file-template":5==e.type?"document-file-template":void 0},e.changeVisibleTemplate=function(t,i){var o=ko.contextFor(i.target);e.visibleTemplate(ko.unwrap(o.$index))},e.visibleTemplate=ko.observable("0"),e.formButtonText=ko.computed(function(){return"Submit"}),e.postType=ko.observable(),e.retrieveTweet=function(e,t){var i=t.currentTarget.value;if(-1!==i.indexOf("twitter.com")){var o=i.split("/"),n=o[o.length-1];$.ajax("/missioncontrol/create/retrievetweet/"+n,{dataType:"json",type:"GET",success:function(e){console.log(e)}})}return!0},e.submitToMissionControl=function(e,t){console.log(e),$.ajax("/missioncontrol/create/submit",{dataType:"json",type:"POST",headers:t,data:{files:e},success:function(e){console.log(e)}})},e.submitFiles=function(t,i){var o=$(i.currentTarget).siblings(".files-details").find("form").map(function(){return{title:$(this).find('[name="title"]').val(),summary:$(this).find('[name="summary"]').val(),mission_id:$(this).find("#mission_id").data("value"),author:$(this).find('[name="author"]').val(),attribution:$(this).find('[name="attribution"]').val(),tags:$(this).find(".tagger").prop("value"),type:$(this).find('[name="type"]').val(),association:$(this).find('[name="anonymous"]').val()}}).get(),n={"Submission-Type":"files"};e.submitToMissionControl(o,n)},e.submitPost=function(t,i){var o=$(i.currentTarget).parent();if("tweet"==e.postType())var n={url:o.find('[name="tweet-url"]').val(),author:o.find('[name="tweet-author"]').val(),tweet:o.find('[name="tweet"]').val()},a={"Submission-Type":"tweet"};e.submitToMissionControl(n,a)},e.submitWriting=function(e,t){}};