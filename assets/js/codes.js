//

//register the onclick for the toobar buttons

function ziggeobbpressStartRecording(type) {

	if(type === null || typeof type === 'undefined') {
		ziggeoDevReport('Unspecified recording type' , 'error');
		return false;
	}

	ziggeoShowOverlayWithRecorder(type);

	ZiggeoWP.hooks.set('ziggeo_overlay_popup_on_verify', 'ziggeobbpress_reply_public_recording', function(embedding) {

		//We should check if the "bbPress Enable TinyMCE Visual Tab" plugin is used and it turned on TinyMCE
		// the element with class "mce-tinymce" will be right in front of the standard fields

		//Do we have the default reply form shown?
		if(document.getElementById('bbp_reply_content')) {
			
			var _textelement = document.getElementById('bbp_reply_content');

			if(_textelement.previousSibling && _textelement.previousSibling.className.indexOf('mce-tinymce') > -1) {
				if(_textelement.style.display === 'none') {
					//So now we know that the TinyMCe editor is enabled and that it is the one that is currently active
					tinyMCE.activeEditor.setContent( tinyMCE.activeEditor.getContent() + '[ziggeoplayer]' +
																							embedding.get('video') +
																						'[/ziggeoplayer]');
					return true;
				}
			}

			//Lets add the token into it then
			_textelement.textContent += '[ziggeoplayer]' +
											embedding.get('video') +
										'[/ziggeoplayer]';
		}
		else {
			//Lets just show the code that they should copy paste
			alert('Video: [ziggeoplayer]' + embedding.get('video') + '[/ziggeoplayer]');
		}

	});

	return true;
}