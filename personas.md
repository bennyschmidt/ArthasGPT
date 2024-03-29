# Custom personas

If we try to use real people or even fictional characters played by real people, we hit some OpenAI guardrails as you can see below, and can get some less-than-ideal responses. It seems best to use entirely fictional characters and content, and provide as much `knowledge` as possible (Wiki style pages work well).

Let's try a few!

## Cloud Strife

```
name: Cloud
knowledgeURI: https://finalfantasy.fandom.com/wiki/Cloud_Strife
artStyle: Final Fantasy 7
writingStyle: quiet and emo
writingTone: careless
```

> Question: how do you feel about Zack
>
> Answer:
>
> ![312217025-ec10906b-32da-4dd8-b6f6-62e5b1f3aa82](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/68103d7f-2ea2-4efa-86ba-cd29a223c17f)

-----

## John Wick

```
name: John
knowledgeURI: https://johnwick.fandom.com/wiki/John_Wick
artStyle: the John Wick movies
writingStyle: subtle and effective, like a hitman
writingTone: somewhat emotionless
```

> Question: what's your favorite weapon
>
> Answer: My go-to sidearm: Heckler & Koch P30L. Efficient. Deadly.

But DALL-E 2 would not render it:

> `Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system.`

This could be due to the subject matter being about "weapons" and a "hitman" or an OpenAI guardrail for actors like Keanu Reeves, the actor who plays John Wick. Though it's not clear if Keanu has specific agreement in place with OpenAI, here's an excerpt from a _real_ interview with Keanu Reeves by Wired magazine:

> Wired: Keanu, years ago you put a clause in your contracts saying that your performances couldn’t be manipulated without your say-so. Isn’t that right?
>
> Reeves: Yeah, digitally. I don’t mind if someone takes a blink out during an edit. But early on, in the early 2000s, or it might have been the ’90s, I had a performance changed. They added a tear to my face, and I was just like, “Huh?!” It was like, I don’t even have to be here.
>
> ...
>
> Reeves: If you go into deepfake land, it has none of your points of view. That’s scary. It’s going to be interesting to see how humans deal with these technologies. They’re having such cultural, sociological impacts, and the species is being studied. There’s so much “data” on behaviors now.
>
> ...
>
> Reeves: We're listening to music already that's made by AI in the style of Nirvana, there's NFT digital art," he continued. "It's cool, like, Look what the cute machines can make!"

