# ʕっ•ᴥ•ʔっ airjam-project
**AirJam** is an mobile apllication run on Android OS.

Its purpose is to be on-demand service for every air conditioner issues by helping you find the trusted and skilled professionals to solve your problems within few steps!

This app will be implement using `react-native` framework, that’s JavaScript and React, to prove the understanding of basic react-native.

I've write this blog about this project, find out below!

- [What I’m going on behind-the-scenes to make AirJam looks smarter](https://medium.com/@m.treerungroj/what-im-going-on-behind-the-scenes-to-make-airjam-looks-smarter-480058bc31e0)

- [👩‍🔧 Hello world, this is AirJam.](https://medium.com/@m.treerungroj/hello-world-this-is-airjam-e6fc13d922e1)

## Prerequisite
- `NPM` or `Yarn`
- SDK Platforms and Google APIs: You might download it from Android Studio.
- Physical Android device for running app

## To run this project
You can follow the step from [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) of React Naive.

Note that the development OS here is Windows with target OS Android.

1. Clone and install needed packages
```
git clone https://github.com/mtreerungroj/airjam-project.git

cd airjam-project
npm install หรือ yarn install
```

2. Connect Android device to your computer, check and reverse server connection
```
adb devices

adb reverse tcp:8081 tcp:8081
```

3. run the project, and ENJOY!
```
npm install -g react-native-cli

react-native run-android
```
