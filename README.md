# Todo-App
In this project, you will be developing a Todo app using the following tools and frameworks:

VueJS
Vuex (It is possible to replace vuex store with Firebase's realtime database completely. In that case, you don't need to use vuex.)
Vue Router
Vuetify
Firebase
You may add other libraries if you think you need them.

In this todo list app, you will implement a todo list with sub-tasks.

Here are the features that your app must have:

User can self register using email/password/confirm-password or Google OAuth2.
User can login using email/password or Google OAuth2.
User can create a todo item.
User can specify target complete date for todo item.
User can mark a todo item as completed or done.
The completed items can be:
Shown on todo list - showing the item but style the completed items so that they can be distinguished from unfinished items
Hidden on todo list - the items will be hidden from the todo list be not deleted from the database. User can toggle show/hide completed items.
Cleared from todo list - the completed items can be permanently removed from the database.
Each todo item can have sub-tasks.
Sub-tasks can be shown or removed.
User can mark sub task as completed.
Todo item can have target completion date and the item with target completion date will be shown at the top of the list.
There is a progress bar indicator to show the progress of the todo item. The progress can be 0 or 100% for an item with no sub-task. If the item has sub-task, assume that all sub-tasks have equal weight to calculate the item progress.
User can mark at the item that has sub-tasks as completed. It will automatically mark the sub-tasks as completed.
If all the subtasks are marked as completed, then the item will be considered as completed.
Show the number of active and completed tasks (that aren't cleared/removed from database)
User can logout.
[Challenge - Don't need to complete this] Add support for multiple todo lists.
