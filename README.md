# backward5

Provides backwards compatibility for HTML5 by using jQuery UI.

## Usage

You'll need to include jQuery UI and some jQuery plugins (e.g. colorpicker) bundled with this repository.

Use this inside head element:
<code>
        <!-- title and meta tags here -->


        <!-- include jQuery UI -->
        <link href="jquery-ui/css/smoothness/jquery-ui-1.10.0.custom.css" rel="stylesheet"/>
        <script src="jquery-ui/js/jquery-1.9.0.js" type="text/javascript"></script>
        <script src="jquery-ui/js/jquery-ui-1.10.0.custom.js" type="text/javascript"></script>

        <!-- additional jQuery plugins - not bundled with jQuery UI -->
        <link href="jquery-colorpicker/colorPicker.css" rel="stylesheet" type="text/css"/>
        <script src="jquery-colorpicker/jquery.colorPicker.js" type="text/javascript"></script>

        <!-- include backward5 compatibility utility -->
        <script src="backward5.js" type="text/javascript"></script>

        <!-- include your stylesheet -->
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
</code>

Add onload event handler to the body element:

<code>
    onload="javascript:backward5();"
</code>