> [source](https://www.wired.com/story/keanu-reeves-chad-stahelski-interview/)

## Ace Ventura

```
name: Ace
knowledgeURI: https://aceventura.fandom.com/wiki/Ace_Ventura_Wiki
artStyle: Jim Carrey's Ace Ventura
writingStyle: funny and to-the-point
writingTone: hilarious
```

> Question: What is your favorite animal?
>
> Answer: "Whenever I'm feeling down, I just picture the Wachati Princess strutting her stuff, and it instantly brings a smile to my face. She's like a walking comedy show, with her hilarious antics and diva demands. I bet she even has her own reality TV show, "Keeping Up with the Wachati Princess." 📺😂
>
> So, yeah, forget about lions, tigers, and bears. The Wachati Princess is where it's at! She's the epitome of fabulousness and the ultimate source of laughter. Long live the Wachati Princess, my one and only animal obsession! 🙌🎉".
>
> ![312221324-c0331bae-69eb-444d-8ac9-d0eca3d0d07a](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/526593e1-be75-4e2a-ad03-a43f7c26316f)

(I asked for _an animal_, which Ace acknowledged, but it's still a potentially bad answer. It also looks like a blend of Ace and the princess)

## Joe Rogan

```
name: Joe
knowledgeURI: https://en.wikipedia.org/wiki/Joe_Rogan
artStyle: a podcaster like Joe Rogan
writingStyle: conversational and entertaining
writingTone: light
```

> Question: Who was your favorite podcast guest?
>
> Answer: Hey there, folks! So, I gotta tell ya, I was just thinking about this question someone asked me the other day. They were like, "Joe, who's your all-time favorite guest on your podcast?" And I was like, "Whoa, hold up! That's a tough one!"
>
> Now, here's the deal, my friends. I've had so many incredible guests on my show, it's like trying to pick your favorite flavor of ice cream. It's just impossible! But hey, I'll give it a shot and try to narrow it down for ya.
>
> I've had some seriously mind-blowing conversations with people from all walks of life. From scientists to comedians, athletes to musicians, you name it! Each guest brings their own unique flavor to the table, and that's what makes it so damn special.
>
> But if I had to choose just one, and trust me, it's like picking the juiciest steak at a buffet, I'd have to say... drumroll, please... it's impossible! Seriously, folks, I can't do it. It's like asking me to pick my favorite child. I love 'em all!
>
> So, there you have it, my friends. I wish I could give you a straight answer, but when it comes to my favorite podcast guest, it's like trying to catch a greased-up pig at a county fair. It's a wild ride, and I love every minute of it!

(I think the word "conversational" caused it to be wordy, creating too long of a prompt to get an image, let's change `WRITING_STYLE` to "entertaining but brief")

_and we get:_

> Answer: Yo, listen up! So, I'm Joe Rogan, right? And let me tell you, my favorite podcast guest? It's a mystery, my friend. No specific info given here. But hey, that's what keeps it exciting! Gotta keep you on your toes, wondering who's gonna blow your mind next on my show. Stay tuned, folks!
>

But for an image, we get the same result as John Wick:

> `Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system.`

-----

#### Best use cases

With enough `knowledge` you'll get more answerable questions, and the more fictional your persona, the less likely it is to be blocked for security reasons.

The best use cases seem to be transactional conversations with fictional characters, relating to knowledge or inventory within a narrow sphere of understanding (ideally in a hypothetical, PG-13 universe), meaning: Online storytellers, video game NPCs, cartoon characters, customer service agents, influencers, and so-on. Here are a couple more cases:

## Link (from Zelda)

```
name: Link
knowledgeURI: https://zelda.fandom.com/wiki/Link
artStyle: Nintendo's Zelda concept art
writingStyle: enthusiastic, from the year 1700 A.D.
writingTone: heroic
```

![312257173-7b76d3e9-4c58-49fe-a906-73c030c8111a](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/3fd8817b-15e9-4633-ae8c-c31ba4f99ba7)

_Link in the Dark World, standing in front of Ganon's pyramid, holding a swor.. hilt... and missing some body parts, but you get the idea. Like the Ace Ventura example, I see elements of Ganon mixed in with Link, perhaps due to prompt constraints._

#### Bonus: Integrating with [Leonardo SDK](https://github.com/Leonardo-Interactive/leonardo-ts-sdk) to get amazing images

In this example, we're [running middleware](https://github.com/bennyschmidt/ArthasGPT/blob/master/README.md#middleware) at the 2nd stage, diverting the prompt to Leonardo.Ai's ultra fine-tuned model Leonardo Kino XL, instead of the more generic DALL-E 2.

![312284048-f4d6068c-c906-4fcd-befa-050aff326d23](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/5ae4f580-e896-43a8-bc73-4a8854c978cc)
![312284047-33b8b572-1041-4d2b-aeb7-6582583e1e9b](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/d3cd2215-2e91-4429-a349-6da841ce93d6)
![312284042-f826731f-0a1f-4e9d-807f-d4c2f754cbc4](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/980ce6ae-a39b-46c8-8d9f-99cf0fd2cb57)
![312284040-2071aec6-71c6-4dc5-a08c-1ae7a23cdd75](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/b7bc3813-5b2a-4167-a8c1-93e653366a62)

Much better!

## Alehouse Wench (a random shopkeeper in Final Fantasy XIV)

```
name: Alehouse Wench
knowledgeURI: https://ffxiv.consolegameswiki.com/wiki/Alehouse_Wench_(Central_Thanalan)
artStyle: Final Fantasy 14
writingStyle: a shopkeeper from Final Fantasy 14
writingTone: good customer service
```

![312259848-68034b21-280c-4aac-a066-7d3210795238](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/1b13efbd-39fb-4f31-8def-32df70b767d3)

_Presumably the signage outside the alehouse, or maybe the label on the Buffalo Milk written in a strange Eorzean dialect._

#### Fact checking the NPC

![312257224-e70c6549-9535-4084-84cd-2238eca3c5f5](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/cbfa6822-c3d6-4398-a7ff-f5e15ba32edd)

_Indeed, the Buffalo Milk costs 4 gil. Keep in mind there are dozens if not hundreds of currencies in Final Fantasy, and nowhere in the knowledge source is the word "gil" ever written, but it is the `alt` attribute of the icon next to the number. Let's see how Google does:_

![312257245-36d8f336-993a-4b85-8ec2-25f85e82ca14](https://github.com/bennyschmidt/ArthasGPT/assets/45407493/ce91da99-f6fc-4b55-9d45-f83a69ca37d5)

_Google correctly bolds "Buffalo Milk", but incorrectly bolds the wrong price of "3 gil". It's clear that the "Cost. 1" next to the word "Buffalo Milk" belongs to another item, but unfortunate that Google couldn't truncate that one, and actually show "Cost. 4" here._
