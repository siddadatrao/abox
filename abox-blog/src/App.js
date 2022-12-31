import './App.css';
import Home from './Home';
import Blogpage from './blogpage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const sdata = [
    {
      "Title": "Title1",
      "Blog": '*Bring* *Bring* *Bring. I am wide awake, I am happy, and I am ready to take on the day! I check the clock. As always I have 47-108 minutes to get ready and go to school. In Jelwa, everything is optimized. Pleasant, warm lights seep through every shadow at the perfect time. I wake up attentive and well rested after a completed REM cycle but with enough time to get ready for my first scheduled activity. I stick the tooth brush into my mouth, “Initiating teeth scan”. The robotic voice I nicknamed Shelly when I was three, about 10 years ago, is usually the first thing I hear in the morning. I have grown to really like Shelly’s voice. She has always been a reliable friend. “Your teeth are 43% clean!”. Based on that score and a whole plethora of measurements calculated during the scan, Shelly comes up with a plan. I follow her commands exactly. Shelly is always right, she did the analysis of course! First the right in smaller then gradually bigger circles. Then the upper/back and so on.\n' +
      'Next thing up, breakfast. In Jelwa, we figured out nutrition. It is really just a math equation. We learn about it in school. Your body burns a certain amount of calories. If you need to gain muscle, you have to eat more than the calories you burn in a day and workout to build muscle. To lose weight you do the opposite. Each week, food packages are delivered through the food package pipes into our fridge carefully labeled and locked with fingerprint security so that we only eat the food recommended to us.\n' +
      '*Slam*. The door closes behind me. I check the clock, a perfect 22 minutes to bike to school. I wonder, how is anyone ever late? The sky is beautiful and the sun is beaming. What is life like outside of Jelwa? Are they ever late? I feel bad for people that don’t have Shelly. How do they ever brush\n' +
      'their teeth? Or know what to eat? Such a sad life. *Beep, Beep* The GPS is glaring on my bike. I hop on my electric bike. Ah! The perfect speed, 24mph. As I drive by, I wave to my old neighbor Joe. He is almost 130 years old. He is a little odd. He doesn’t follow a lot of the rules in Jelwa. He has his own garden and isn’t dressed like the rest of us. My dad says that he has special permission to not follow the rules because he’s so old and was already an adult before the Great Decline. We are never really told much about what the Great Decline really is, my dad said something about how people took control of recommendation algorithms and abused them. No one really talks about it.\n' +
      'Huh, weird, a book? Joe has this box sticking out of his lawn. He has always had it. At the top it reads, “Neighborhood Library”, but there’s never any books in it. I quickly stop to grab it. The title reads, “Machine Learning, Recommender Algorithms, and What Happened.” What an ominous title. The GPS beeps again reminding me to get back on my bike. When I get back on, the GPS asks me “Do you want to add this as a recurring stop?”. The thing about all of the tech in Jelwa is they are constantly trying to learn what you are doing. That’s what makes it interesting.\n' +
      'I park my bike into the rack at school and head to my first class: To Yourself. This class is all about relaxing your mind. As with everything else, my schedule is optimized too! My focus tests showed that I need to take this first thing in the morning. Usually I sit in one of the recliner chairs so I head over for a quick meditation. I put the headphones over my ear and the visual stimulation mask above my eyes like everyone else.\n' +
      'Relax your mind and try to picture a calm beach. The water pushes forward and back rustling through the fine grains of sand. The breeze caresses my skin. I look up. A book comes flying into my rib cage. I look down “Machine Learning,\n' +
      ' Recommender Algorithms, and What Happened.” Stop it, I am trying to relax! I switch the mode to my favorite one: Christmas Morning at the Mall. I hear the smiles, smell the hot chocolate, and see parents getting gifts for their children. I look down at my shopping cart, and there it is again “Machine Learning, Recommender Algorithms, and What Happened.”\n' +
      'Out of frustration I pull the book out of my bag, check to see if anyone is looking and open it to a random page. I read the chapter heading: “The Two Major Schools of Thought on Recommender Systems.”\n' +
      'Recommender systems are machine learning algorithms that make an informed guess about what a user would respond well to in the future based on their prior self and the prior data of others. In general, there are two genres of recommender algorithms that have various Machine Learning implementations under them (Rocca 2019). The first one is collaborative filtering. Collaborative filtering assumes that “past user-item interactions are sufficient to detect similar users and/or similar items and make predictions based on these estimated proximities” (Rocca 2019). Let us consider an example from the Nike workout app. Say we are trying to predict what workouts would work best for someone. We have data about whether or not a workout met the threshold for calories burnt in the past for all users. We can see this information in a matrix format where the check mark indicates that a workout met the threshold for calories burnt and a question mark indicates that a user has never done a particular workout (Richa 2018).\n' +
      '.\n'+
      'Now we will try to predict what workout Hermione should do next. Because the Basic Burner workout met the threshold for calories burnt for Harry and Hermione and the Core Control exercise was effective for Harry, we will opt to recommend the Core Control workout to Hermione. This example is very simple, in reality you will have a multitude of different options and permutations of users to group based on.\n' +
      '*Ring*. This stuff is so weird. I wonder what happened to all of these algorithms? No one probably uses them anyways. Also what is this Nike?. I brush past the door to my second class: History. I sit down and wait for my instructions. Everyone’s class experience is different. We sit down in front of our “All in One” desks and our instruction begins. These all in one desks are really good because they customize your learning experience based on what works for you. See I am a visual learner so I get a lot of diagrams and text on the screen. My friend Jack is more of an audio based learner so there is a voice that teaches him.\n' +
      'My topic of today’s class sprawls across the screen: The Defense of The Middle Age Revolution. This name is familiar. Jareu learned about this topic a few months ago. Two years ago, we used to learn a lot of the same things. We spent a whole summer working on the project Protecting Jelwa Order under Professor Chey. We examined the Jelwa laws to figure out ways to close loopholes in the tax system. For months after, we would have conversations about how, when we get older, we would join the Jelwa government and protect it from those that want to break it down. A few months ago, he started to get into fights and try to skip class. He used to tell me about how he wants to free the people from The Depths, a really poor town outside of Jelwa. It was super eye-opening and made me think about why such a great place like Jelwa would keep people out rather than help them. Then something happened, his views changed rapidly. Now\n' +
      ' \n'+
      ' when I talk to him, the only thing he wants to talk about is how much he is excited for his job: to stop inhabitants of The Depths from coming into Jelwa.\n' +
      'The instruction begins: Jelwa is a beautiful place but faces its enemies. The Middle Age Revolution was one of the worst enemies of them all. We underestimated young adults who wished to threaten our way of life. They tried to take power from the Empire Kingdom Controllers who help us optimize our way of life by training and modeling our recommendation algorithms. A recommendation algorithm is ...\n' +
      'I gasp and look up.\n' +
      'Recommendation algorithm? What has that got to do with anything? I keep listening to the instructions. I think back to that chart about the Nike workout plan. The text is getting fainter with each second. *Blink* I start seeing new text. A minute goes by. *Blink* Jareu’s name appears in a cell. Another few seconds. *Blink* Khader appears. A few more seconds go by and the new chart is clearer.\n' +
      'Chey, they must be recommending me the same classes as Jareu because they want to curb me from questioning the Jelwa way. What if there was something wrong with Jelwa, would anyone be able to fix it? Or would we get stopped through the algorithms before we realize what is really going on? I listen to the rest of the class and answer my exit questions. The first question: If I am jogging across the street and Jelwa police are arresting a friend that I trust, I would ______. a) Keep running, b) Stay back to look, c) Question the Jelwa police, or d) Fight Jelwa police. I chose option c). A few more questions went by.\n' +
      '*Ding*. I get up. The next few classes go by, but I can’t seem to stop thinking about that damn book and that chart. When I get home the first thing I do is open the book back up.\n' +
      'The second method of Reccomender systems is Content Based Filtering. In this method, the algorithm tries to understand the user based on their attributes or features. Consider moviegoers and how they rate movies. The algorithm will take in data about their sex, age, education level, and any other measurables, to create associations between those characteristics and the movies they are rating. Maybe the algorithm discovers that 20 year olds who walk as their primary mode of transport prefer underdog movies (Rocca 2018).\n' +
      'I stop. I open the Rettiwt app on my phone. I only see content to perpetuate Jelwa’s greatness. “Jelwa just invented a cure for cancer”. I scroll down more. I see a post from a family member, “Joining the Jelwa medical board.” Scroll down some more and see a post from a friend, “Screw those people from The Depths.”\n' +
      'I flip a few pages ahead. The chapter is titled “What Happened” but all the text under is smudged out. Not in a random way. It is like someone didn’t want anyone to read it.\n' +
      ' I think they are curating my thoughts. When Jareu and I worked under Professor Chey, we were being labeled as followers of the Jelwa way. We listened to directions and wanted to see it prosper. Something happened to Jareu and he began to develop rebellious thoughts. Once they put him on a track with instruction about anti-rebellion history, he must’ve responded really well. Since that worked well for him in the past, and we both responded well to our time under Professor\n' +
      '\n' +
      ' I have to ask Joe. I get up and walk down the street. *Knock, Knock.* The footsteps get louder and Joe opens the door. “I knew you would come.” Confused, I walked in the door. “So you want to know what happened?” How did he know that? I nod my head slowly and he starts talking.\n' +
      'Joe keeps going. “Before Jelwa, there was just everyone together. Yes there were still recommendation systems, but that is what they were, just recommendations. There was this researcher, Silvia Milano, amongst many, who warned us about what could happen when these recommendation algorithms got into the hands of opportunists. She explains how there are ‘four stakeholders’ in common recommender systems. ‘First are end users (Harris 2021).’ These are the people the recommendations are used for. “Second are the systems themselves (Harris 2021).” All of these recommender algorithms struggle somewhat with the cold start problem. They need data of how users interact with potential recommendations to predict future recommendations. So the systems oftentimes have to mix in new content decided by its creators. ‘Third, the companies that operate these systems care about long-term user satisfaction (Harris 2021)’ and other outside factors. And lastly that society as an aggregate has an interest in how recommender algorithms shape the way we think (Harris 2021). It is important to realize which of these stakeholders have power.”\n' +
      '“There used to be this platform called TikTok. When you opened TikTok, you were recommended these short, attention grabbing videos that played without breaks. Swipe, and you could see and hear the next video playing. TikTok and other social media platforms like Twitter aimed ‘to monopolize user attention for as long as possible by seducing you into carrying out actions that will make you happy on very short timescales(Harris 2021).’ The problem is once these\n' +
      'algorithms figure out how to learn about you and keep you in the app as long as possible, they can apply their special interest. As Silivia mentioned, these systems ‘actively shape its user (Harris 2021).’ preferences, including their views about current events.’ As per Pew Research, 46% of twitter users responded that Twitter increased their understanding of current events (Mcclain 2021). If this many people trust the aggregate voices recommended to them by Twitter, then it is vital that these recommendation algorithms are controlled by entities that care about democracy, fairness, and the truth.”\n' +
      'Joe gets up and walks to the fridge. There are no bio secure packages. He shuffles his hand into the fridge and an orange rolls into his palm. He tosses one to me and takes one himself.\n' +
      '“Hah, the misuse!” Joe laughed. “There was this guy, Elon Musk who bought Twitter back in 2022. He released a bunch of internal documents exposing how Twitter had considered political requests. Matt Taibbi reported on how both parties’ requests to manipulate tweets were honored by Twitter (Taibbi 2022).\n' +
      'In terms of recommender algorithms, this is a huge problem. If you delete tweets or their deplatform users, the actual data that can be recommended is changed. Every company should be allowed to run their platform how they want. If they feel someone has violated their policy, that is their prerogative. However, they must be transparent. Government, or other special interests shouldn’t be the ones to affect bodies created by the people.\n' +
      'Another issue was homogeneity. Do you know what collaborative and content based filtering is?” I nod my head. “Let’s consider collaborative filtering. If users are recommended content on Twitter, for example, based on preferences of others and their own, they are extremely likely to receive recommendations to content that\n' +
      '\n' +
      ' they agree with. This is what we call an echo chamber. As per a study, “diversity of the content recommended by the model decreases 7 sigma within 10 iterations” (Noordeh, Levin, Jiang, Shadmany 2020). What is even worse is that this study concluded that “it is infeasible for a single user to break themselves out of the echo-chamber” because their actions only change their data. Collaborative filtering and content based filtering are heavily based curating recommendations based on others. So they would also need to make a conscious effort to remove themselves from the echo chamber (Noordeh, Levin, Jiang, Shadmany 2020).\n' +
      'These issues created mass division. The next ten years were filled with power hungry bodies, corporate and governmental alike, influencing the people. It was called “The Great Decline”. The people started to revolt against the corporate heads. They started hacking the platforms trying to expose them for what they were doing. The flow of information that had empowered the world crumbled to a warzone. Mistrust grew, and our understanding of democracy started to fail.\n' +
      'A group of government officials took charge by force and created Jelwa. They established the Empire Kingdom Controllers. The controllers were people who established the recommender systems we use today. Any entity that uses recommender algorithms must do so under their guidance and using their formulas only.”\n' +
      '“So what is the problem?”, I ask. The problem is that just because there is centralized control doesn’t mean that what I just talked about does not still exist. Jelwa’s controllers take advantage of their power, they manipulate these algorithms so that everyone lives in an echo chamber. Why do you think we haven’t had any revolutions in the last 25 years? Anytime we have individual thoughts, they make sure to recommend us content to cool us down. If\n' +
      'we get too strong they figure out ways to weaken our body through the food we eat. The power is in the data and they control it.” I open the book to the page with the chart. “How do they manipulate this?” Joe smirks, “They chose what this check mark means. If they want you to become a soldier, they will only include users in society that are soldiers and filter recommendations based on them for you. That is why they ask so many situational questions in school and during your day, they wanna track your progress to curate recommendations for their goals.”\n' +
      '*Buzz*. My watch tells me it is time for dinner, I get up, say my thanks and go home. What a crazy story. The next few years I go back to Joe. He tells me more.. Because of my interest and knowledge in recommender systems from Joe, the Jelwa algorithm pushes me towards the path of training for the Empire Kingdom Controllers. I know the game now, and I know how to play along. 20 Years Later.\n' +
      '“We would like to welcome Khader as the chair of the Empire Kingdom Controllers.” The applause erupts under my feet. I grab my robe over my shoulder so it doesn’t get disheveled. My time has come. Jelwa’s time for change has come.\n' +
      'I have a plan. I am going to revolutionize how we run our algorithms. I have spent the last 20 years reading books in Joe’s library trying to figure out how I can train Jelwa’s recommender systems to help its citizens and not to serve a larger controlling goal of Jelwa. I want to ensure that individual thought is encouraged by our algorithms by providing platforms that mitigate the creation of echo chambers.\n' +
      'To create safeguards for the people, we will create a system that detects and discourages echo chambers on our social media platforms, school recommendations and news networks. Our social media platforms are just a spit out of Jelwa government thoughts. Views orthogonal to\n' +
      '\n' +
      ' Jelwa, are ostracized. I read a paper on disrupting echo chambers by Huyen Nguyen, and figured out how to apply it to the Jelwa problem. We first will use an n-gram frequency-inverse document frequency to extract representative features from a corpus of text we have from different topics. So if we are trying to detect echo chambers when it comes to discussion of Jelwa’s immigration laws, we will take our corpus to be a compiled dataset of Rettiwt posts regarding those laws. N-gram frequency-inverse document frequency is really just a fancy way to say that we will extract varied lengths of groupings of words. We will then count how many times they appear in the training data to know what n-grams, or groupings of words, appear near each other. For example, a n-gram on this topic could be “Keep The Depths away”. This is a 4-gram that may have been found frequently in the texts. These n-grams will be used to see how similar texts are to one another. Next, we will use a process called k-means clustering to identify the few groups of thoughts on the topic. I won’t bore you on the specifics because this algorithm is super complex. Essentially, the algorithm finds centroid data points based on the number of clusters desired. It calculates the distances between the other data points and clusters them accordingly, if the distances are two far, then it readjusts the centroids to be closer to the clusters of data. These clusters are our sources of echo chambers. Those in one cluster, will have a tough time interacting with viewpoints from other clusters. In Jelwa our clusters are heavily unequal because of our censorship of Rettiwt, but also from the thoughts of individuals. If we run the same algorithm on the instructions at schools, we can discover how much of an echo chamber we are in (Nguyen 2022).\n' +
      'The next step is to mitigate the effects of the echo chamber. We will identify where on the k-cluster map a user is for a particular topic. If we detect that their distance to a particular centroid is too great, we will hypothesize that they are in an echo\n' +
      'chamber. Rather than trying to artificially manipulate their views, we will include a percentage of recommendations based on a “Jelwa Exploration Threshold Probability.” Let’s take this probability to be 10%. That means that 10% of the time we will aim to recommend data that is not from within a user"s echo chamber even if it is against Jelwa’s agenda. The goal is not to change minds, the goal is to give all factual perspectives a fair chance. As a country we need to keep ourselves accountable, we cannot try to brainwash our people as that is how we grow (Nguyen 2022).\n' +
      'While I was vice-chair of the Kingdom Controllers, I looked through historical data that the algorithms are built on. Back when Jareu was younger, I saw that he was marked as a “Potential Rebel”, and was labeled for “correction.” The Kingdom Controllers at the time tried to supplant him from a minority cluster that he was in to one that fit their agenda by curating homogeneous information through schooling, news, and all other algorithms in his life. Soon they brought his thoughts to the centroid of the Jelwa way. If Jareu wanted to avoid this he would have had to excommunicate himself from Jelwa society. Jelwa’s algorithms didn’t try to expose people to differing viewpoints, they forcefully pushed their agenda.\n' +
      '10 years later. A lot has changed in Jelwa. I think back to the matrix that haunted me for years. If there are two kids in the same situation now, we try to foster individual thought. The checkmarks used to represent if a citizen was within an acceptable threshold from our desired viewpoint. We used to be able to mold the views of our citizens any way we wanted. Now the check mark represents whether someone interacted with the content so we can ensure they are being exposed to multiple viewpoints.\n' +
      '\n' +
      'A Note\n' +
      'The Controllable is a story placed 70 years in the future where recommender algorithms have been abused by the government. We are at the juncture right now before something like the Great Decline that Joe mentions happens. Apart from the echo chamber issue that I focus on in the story, we need to make recommender systems more accessible for people to understand. Companies hide their algorithms. Those who are abusing the system usually retort that users have a choice. As a society we don’t want to distance ourselves from new technology. Recommender systems can be extremely useful. For example, new research has shown an effective method for creating a collaborative filtering approach to recommending diabetes treatment. This recommender system predicted with a 61% accuracy quality recommendations (Morales 2022). However, consider the same example, let us say hospitals used a similar system to predict whether patients were treatable based on their health conditions and therefore declined care. Or if insurance companies got so good at predicting risk that they made privatized insurance unaffordable. It is up to citizens to demand transparency!',
      "References": "",
      "id": 2
    },
    {
      "Title": "Title2",
      "Blog": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "References": "",
      "id": 1
    },
    {
      "Title": "Title3",
      "Blog": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "References": "",
      "id": 0
    }
  ]
  const kdata = [
    {
      "Title": "kTitle1",
      "Blog": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "References": "",
      "id": 2
    },
    {
      "Title": "kTitle2",
      "Blog": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "References": "",
      "id": 1
    },
    {
      "Title": "kTitle3",
      "Blog": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "References": "",
      "id": 0
    }
  ]
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blogpage/kaushik" element={<Blogpage id={0} bdata={kdata}/>} />
            <Route path="/blogpage/sidd" element={<Blogpage id={1} bdata={sdata}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;