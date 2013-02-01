# backward5

Provides backwards compatibility for HTML5 by using jQuery UI.

## Usage

You'll need to include jQuery UI and some jQuery plugins (e.g. colorpicker) bundled with this repository.

E.g.
<code>
    &lt;head&gt;
        &lt;title&gt;Backward5&lt;/title&gt;
        &lt;meta http-equiv="Content-Type" content="text/html&#59; charset=utf-8"/&gt;

        &lt;!-- include jQuery UI --&gt;
        &lt;link href="jquery-ui/css/smoothness/jquery-ui-1.10.0.custom.css" rel="stylesheet"&gt;
        &lt;script src="jquery-ui/js/jquery-1.9.0.js" type="text/javascript"&gt;&lt;/script&gt;
        &lt;script src="jquery-ui/js/jquery-ui-1.10.0.custom.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;!-- additional jQuery plugins - not bundled with jQuery UI --&gt;
        &lt;link href="jquery-colorpicker/colorPicker.css" rel="stylesheet" type="text/css"/&gt;
        &lt;script src="jquery-colorpicker/jquery.colorPicker.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;!-- include backward5 compatibility utility --&gt;
        &lt;script src="backward5.js" type="text/javascript"&gt;&lt;/script&gt;

        &lt;!-- include your stylesheet --&gt;
        &lt;link rel="stylesheet" type="text/css" href="css/style.css"/&gt;

    &lt;/head&gt;
</code>

Add onload event handler to the body element:

<code>
    onload="javascript:backward5();"
</code>