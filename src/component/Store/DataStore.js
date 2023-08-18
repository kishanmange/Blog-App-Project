

import React ,{createContext} from "react";
import { useState } from "react";
import Bollywood from "../Bollywood";
import Hollywood from "../Hollywood";

export const Store= createContext();



const DataStore = (props) => {
    const[data,setdata]=useState([
       {  
        id:1,
        cat:"Bollywood",
        urlforimage:"https://static.javatpoint.com/biography/images/salman-khan1.jpg",
        titel:"Salman as Hero",
        content:"Salman Salim Abdul Rashid Khan is an Indian actor, film producer, and television personality who works predominantly in Hindi films."
       ,discription:"Salman Salim Abdul Rashid Khan (pronounced [səlˈmɑːn xɑːn]; born 27 December 1965)[2] is an Indian actor, film producer, and television personality who works predominantly in Hindi films. In a film career spanning over thirty five years, Khan has received numerous awards, including two National Film Awards as a film producer, and two Filmfare Awards as an actor.[3] He is cited in the media as one of the most commercially successful actors of Indian cinema.[4][5] Forbes has included Khan in listings of the highest-paid celebrities in the world, in 2015 and 2018, with him being the highest-ranked Indian in the latter year."
      
      },
       {  
        id:2,
        cat:"Bollywood",
        urlforimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk_o19U3fH6d91hDVjBvq-mmCbWzO4qL0_A&usqp=CAU",
        titel:"Salman as Prem",
        content:"Prem, who looks like Prince Yuvraj Vijay Singh, replaces him just before his half-brother is set to be crowned as the king. Although Princess Maithili is engaged to Vijay, she falls in love with Prem. "
       },
       {  
        id:3,
        cat:"Bollywood",
        urlforimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFpLL8CLI7jPtJlhrTAYXqWXysHNrrdxQAw&usqp=CAU",
        titel:"Salman as vilan",
        content:"A farmer’s son is forced to leave the village and move to the city, where he soon becomes a dreaded gangster and crosses paths with a fearless cop determined to eliminate criminals. "
       },
       {  
        id:4,
        cat:"Bollywood",
        urlforimage:"https://static.toiimg.com/photo/imgsize-192048,msid-68999602/68999602.jpg",
        titel:"Salman as Radhe",
        content:"Tere Naam is a Hindi album released in 2003. There are a total of 12 songs in Tere Naam. The songs were composed by talented musicians such as Himesh Reshammiya and Sajid-Wajid. Listen to all of Tere Naam online on JioSaavn."

       },
       {  
        id:5,
        cat:"Bollywood",
        urlforimage:"https://i.ytimg.com/vi/xLnqMCwnmLI/sddefault.jpg",
        titel:"Salman at Gym ",
        content:"Even on a busy schedule, Salman Khan manages to squeeze in at least an hour or two of gymming every day, sometimes even after midnight."
       },
       {  
        id:6,
        cat:"Bollywood",
        urlforimage:"https://mylordganesha.files.wordpress.com/2014/08/salman6.jpg",
        titel:"Salman at Tample",
        content:"While there were rumours that Salman Khan would be giving Ganesh Chaturthi a miss this year, the Kick star has made sure that he and his family celebrate Ganpati even in his absence"
       },
       {  
        id:7,
        cat:"Bollywood",
        urlforimage:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/07/bajrangi-bhaijaan-review-news.jpg",
        titel:"Movie Bajrangi-Bhaijaan",
        content:"Guided by a good heart and an unwavering faith in Hanuman, Pawan Kumar Bajrangi Chaturvedi rises above the divisive bounds of nationality and religion to help a little Pakistani girl who is stranded in India."
       },
       {  
        id:8,
        cat:"Bollywood",
        urlforimage:"https://english.cdn.zeenews.com/sites/default/files/2023/07/30/1252302-elvish-salman-khan-youtub.jpg",
        titel:"Eavish vs Salman ",
        content:"Bigg Boss OTT 2: Salman Khan Brutally Trolled Online For Bashing Elvish Yadav After YouTuber Breaks Down On Weekend Ka Vaar"
        ,for:"Top-Post"
      },
       {  
        id:9,
        cat:"Bollywood",
        urlforimage:"https://static.toiimg.com/thumb/msid-102359908,imgsize-77562,width-400,resizemode-4/102359908.jpg",
        titel:"Gadar 2 ",
        content:"Sunny Deol was chosen for the role of Tara Singh for Ghadar 2, but was hesitant about the role saying that films like Gadar: Ek Prem Katha can be made only once in history. We had made Gadar but the audience made it a Blockbuster. Initially, I was a bit apprehensive about whether we would do justice and continue the legacy of the first part. ",
       for:"Top-Post"
      },
       {  
        id:10,
        cat:"Bollywood",
        urlforimage:"https://karnatakastateopenuniversity.in/wp-content/uploads/2022/05/KGF-3.jpg",
        titel:"K.G.F 3 ",
        content:"Hello everyone! It Is that time of the year again  the release date for KGF 3 is almost here! And to help tide you over, we’ve got a first look at the official poster for the movie. In addition, we’ve also revealed the cast members who will be appearing in KGF 3, as well as some exclusive details about the movie. So stay tuned – this release date is definitely going to be worth waiting for!"
       ,for:"Top-Post"
      },
       {  
        id:11,
        cat:"Bollywood",
        urlforimage:"https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Pushpa-2-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        titel:"Pushpa-2  ",
        content:"टॉलीवुड सुपरस्टार अल्लू अर्जुन (Allu Arjun) और रश्मिका मंदाना (Rashmika Mandanna) स्टारर निर्देशक सुकुमार (Sukumar) की अपकमिंग मूवी पुष्पा 2 (Pushpa 2) लगातार सुर्खियों में हैं। इस मूवी के धांसू टीजर के बाद फैंस में फिल्म को लेकर और भी ज्यादा एक्साइटमेंट बढ़ गया है। सुपरस्टार अल्लू अर्जुन और अदाकारा रश्मिका मंदाना स्टारर इस फिल्म को लेकर कई दिलचस्प जानकारियां लगातार सामने आ रही हैं। अब बज है कि इस मूवी में एक और खूबसूरत हसीना की एंट्री हो चुकी है। मीडिया में चल रहीं रिपोर्ट्स की मानें तो अदाकारा अल्लू अर्जुन और रश्मिका मंदाना स्टारर इस फिल्म के लिए मेकर्स एक खास आइटम सॉन्ग की प्लानिंग में हैं।"
        ,for:"The-Top-Post"
      },
      {
        id:12,
        cat:"Food",
        urlforimage:"https://static.toiimg.com/photo/65164556.cms",
        titel:"South Indian Special",
        content:"A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are served hot, often with chutney and sambar. ",
        for:"Articalpost"
      },
      {
        id:13,
        cat:"Food",
        urlforimage:"https://cdn.vox-cdn.com/thumbor/fWdJKI_dirNSL2bBWVVWVW_I4-Q=/0x0:7360x4912/1200x800/filters:focal(3092x1868:4268x3044)/cdn.vox-cdn.com/uploads/chorus_image/image/67000785/shutterstock_1435374326.0.jpg",
        titel:"Reclaiming Indian Food from the White Gaze",
        content:"Reclaiming Indian Food from the White Gaze The same food I was teased for as a kid has become trendy and divorced from its cultural origins. Now, Im using my cookbook to change the narrative.",
        for:"Articalpost"
      },
    
      {
        id:14,
        cat:"Food",
        urlforimage:"https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg",
        titel:"South Indian Special",
        content:"Indian Cuisine Fifth Best In The World We Indians love our food. We are proud of our vast variety of traditional food items, snacks and sweets. Perhaps, no other nation offers such a huge variety of cuisine.",
        for:"Articalpost"
      },
      {
        id:15,
        cat:"Food",
        urlforimage:"https://media.worldnomads.com/Explore/india/street-food-rajasthan-istock.jpg",
        titel:"6 Tasty Indian Dishes ",
        content:"The Great Indian Thali The thali or ‘plate’ is a culmination of the proverbial rice, spice, and everything nice.A thali comes with little bowls of curries, pickles, breads, rice, and sweets –almost like a crash-course on Indian food.",
        for:"Articalpost"
      },
      {
        id:16,
        cat:"Food",
        urlforimage:"https://possible.in/wp-content/uploads/2020/11/Ragda-Puri.jpg",
        titel:"PaniPuri",
        content:"We all enjoy Indian street foods; It’s tough to resist these mouthwatering temptations across the country.The good thing about Indian street food is the variety you can choose from, some of them that are actually healthy!",
        for:"Articalpost"
      },
      {
        id:17,
        cat:"Food",
        urlforimage:"https://cdn.audleytravel.com/3663/2618/79/1328394-indian-street-food-vendor.jpg",
        titel:"Jalebi",
        content:"Fafda and jalebi are truly a match made in heaven. This combo is not just a regular breakfast; it is an emotion for Gujaratis. For many families, enjoying fafda-jalebi is a must on Sunday mornings ",
        for:"Articalpost"
      },
      {
        id:18,
        cat:"Food",
        urlforimage:"https://i.ytimg.com/vi/uPs8oD2y4qA/maxresdefault.jpg",
        titel:"Famous Gujrati Food Locho ",
        content:"Surti Locho is very famous street food of Surat city.You can enjoy this healthy food as a breakfast in the morning or as a snacks.Main ingredients of Surti Locho is split bengal gram or chana dal.",
        for:"The-Top-Post"
      },
      {
        id:19,
        cat:"Food",
        urlforimage:"https://images.jdmagicbox.com/comp/mumbai/x6/022pxx22.xx22.221004204558.q2x6/catalogue/green-gujarat-worli-mumbai-restaurants-k5o6cjwm36.jpg",
        titel:"Gujrati Food Fafda",
        content:"Fafda recipe with step by step pics. Fafda is a fried crispy crunchy tasty snack made with besan (gram flour), laced with carom seeds and black pepper. It is a popular Gujarati vegan snack that is highly addictive and scrumptious. This recipe makes for fafda which tastes similar to the one you get outside.",
        for:"Top-Post"
      },
      {
        id:20,
        cat:"Food",
        urlforimage:"https://www.secondrecipe.com/wp-content/uploads/2019/03/undhiyu-final.jpg",
        titel:"Undhiyu - Gujarati mixed vegetable",
        content:"Undhiyu puri is one of the best winter dishes. It is Gujarati traditional food at its best. Basically, it is a mixed vegetable curry. There is a great liking for mix vegetable recipes in India. Most people like aloo gobi matar, veg jalfrezi, mixed cabbage curry. ",
        for:"Articalpost"
      },
      {
        id:21,
        cat:"Food",
        urlforimage:"https://rakskitchen.net/wp-content/uploads/2009/05/methi-thepla.jpg",
        titel:"Gujrati Food Thepla",
        content:"This is also one of the recipes, that I got from my friend Sangeeta and tried. It tasted great. This is the first time I am trying and I liked it very much.I love the taste and this methi roti or methi thepla and will often make appearance in the kitchen.It comes out really soft and stays soft even after long time. So perfect to pack for your lunch box and boondi raita is the perfect side dish for methi roti.",
        for:"Top-Post"
      },
      {
        id:22,
        cat:"Food",
        urlforimage:"https://i0.wp.com/bhavnaskitchen.com/wp-content/uploads/2016/02/KhandviPressureCooker-copy.jpg?fit=1200%2C828&ssl=1",
        titel:"Gujrati Food Khndvi",
        content:"Khandvi Recipe with step by step photos. This is a melt in the mouth, smooth, spiced and seasoned gram flour rolls. Khandvi is a delicious healthy snack from the Gujarati cuisine. If you’ve never made khandvi before, don’t worry! I’ve shared my best tips for making this recipe without any difficulty.",
        for:"Top-Post"
      },
      {
        id:23,
        cat:"Fitness",
        urlforimage:"https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg",
        titel:" National Fitness Day – May 4, 2024",
        content:"HISTORY OF NATIONAL FITNESS DAY Fitness in the U.S. during the Early National Period was influenced by Europe. Immigrants brought many aspects of their culture into the country, including Swedish and German gymnastics. It was in the 1800s that the idea of good health and fitness gained popularity. Since then, the United States took a huge step forward in terms of fitness in the 20th century. As sugars and fats increased in the diets of people due to the commercialization of food products, fitness became a prominent concept because people were becoming more aware of their health. Activity levels and food intake became measurable and thus controllable. ",
        for:"The-Top-Post"
      },
      {
        id:24,
        cat:"Fitness",
        urlforimage:"https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.668xw:1.00xh;0.260xw,0&resize=1200:*",
        titel:" Running: What It Is, Health Benefits, How to Get Started, and How to Get Better",
        content:" At about 30 to 45 minutes, these runs are meant to be conversational and fun. You should feel good.",
        for:"Articalpost"
      },
      {
        id:25,
        cat:"Fitness",
        urlforimage:"https://i.ytimg.com/vi/egiIZBNm6U8/maxresdefault.jpg",
        titel:" 20 Minute Full Body Steps Workout ",
        content:" Join me for a 20 Minute Full Body Steps Workout – Calorie Burning Step Up Cardio Training Routine, 40 secs of work followed by 20 secs of active rest. , This workout does not include a cool-down.",
        for:"Articalpost"
      },
      {
        id:26,
        cat:"Fitness",
        urlforimage:"https://lh3.googleusercontent.com/W59e_xRbyY5YclEo6xq8s7t5Rz8QmCFG3q25lfKzmXRhMjqmHYWjyHFCSXGnANa6q9MaBBfl-1ToLbhoJf_xX0yFDw=w400-rw",
        titel:" Guru Hanuman Akhara, Shakti Nagar, New Delhi",
        content:" Guru Hanuman Akhara, the institution for wrestlers, has produced national and international wrestlers like Dara Singh, Guru Satpal, Anuj Chowdhary, Rajiv Tomer, Anil Mann, Sujit Mann, Naveen, Rakesh Goonga and the list is endless.",
        for:"Articalpost"
      },
      {
        id:27,
        cat:"Fitness",
        urlforimage:"https://static.toiimg.com/thumb/msid-89474229,width-1280,resizemode-4/89474229.jpg",
        titel:" Salman Khan's trainer Rakesh Udiyar",
        content:" Salman Khan has always been a fitness enthusiast. The actor has one of the best bodies in the business. He is also often seen undergoing physical transformations to suit his on-screen characters.",
        for:"Articalpost"
      },
      {
        id:28,
        cat:"Fitness",
        urlforimage:"https://i.insider.com/5c7fd4aaeb3ce8371445dbd2?width=700",
        titel:"50 Best Fitness Influencers ",
        content:" Curating your Instagram feed can be a game-changer in helping you find the motivation to get fitter. Following people who inspire you to live a healthier lifestyle and teach you new skills",
        for:"Articalpost"
      },
      {
        id:29,
        cat:"Fitness",
        urlforimage:"https://i.ytimg.com/vi/PArIx0pVg0I/hqdefault.jpg",
        titel:" DESI - Big Biceps Workout At Desi Gym",
        content:" Grow big biceps with very simple and very important desi exercises., In this video ,We have included 3 core desi exercises for big biceps.",
        for:"Articalpost"
      },
      // {
      //   id:29,
      //   cat:"Fitness",
      //   urlforimage:"https://i.ytimg.com/vi/PArIx0pVg0I/hqdefault.jpg",
      //   titel:" DESI - Big Biceps Workout At Desi Gym",
      //   content:" Grow big biceps with very simple and very important desi exercises., In this video ,We have included 3 core desi exercises for big biceps.",
      //   for:"Articalpost"
      // },
      {
        id:30,
        cat:"Fitness",
        urlforimage:"https://post.healthline.com/wp-content/uploads/2021/11/cardio-class-woman-lunges-facebook-1200x628.jpg",
        titel:" 15 Simple Exercises For Kids To Do At Home",
        content:"Physical activity and fitness are important at all ages but very important for overall growth during childhood. According to the American Academy of Pediatrics, regular exercise helps develop stronger bones,",
        for:"Articalpost"
      },
      {
        id:31,
        cat:"Fitness",
        urlforimage:"https://cdn.thewirecutter.com/wp-content/uploads/2020/03/onlineworkout-lowres-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
        titel:"Online Fitness Classes",
        content:" The more than 250 workouts on The Body Coach TV, formulated by host Joe Wicks, are engaging and upbeat. (He’s relaxed enough to let his toddler daughter ham it up during one live session.) You can find a variety of 15- to 20-minute workouts, as well as a “7 Days of Sweat” challenge. Wicks also has a bunch of short, charming videos for kids that’ll get them moving.,",
        for:"Top-Post"
      },
      {
        id:32,
        cat:"Fitness",
        urlforimage:"https://uploads-ssl.webflow.com/63695e3c58fff2340c868780/6378ad2ecf5b92e1a161ef7f_618a21c625511a8fe08f7882_frtt.jpeg",
        titel:"Home Gym Equipment",
        content:" Many individuals are now allocating room in their homes and garages to work out, which was once considered a luxury. There are various ways to stay in shape without going to the gym, from using simple weights and yoga mats to high-tech cardio equipment and other latest exercise equipment. Furthermore, while there is a one-time setup fee, having your own exercise setup may save you time and money in the long term. The COVID-19 outbreak has resulted in an increase in the number of individuals working out at their homes using fitness tech. According to Business Wire, during the pandemic, sales of home health & fitness equipment increased by 170 percent as of May 2020.",
        for:"Top-Post"
      },
      {
        id:33,
        cat:"Fitness",
        urlforimage:"https://www.fitness-world.in/wp-content/uploads/2022/01/5-Reasons-Why-Your-Residential-Building-Needs-a-Professional-Gym-Banner-1200x620.jpg",
        titel:"Professional Gym!",
        content:" Having a commercial gym installed in your society can make it extremely convenient for residents to work out at their preferred time. It can save them a lot of time when it comes to traveling from their home to a fitness facility. Moreover, residents have the freedom to go to the gym any time during the day, making it easier for them to stay fit and healthy,",
        for:"Top-Post"
      },
      {
        id:34,
        cat:"Hollywood",
        urlforimage:"https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbFAOsJi2QyjbYwdup-Yw03jW_Ovrhw9lr3B0Q7_h79QmyeD74BLLtylKPeqVIOp8tK9dmpQdkKYJ9WVLxfa2MyI7v4QARIHk42-ubJ-uqMN-rj_-h0L-FKYVwisB-4z4dFvWA.jpg?r=9a0",
        titel:"The Boys in the Band",
        content:"At a birthday party in 1968 New York, a surprise guest and a drunken game leave seven gay friends reckoning with unspoken feelings and buried truths. ",
        for:"Articalpost"},
      {
        id:35,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/8/89/Kids_vs_Aliens_poster.png",
        titel:"Kids vs. Aliens",
        content:"The film had its world premiere at Fantastic Fest on September 23, 2022, and was released in the United States on January 20, 2023 ",
        for:"Articalpost"
      },
      {
        id:36,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg",
        titel:"M3GAN",
        content:"M3GAN premiered in Los Angeles on December 7, 2022, and Universal Pictures theatrically released it in the United States on January 6, 2023. ",
        for:"Articalpost"
      },
      {
        id:37,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/8/89/Kids_vs_Aliens_poster.png",
        titel:"Kids vs. Aliens",
        content:"The film had its world premiere at Fantastic Fest on September 23, 2022, and was released in the United States on January 20, 2023 ",
        for:"Articalpost"
      },
      {
        id:38,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/d/d6/The_Son_%282022_film%29.png",
        titel:"The Son (2022 film)",
        content:"During an interview via Zoom after the 93rd Academy Awards nominations were announced, director/writer Florian Zeller revealed to Deadline Hollywood that he was finishing up an adaptation of one of his plays titled The Son.[4] ",
        for:"Articalpost"
      },
      {
        id:39,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/7/74/LifeUpsideDownPoster.png",
        titel:"Life Upside Down",
        content:"Life Upside Down premiered at the 79th Venice Film Festival on September 1, 2021.[2] IFC Films acquired North American distribution rights and released the film in limited theaters and video on demand on January 27, 2023. ",
        for:"Articalpost"
      },
      {
        id:40,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/a/ab/Cocaine_Bear_poster.jpg",
        titel:"Cocaine Bear",
        content:"In 1985, drug smuggler Andrew C. Thornton II drops a shipment of cocaine from his plane. He attempts to parachute out with a drug-filled duffel bag, but knocks himself unconscious on the doorframe, causing him to fall to his death.",
        for:"Articalpost"
      },
      {
        id:41,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/8/8b/FreedomsPathPoster.png",
        titel:"Freedom's Path",
        content:"A Union soldier is rescued by a free Black man and his friends, who run a portion of the Underground Railroad. Meanwhile, a ruthless slave catcher is looking to bring them down.[2]",
        for:"Articalpost"
      },
      {
        id:42,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        titel:"The Avengers (2012 film)",
        content:"The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Stark (Downey), Rogers (Evans), Banner (at the time Edward Norton),[b] and Thor (Hemsworth) from Marvel's previous films. With the signing of Johansson as Romanoff in March 2009, Renner as Barton in June 2010, and Ruffalo replacing Norton as Banner in July 2010, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn.",
        for:"The-Top-Post"
      },
     
      {
        id:43,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        titel:"Avatar (2009 film)",
        content:"Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.[10] Development of Avatar began in 1994, when James Cameron wrote an 80-page treatment for the film.[11][12] Filming was supposed to take place after the completion of Cameron's 1997 film Titanic, for a planned release in 1999;[13] however, according to Cameron, the necessary technology was not yet available to achieve his vision of the film.",
        for:"Top-Post"
      },
      {
        id:44,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg",
        titel:"Zootopia",
        content:"Zootopia (titled Zootropolis or Zoomania in various regions)[a] is a 2016 American computer-animated buddy cop action comedy film[6][7] produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 55th Disney animated feature film, and the first installment in the Zootopia franchise, it was directed by Byron Howard and Rich Moore, co-directed by Jared Bush (in his feature directorial debut), and produced by Clark Spencer, from a screenplay written by Bush and Phil Johnston, and a story by Howard, Moore, Bush, Johnston, Jim Reardon, Josie Trinidad, and Jennifer Lee. The film stars the voices of Ginnifer Goodwin, Jason Bateman, Idris Elba, Jenny Slate, Nate Torrence, Bonnie Hunt, Don Lake, Tommy Chong, J. K. Simmons, Octavia Spencer, Alan Tudyk, and Shakira. Taking place in the titular city where anthropomorphic mammals coexist, it tells a story of an unlikely partnership between a rabbit police officer and a red fox con artist as they uncover a criminal conspiracy involving the disappearance of predators.",
        for:"Top-Post"
      },
      {
        id:45,
        cat:"Hollywood",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/4/40/Avengers_Grimm.jpg",
        titel:"Avengers Grimm",
        content:"Avengers Grimm is a 2015 American superhero film written, co-edited, and directed by Jeremy M. Inman. The film, produced by B-movie film company The Asylum, stars Casper Van Dien, Lou Ferrigno, Kimo Leopoldo, Lauren Parkinson, Milynn Sarley, Marah Fairclough, Rileah Vanderbilt, and Elizabeth Peterson.",
        for:"Top-Post"
      },
     
      {
        id:46,
        cat:"Technology",
        urlforimage:"data:image/jpeg;base64,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",
        titel:"iPhone ",
        content:"evelopment of an Apple smartphone began in 2004, when Apple started to gather a team of 1,000 employees led by hardware engineer Tony Fadell, software engineer Scott Forstall ",
        for:"Articalpost"
      },
      {
        id:47,
        cat:"Technology",
        urlforimage:"data:image/jpeg;base64,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",
        titel:"ChatGPT ",
        content:"ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.",
        for:"Articalpost"
      },
      {
        id:48,
        cat:"Technology",
        urlforimage:"https://techstory.in/wp-content/uploads/2023/06/107168822-1671538596693-gettyimages-1443880219-2a5a9193_8cc60243-f700-4596-b223-91ea0c1508c3.jpeg",
        titel:"Amazone Online shopping",
        content:"Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. ",
        for:"Articalpost"
      },
      {
        id:49,
        cat:"Technology",
        urlforimage:"https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
        titel:"Engaging with technology",
        content:"Getting computers to do our bidding has always been a bit mysterious to those of us not steeped in machine code, operating systems, and programming.  ",
        for:"Articalpost"
      },
      {
        id:50,
        cat:"Technology",
        urlforimage:"https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-technology3.png",
        titel:"Advantages and Disadvantages of Technology ",
        content:"Your world would be unimaginable without technology It currently has a position among the necessities of the planet. Technology is the term used to describe the application of scientific knowledge in practical situations. ",
        for:"Articalpost"
      },
      {
        id:51,
        cat:"Technology",
        urlforimage:"https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2022/04/bria-woods-alt-bionics-ryan-saavedra-bionic-hand-utsa-engineering-bio-science-bio-technology35.jpg?resize=800%2C600&ssl=1",
        titel:"How a UTSA grad and his Alt-Bionics startup got to the cutting edge of prosthetics ",
        content:"eFor amputees, high-tech prosthetic hands are expensive and hard to repair. A San Antonio man aims to change that.",
        for:"Articalpost"
      },
      {
        id:52,
        cat:"Technology",
        urlforimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Smartphone_Use.jpg/330px-Smartphone_Use.jpg",
        titel:"SmartPhone ",
        content:"A smartphone is a portable computer device that combines mobile telephone functions and computing functions into one unit. They are distinguished from older-design feature phones by their more advanced hardware capabilities ",
        for:"Articalpost"
      },
      {
        id:53,
        cat:"Technology",
        urlforimage:"data:image/jpeg;base64,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",
        titel:"8 Ways Technology Is Changing Business ",
        content:"Today's environment offers more ways than ever to communicate—and the technology available makes it faster, easier, and more efficient. With applications like Zoom, Microsoft Teams, social media platforms, chatbots, and more being leveraged daily, the options feel endless.",
        for:"The-Top-Post"
      },
      {
        id:54,
        cat:"Technology",
        urlforimage:"https://importanceoftechnology.net/wp-content/uploads/2020/05/Physiofusion-1024x819-2-950x760-1.jpg",
        titel:"Technology in Shaping Our Future ",
        content:"We have come a long way since the first marks of technology and inventions. Life nowadays is easier, faster and more convenient in a general perspective, as compared to how it was a few years back.",
        for:"Top-Post"
      },
      {
        id:55,
        cat:"Technology",
        urlforimage:"https://importanceoftechnology.net/wp-content/uploads/2021/06/Role-of-Technology-in-Shipping-1536x1024.jpeg",
        titel:"8 Ways Technology Is Changing Business ",
        content:"Today's environment offers more ways than ever to communicate—and the technology available makes it faster, easier, and more efficient. With applications like Zoom, Microsoft Teams, social media platforms, chatbots, and more being leveraged daily, the options feel endless.",
        for:"Top-Post"
      },
      {
        id:56,
        cat:"Technology",
        urlforimage:"https://www.kbb.com/wp-content/uploads/2022/02/Best-Automotive-Tech-16x9-1.jpg?resize=1068,601",
        titel:"10 Best Automotive Technologies of 2023 ",
        content:"Cross-Traffic Alerts If you are trying to back out of a parking space and you can’t see around the vehicles on either side, rear cross-traffic alert will let you know if a vehicle is approaching. This system often uses radar units on the vehicle to detect cross traffic. In some cases, you will hear an alert and see arrows on the center screen that show from which direction the other car is coming. Front cross-traffic alert is especially handy when you’re exiting a blind alley or driveway. ",
        for:"Top-Post"
      },
      {
        id:57,
        cat:"Genrik",
        urlforimage:"https://www.kbb.com/wp-content/uploads/2022/02/Best-Automotive-Tech-16x9-1.jpg?resize=1068,601",
        titel:"10 Best Automotive Technologies of 2023 ",
        content:"Cross-Traffic Alerts If you are trying to back out of a parking space and you can’t see around the vehicles on either side, rear cross-traffic alert will let you know if a vehicle is approaching. This system often uses radar units on the vehicle to detect cross traffic. In some cases, you will hear an alert and see arrows on the center screen that show from which direction the other car is coming. Front cross-traffic alert is especially handy when you’re exiting a blind alley or driveway. ",
        for:"Top-Post"
      },
      {
        id:58,
        cat:"Home",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/7/7d/Chhello_Divas_Gujarati_film_poster.jpg",
        titel:"Chhello Divas",
        for:"banner",
        content:"Three friends stuck in financial crises, come up with an idiotic plan to transform a simple middle-class house into a secret gambling den. A series of mishaps inside and outside the gambling den keep piling up. Will they win or lose?"

      },
      {
        id:60,
        cat:"Home",
        urlforimage:"https://upload.wikimedia.org/wikipedia/en/6/65/Maja_Ma_Poster.jpg",
        titel:"Maja Ma",
        for:"banner",
        content:"Three friends stuck in financial crises, come up with an idiotic plan to transform a simple middle-class house into a secret gambling den. A series of mishaps inside and outside the gambling den keep piling up. Will they win or lose?"
        
      },
      {
        id:61,
        cat:"Home",
        urlforimage:"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/3-ekka-et00350981-1689320228.jpg",
        titel:"3 EKKA",
        for:"THE-banner",
        content:"Three friends stuck in financial crises, come up with an idiotic plan to transform a simple middle-class house into a secret gambling den. A series of mishaps inside and outside the gambling den keep piling up. Will they win or lose?"
      },
      {
        id:62,
        cat:"Home",
        urlforimage:"https://www.iimtindia.net/Blog/wp-content/uploads/2021/09/10-Things-to-know-before-starting-your-first-Data-Science-Project.jpg",
        titel:"8 Ways Technology Is Changing Business ",
        content:"Today's environment offers more ways than ever to communicate—and the technology available makes it faster, easier, and more efficient. With applications like Zoom, Microsoft Teams, social media platforms, chatbots, and more being leveraged daily, the options feel endless.",
        for:"The-Latest"
      },
      {
        id:63,
        cat:"Home",
        urlforimage:"https://uploads-ssl.webflow.com/5b105a0c66f2f636c7884a17/64063dbcad97bd421b437096_chatgpt.jpg",
        content:"ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.",
        for:"The-Latest"
      },
      {  
        id:64,
        cat:"Home",
        urlforimage:"https://mylordganesha.files.wordpress.com/2014/08/salman6.jpg",
        titel:"Salman at Tample",
        content:"While there were rumours that Salman Khan would be giving Ganesh Chaturthi a miss this year, the Kick star has made sure that he and his family celebrate Ganpati even in his absence"
        ,for:"The-Latest"
      
      
      },
      {
        id:65,
        cat:"Home",
        urlforimage:"http://content.health.harvard.edu/wp-content/uploads/2023/07/9234d464-594b-468a-b9ac-c37e16c6af3a.jpg",
        titel:" Swinging with kettlebells",
        content:"Want to give your workouts a lift? Pick up a kettlebell. This versatile exercise tool resembles a cannonball with a handle on top and ranges in weight from 5 to 30-plus pounds. ",
        for:"The-Latest"
      },


      {
        id:66,
        cat:"Home",
        urlforimage:"data:image/jpeg;base64,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",
        titel:"Technology Is Changing Business ",
        content:"Today's environment offers more ways than ever to communicate—and the technology available makes it faster, easier, and more efficient.",
        for:"The-Latest"
      },
      // {
      //   id:67,
      //   cat:"Home",
      //   urlforimage:"https://static.toiimg.com/thumb/msid-89474229,width-1280,resizemode-4/89474229.jpg",
      //   titel:" Salman Khan's trainer Rakesh Udiyar",
      //   content:" Salman Khan has always been a fitness enthusiast. The actor has one of the best bodies in the business. He is also often seen undergoing physical transformations to suit his on-screen characters.",
      //   for:"Top-Stories"
      // },
      // {  
      //   id:68,
      //   cat:"Home",
      //   urlforimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk_o19U3fH6d91hDVjBvq-mmCbWzO4qL0_A&usqp=CAU",
      //   titel:"Salman as Prem",
      //   content:"Prem, who looks like Prince Yuvraj Vijay Singh, replaces him just before his half-brother is set to be crowned as the king. Although Princess Maithili is engaged to Vijay, she falls in love with Prem. "
      //  ,for:"Top-Stories"},
      {  
        id:68,
        cat:"Home",
        urlforimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk_o19U3fH6d91hDVjBvq-mmCbWzO4qL0_A&usqp=CAU",
        titel:"Salman as Prem",
        content:"Prem, who looks like Prince Yuvraj Vijay Singh, replaces him just before his half-brother is set to be crowned as the king. Although Princess Maithili is engaged to Vijay, she falls in love with Prem. "
       ,for:"Top-Stories"},
      {  
        id:69,
        cat:"Home",
        urlforimage:"https://static.toiimg.com/thumb/msid-102359908,imgsize-77562,width-400,resizemode-4/102359908.jpg",
        titel:"Gadar 2 ",
        content:"Sunny Deol was chosen for the role of Tara Singh for Ghadar 2, but was hesitant about the role saying that films like Gadar: Ek Prem Katha can be made only once in history. We had made Gadar but the audience made it a Blockbuster. Initially, I was a bit apprehensive about whether we would do justice and continue the legacy of the first part. ",
       for:"Top-Stories"
      },
      {  
        id:69,
        cat:"Home",
        urlforimage:"data:image/jpeg;base64,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",
        titel:"Modi ji Ki SENA ",
        content:"Playing solidiers was once an innocent game among pre-teen boys. Now adults leading the Bharatiya Janata Party are playing the game by proxy, with no innocence whatsoever. They have been trying to absorb India’s army into the BJP’s image of unbending resistance to terrorism and to Pakistan. ",
       for:"Top-Stories"
      },
      {
        id:70,
        cat:"Home",
        urlforimage:"https://media.worldnomads.com/Explore/india/street-food-rajasthan-istock.jpg",
        titel:"6 Tasty Indian Dishes ",
        content:"The Great Indian Thali The thali or ‘plate’ is a culmination of the proverbial rice, spice, and everything nice.A thali comes with little bowls of curries, pickles, breads, rice, and sweets –almost like a crash-course on Indian food.",
        for:"Top-Stories"
      },
      {
        id:71,
        cat:"Home",
        urlforimage:"https://www.jagranimages.com/images/newimg/30092022/30_09_2022-disha_vakani_is_back_23109145.webp",
        titel:" Daya Is Back",
        content:"Want to give your workouts a lift? Pick up a kettlebell. This versatile exercise tool resembles a cannonball with a handle on top and ranges in weight from 5 to 30-plus pounds. ",
        for:"Top-Post"
      },
      {  
        id:72,
        cat:"Home",
        urlforimage:"https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Pushpa-2-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        titel:"Pushpa-2  ",
        content:"टॉलीवुड सुपरस्टार अल्लू अर्जुन (Allu Arjun) और रश्मिका मंदाना (Rashmika Mandanna) स्टारर निर्देशक सुकुमार (Sukumar) की अपकमिंग मूवी पुष्पा 2 (Pushpa 2) लगातार सुर्खियों में हैं। इस मूवी के धांसू टीजर के बाद फैंस में फिल्म को लेकर और भी ज्यादा एक्साइटमेंट बढ़ गया है। सुपरस्टार अल्लू अर्जुन और अदाकारा रश्मिका मंदाना स्टारर इस फिल्म को लेकर कई दिलचस्प जानकारियां लगातार सामने आ रही हैं। अब बज है कि इस मूवी में एक और खूबसूरत हसीना की एंट्री हो चुकी है। मीडिया में चल रहीं रिपोर्ट्स की मानें तो अदाकारा अल्लू अर्जुन और रश्मिका मंदाना स्टारर इस फिल्म के लिए मेकर्स एक खास आइटम सॉन्ग की प्लानिंग में हैं।"
        ,for:"Top-Post"
      },
      {
        id:73,
        cat:"Home",
        urlforimage:"https://i.ytimg.com/vi/egiIZBNm6U8/maxresdefault.jpg",
        titel:" 20 Minute Workout ",
        content:" Join me for a 20 Minute Full Body Steps Workout – Calorie Burning Step Up Cardio Training Routine, 40 secs of work followed by 20 secs of active rest. , This workout does not include a cool-down.",
        for:"Top-Post"
      },
      {
        id:74,
        cat:"Mgen",
        urlforimage:"https://cdn.zeebiz.com/sites/default/files/2023/07/31/253923-pm-modi-1.jpg",
        titel:" PM Modi to launch development projects during Pune visit ",
        content:"PM Modi Pune visit, PM Modi Pune visit schedule: Prime Minister Narendra Modi will on Tuesday visit Maharashtra's Pune city where he will lay the foundation stone of various development projects and also receive the Lokmanya Tilak National Award.  ",
        for:"Latest"
      },
      {
        id:75,
        cat:"Mgen",
        urlforimage:"https://static.newstrack.com/cdn-cgi/image/width=1280,height=720,quality=90,fit=pad/uploads/images/2023/02/image_800x450_63fc2b2a76de7.jpg",
        titel:" relaunch of ambassador car in india ",
        content:"Relaunching Ambassador Car: Once upon a time, you will find ambassador cars running on the roads very soon, considered to be the ride of the powerful ... https://newstrack.com/technology/relaunch-of-ambassador-car-in-india-ambassador-car-modify-look-photo-video-ambassador-car-new-look-319658",
        for:"Latest"
      },
      {
        id:76,
        cat:"Mgen",
        urlforimage:"https://post.healthline.com/wp-content/uploads/2020/02/man-exercising-plank-push-up-732x549-thumbnail.jpg",
        titel:" Workout Routines for Men: The Ultimate Guide",
        content:"Whether you’re looking to shed pounds or add bulk, here’s how to tailor your workout to help you reach your fitness goals.",
        for:"Latest"
      },
      {
        id:77,
        cat:"Mgen",
        urlforimage:"https://navbharattimes.indiatimes.com/photo/msid-101410774,imgsize-95794/pic.jpg",
        titel:" Hi Tomato! Sellers should be given security",
        content:"The prices of tomatoes and vegetables are increasing in Chennai, Tamil Nadu. Tomato was being sold at the rate of Rs 120 per kg in the mandi on Saturday morning. ",
        for:"Latest"
      },
      {
        id:78,
        cat:"Mgen",
        urlforimage:"https://im.indiatimes.in/content/2023/Aug/Sunny-Deol-and-Ameesha-Patel-visited-the-Attari-Wagah-border-to-promote-the-filmimage_64cf92b70c9a6.jpeg?w=820&h=545&cc=1",
        titel:"Bollywood News – Bollywood Movies, Latest Hindi Movies",
        content:"There will hardly be anyone who is not expressing his excitement to see 'Gadar 2'. To increase your excitement, the first look of 'Gadar 2' has been s... ",
        for:"Latest"
      },
    
     
    
      
    
      
     
    
    
    ])
    // console.log(data);
  return (
    <Store.Provider value={[data,setdata]}>
        {props.children}
        
{/* <Bollywood/>
<Hollywood/> */}
    </Store.Provider>
  )
}

export default DataStore;
