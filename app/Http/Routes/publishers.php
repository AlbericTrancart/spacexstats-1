<?php
Route::group(array('prefix' => 'missioncontrol/publishers'), function() {

    Route::group(array('middleware' => 'mustBe:Subscriber'), function() {

        Route::get('/{publisherId}', array(
            'as' => 'missionControl.publishers.get',
            'uses' => 'PublishersController@get'
        ));

        Route::any('/create', array(
            'as' => 'missionControl.publishers.create',
            'uses' => 'PublishersController@create'
        ));

        Route::any('/{publisherId}/edit', array(
            'as' => 'missionControl.publishers.edit',
            'uses' => 'PublishersController@edit'
        ));
    });
});