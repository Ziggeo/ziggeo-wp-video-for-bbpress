<?php

//
// Settings validation
//

//Checking if WP is running or if this is a direct call..
defined('ABSPATH') or die();




function ziggeobbpress_validate($input) {
	$options = get_option('ziggeobbpress');

	//Defaults
	if($options === false || $options === '') {
		$options = array(
			'on_forum' => 1,
			'on_topic' => 1,
			'on_reply' => 1
		);
	}

	if(isset($input['on_forum'])) {
		$options['on_forum'] = (int)$input['on_forum'];
	}
	else {
		$options['on_forum'] = 0;
	}

	if(isset($input['on_topic'])) {
		$options['on_topic'] = (int)$input['on_topic'];
	}
	else {
		$options['on_topic'] = 0;
	}

	if(isset($input['on_reply'])) {
		$options['on_reply'] = (int)$input['on_reply'];
	}
	else {
		$options['on_reply'] = 0;
	}

	if(isset($input['public_recorder'])) {
		$options['public_recorder'] = (int)$input['public_recorder'];
	}
	else {
		$options['public_recorder'] = 0;
	}

	if(isset($input['public_screen'])) {
		$options['public_screen'] = (int)$input['public_screen'];
	}
	else {
		$options['public_screen'] = 0;
	}


	return $options;
}

?>