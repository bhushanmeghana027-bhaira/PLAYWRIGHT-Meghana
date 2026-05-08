import {test,expect,Locator} from '@playwright/test'

test(" frames demo", async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total number of frames present on the webpage

    const frames = page.frames(); //returns array of rames associated with the webpage
    console.log("Number of frames:",frames.length)

    // approach 1 : using page.frame()
    //  only name or url of the frame u can write here when u use page.frame
    // const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    // if(frame1){
    //     frame1.locator("[name='mytext1']").fill("Hello");
    // }

    // else{
    //     console.log("Frame is not avaiulable");
    // }
    // await page.waitForTimeout(3000);

    //  approach 2: using framelocator
    // in this method u can use anything not just name or url of the frame
//    page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("hibye");
//    or 
const inputbox =  page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
await inputbox.fill("hibye");
await page.waitForTimeout(5000);

})

test.only("frames demo", async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
   const frame3= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   if(frame3){
    await frame3.locator("[name='mytext3']").fill("welcome");
    const childframes= frame3.childFrames();
    console.log("Child frames inside frame3:",childframes.length)
    const radio = childframes[0].getByLabel("I am a human");
    radio.check();
    await expect(radio).toBeChecked();
   }
   else{
    console.log("Frame 3 did not exisit");
   }
})