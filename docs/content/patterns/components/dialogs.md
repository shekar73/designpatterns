---
title: "Dialogs"
preview: true
---

[pattern]
### General

&nbsp;

#### Components
Dialogs contain a combination of: a title, a body, and a footer. 

&nbsp;

#### Button placement
The primary action buttons are generally placed on the right, and if applicable, a cancel button is placed on the left. 

&nbsp;

#### Button styles
In general, use the button style that matches the action. In some scenarios, there may be no button that takes priority over another, and they all have similar actions, in which case it might be best to use the default button style for them all.

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Rename file</h4>
      </div>
      <div class="modal-body">
          <form role="form" class="">
            <div class="form-group">
                <label for="tb12" class="control-label">Enter a new file name</label>
                <input type="text" class="form-control" id="tb12" value="dialogs.md">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
[/preview]

```html

```

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 600px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Find & replace</h4>
      </div>
      <div class="modal-body">
          <form role="form" class="form-horizontal">
            <div class="form-group">
                <label for="tb14" class="col-sm-4 control-label">Find</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="tb14">
                </div>
            </div>
            <div class="form-group">
                <label for="tb13" class="col-sm-4 control-label">Replace with</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="tb13">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-4 col-sm-8">
                    <div class="checkbox">
                        <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Match case</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Whole word</label>
                    </div>
                </div>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Find</button>
        <button type="button" class="btn btn-default" data-dismiss="modal" disabled>Replace</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Replace all</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>
[/preview]

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h3 class="text-success">Thank you!</h3>
        <p>Your request has been submitted.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="pull-left btn btn-default">Back</button>
        <button type="button" class="btn btn-success">View request</button>
      </div>
    </div>
  </div>
</div>
[/preview]

```html

```
[/pattern]

[pattern]
### Confirmation

A confirmation dialog is short, simple dialog that ensures the user is performing an action intentionally. This is especially useful for dangerous, irreversible operations.

A confirmation dialog may or may not contain an icon.

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h3 class="text-danger">Are you sure?</h3>
        <p>All user information will be deleted.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger">Delete user</button>
      </div>
    </div>
  </div>
</div>
[/preview]
[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h3 class="text-warning">Are you sure?</h3>
        <p>Giving someone Owner permission will allow them to see your billing information.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="pull-left btn btn-default">Cancel</button>
        <button type="button" class="btn btn-warning">Grant permission</button>
      </div>
    </div>
  </div>
</div>
[/preview]

```html

```

[/pattern]

[pattern]
### Actionless

An actionless dialog may block user interaction for a period of time, usually until another event occurs.

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content modal-center">
      <div class="modal-body">
          <p>Uploading document. Please wait...</p>
        <div class="progress" style="margin-bottom: 0;">
          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
            <span class="sr-only">60% Complete</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
[/preview]

```html

```
[/pattern]

[pattern]
### Modes
Dialogs can prevent the user from performing actions behind/around the dialog if desired. There are 3 general modes:

- __Modal__: A modal dialog __prevents__ the user from interacting with all other areas of the application until the dialog is dismissed.
- __Modeless__: A modeless dialog __allows__ the user interact with all other areas of the application without dismissing the dialog. 
- __Mixed-modal__: A mixed-modal dialog may block __some__ areas of the application, but not others. E.g., a dialog pertaining to one document, but not another visible document.

[/pattern]

[pattern]
### Live
[preview]
<button class="btn btn-default" data-toggle="modal" data-target="#myModal">
  Show modal
</button>
<div class="modal fade" id="myModal">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Rename file</h4>
      </div>
      <div class="modal-body">
          <form role="form" class="">
            <div class="form-group">
                <label for="tb12" class="control-label">Enter a new file name</label>
                <input type="text" class="form-control" id="tb12" value="dialogs.md">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
[/preview]
[/pattern]