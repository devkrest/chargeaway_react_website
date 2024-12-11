import AppleLogo from "@/assets/images/logo/logo_apple.png";
import LogoGoogle from "@/assets/images/logo/logo_google.png";
import AppImage from "@/assets/images/hero/app-image.webp";
import { useEffect } from "react";
function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window?.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "iOS";
  }

  return "unknown";
}
export function AppPage() {
  useEffect(() => {
    const device = getMobileOperatingSystem();
    if (device == "Android") {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.chargeaway"
      );
    } else if (device == "iOS") {
      window.location.replace(
        "https://apps.apple.com/us/app/chargeaway/id6670532858"
      );
    }
  }, []);
  return (
    <div className="w-full overflow-hidden h-[78.5vh]">
      <div className="sm:px-16 px-6 grid max-w-screen-2xl mx-auto py-8 lg:py-16 grid-cols-2 gap-5">
        <div className="col-span-1 flex flex-col flex-1 justify-center items-start space-y-4 lg:min-w-96">
          <p className="text-primary border px-3 py-1 rounded-full">
            {"Mobile App"}
          </p>
          <p className="md:text-3xl text-2xl font-extrabold ">
            {
              "ChargeAway simplifies EV charging with real-time station updates and seamless payments."
            }
          </p>
          <StoreButton />
        </div>
        <div className="col-span-1  lg:flex-2 h-[30rem] w-full overflow-hidden flex flex-col">
          {/* <Image src={PlaceholderGrideImage} alt="Grid" className="-rotate-[35deg] lg:translate-x-60" /> */}
          <div className="flex items-center justify-center h-[30rem]">
            <img src={AppImage} className="object-contain"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleButton() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.chargeaway"
      target="_blank"
      className="py-1 duration-300 hover:bg-opacity-80 flex gap-x-2 bg-black text-white rounded-lg px-2 justify-center items-center"
    >
      <img src={LogoGoogle} alt="Google" className="h-5 w-5" />
      <div>
        <p className="text-[9px]">Get It On</p>
        <p className="font-semibold leading-none ">Google Play</p>
      </div>
    </a>
  );
}

function AppleButton() {
  return (
    <a
      href="https://apps.apple.com/us/app/chargeaway/id6670532858"
      target="_blank"
      className="py-2 duration-300 hover:bg-opacity-80 flex gap-x-2 bg-black text-white rounded-lg px-3 justify-center items-center"
    >
      <img src={AppleLogo} alt="Apple" className="h-6 w-5" />
      <div>
        <p className="text-[9px]">Download On The</p>
        <p className="font-semibold leading-none">App Store</p>
      </div>
    </a>
  );
}

function StoreButton() {
  return (
    <div className="flex gap-5 flex-wrap">
      <GoogleButton />
      <AppleButton />
    </div>
  );
}
