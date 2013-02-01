# backward5

Provides backwards compatibility for HTML5 by using jQuery UI.

## Usage

You'll need to include jQuery UI and some jQuery plugins (e.g. colorpicker) bundled with this repository.

Use this inside head element:
<code>
    &lt;title&gt;Backward5&lt;/title&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;

    &lt;!-- include jQuery UI --&gt;
    &lt;link href=&quot;jquery-ui/css/smoothness/jquery-ui-1.10.0.custom.css&quot; rel=&quot;stylesheet&quot;&gt;
    &lt;script src=&quot;jquery-ui/js/jquery-1.9.0.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;jquery-ui/js/jquery-ui-1.10.0.custom.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

    &lt;!-- additional jQuery plugins - not bundled with jQuery UI --&gt;
    &lt;link href=&quot;jquery-colorpicker/colorPicker.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;/&gt;
    &lt;script src=&quot;jquery-colorpicker/jquery.colorPicker.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

    &lt;!-- include backward5 compatibility utility --&gt;
    &lt;script src=&quot;backward5.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

    &lt;!-- include your stylesheet --&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/style.css&quot;/&gt;
</code>

Add onload event handler to the body element:

<code>
    onload="javascript:backward5();"
</code>