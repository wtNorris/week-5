User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I click into a time block
THEN I can enter an event
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
-I could not get this to work with dayjs but I could get it to work with moment so :/ I'm sorry to the pretend team who has to deal with this code in the pretend future.-

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist