window.onload = function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var appStoreUrl = "https://apps.apple.com/us/app/supermyan/id6523422437";
    var playStoreUrl = "https://play.google.com/store/apps/details?id=com.uabfintech.supermyan&hl=en";
    var fallbackUrl = "https://uatmoe.uabpay.com.mm/home";

    var buttonsDiv = document.getElementById("buttons");

    function createButton(text, url, bgColor, openInNewTab = false) {
        var button = document.createElement("a");
        button.href = url;
        button.className = `block w-64 px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md ${bgColor} hover:opacity-80 transition`;
        button.innerText = text;
        if (openInNewTab) {
            button.target = "_blank";
        }
        buttonsDiv.appendChild(button);
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        createButton("Download on the App Store", appStoreUrl, "bg-blue-600");
    } else if (/android/i.test(userAgent)) {
        // Try opening Play Store
        var opened = false;
        setTimeout(function () {
        if (!opened) {
            // If Play Store didn't open, show fallback button
            createButton(`Download ${appName} for Android`, fallbackUrl, "bg-gray-600");
        }
        }, 2000); // Check after 2 seconds
        window.location = playStoreIntentUrl;
        setTimeout(function () {
            opened = true;
        }, 100);
    } else {
        createButton("Download for Other Devices", fallbackUrl, "bg-gray-600");
    }
};
