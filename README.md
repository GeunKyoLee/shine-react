# SHINE-REACT

*Open Source Meteor-React boilerplate Project*

[공식 홈페이지](http://shinejs.io)

SHINE-REACT 프로젝트는 Meteor 플랫폼과 React 프레임워크를 이용하여 product 수준의 앱을 개발하기 위한 기반 소스를 제공하는 데에 목표를 두고 있습니다.  

일반적인 앱의 제작에 필요한 회원 로그인, 파일 업로드, 로그, 다국어 지원, 스타일 처리, 각종 대화창 등의 공통적인 기능을 미리 구현하여 두고
서비스에 필요한 본연의 기능에 집중하여 개발할 수 있도록 하고자 합니다.

더 자세한 내용은 위키를 참조하시기 바랍니다:  
[SHINE-REACT Wiki](https://github.com/shine-js/shine-react/wiki)

## Features

* Front app, Mobile app과 Admin app 3 개의 Meteor app으로 구성  
* 커스텀 accounts-ui
* [cloudinary.com](http://cloudinary.com/) cloud service로 이미지 직접 업로드
* I18n ready

## Packages

    
    meteor-base             # Packages every Meteor app needs to have
    mobile-experience       # Packages for a great mobile UX
    mongo                   # The database Meteor supports right now
    blaze-html-templates    # Compile .html files into Meteor Blaze views
    session                 # Client-side reactive dictionary for your app
    jquery                  # Helpful client-side library
    tracker                 # Meteor's client-side reactive programming library
    
    standard-minifiers      # JS/CSS minifiers run for production mode
    es5-shim                # ECMAScript 5 compatibility for older browsers.
    ecmascript              # Enable ECMAScript2015+ syntax in app code
    
    meteorhacks:npm                 # Support using npm packages
    cosmos:browserify
    
    react                           # React package
    reactrouter:react-router        # React router 
    #reactrouter:react-router-ssr
    
    less                            # CSS Less
    fortawesome:fontawesome         # Icon package
    shinejs:shine-theme-[app-name]  # Style theme
    
    shinejs:i18n                    # i18n
    shinejs:react-overlays          # overlay
    shinejs:react-spin              # spinner
    shinejs:react-cloudinary        # cloudinary image upload
    momentjs:moment                 # date time utility
    check                           # security for RPC
    
    shinejs:react-accounts-ui       # accounts-ui
    accounts-password

