<?php
namespace SpaceXStats\Enums;

abstract class NotificationType {
    const newMission = 1;
    const launchTimeChange = 2;
    const tMinus24HoursEmail = 3;
    const tMinus3HoursEmail = 4;
    const tMinus1HourEmail = 5;
    const newSummaries = 6;
    const tMinus24HoursSMS = 7;
    const tMinus3HoursSMS = 8;
    const tMinus1HourSMS = 9;
}