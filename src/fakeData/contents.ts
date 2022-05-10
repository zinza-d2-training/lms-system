import {
  CompletedMethod,
  Content,
  ContentType,
  ShowAs,
  VideoType
} from '../types/contents';
import { QuestionType } from '../types/questions';

export const contents: Content[] = [
  {
    id: 1,
    name: 'intro',
    courseId: 1,
    completedMethod: CompletedMethod.WithQuestion,
    content: `<header>
<div>
<h1>Senate Democrats tee up likely doomed vote on protecting nationwide abortion access</h1>
<p>A leaked Supreme Court draft opinion showed Roe v. Wade could be overturned.</p>
</div>
<div>
<section>
<div>
<div aria-label="By Trish Turner, Allison Pecorin, and Alexandra Hutzler"><span aria-hidden="true">By</span><a tabindex="0" href="https://abcnews.go.com/author/trish_turner" aria-label="Trish Turner">Trish Turner</a><span aria-hidden="true">,</span><a tabindex="0" href="https://abcnews.go.com/author/allison_pecorin" aria-label="Allison Pecorin">Allison Pecorin</a><span aria-hidden="true">,&nbsp;and</span><a tabindex="0" href="https://abcnews.go.comnull/" aria-label="Alexandra Hutzler" aria-invalid="true">Alexandra Hutzler</a></div>
<div>
<div>6 May 2022, 02:14</div>
<div><span aria-hidden="true">&bull;&nbsp;</span>6 min read</div>
</div>
</div>
</section>
<section><button tabindex="0" aria-label="Share to Facebook"></button><button tabindex="0" aria-label="Share to Twitter"></button><button tabindex="0" aria-label="Email this article"></button></section>
</div>
</header>
<div>
<div>
<div>
<aside aria-label="Video">
<div>
<div aria-hidden="false">
<figure>
<div>&nbsp;</div>
<div><picture><source srcset="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_384.jpg" media="(max-width: 374px)" /><source srcset="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_608.jpg" media="(max-width: 413px)" /><source srcset="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_992.jpg" media="(max-width: 767px)" /><img style="width: 636.016px;" src="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_992.jpg" alt="" data-mptype="image" aria-hidden="false" /></picture></div>
<div><iframe tabindex="0" title="video.title" src="about:blank" allowfullscreen="allowfullscreen" aria-hidden="false" data-mce-fragment="1"></iframe></div>
</figure>
<div>
<div>&nbsp;</div>
<div aria-hidden="true">3:32</div>
</div>
</div>
<div>
<div>
<p aria-hidden="true">Senate to vote on protecting abortion access</p>
<div>
<div aria-live="polite">Majority Leader Chuck Schumer announced Thursday that the Senate will take a proced...<button tabindex="0" aria-hidden="false">Read More</button></div>
</div>
<span aria-label="Michael Mccoy/Reuters">Michael Mccoy/Reuters</span></div>
</div>
</div>
</aside>
</div>
</div>
</div>
<section>
<p>The Senate will take a procedural vote to start debate on codifying abortion rights next week, Majority Leader Chuck Schumer announced Thursday.</p>
<p>Democrats have pledged to take swift action on the issue after a leaked draft opinion&nbsp;<a href="https://abcnews.go.com/Politics/supreme-court-apparently-overturn-roe-wade-abortion-case/story?id=84457563" target="_blank" rel="noopener">showed the Supreme Court could overturn Roe v. Wade</a>, the landmark decision legalizing abortion in the U.S. The draft is not the final ruling, though the court confirmed its authenticity.</p>
<p>"I intend to file cloture on this vital legislation on Monday which will set up a vote for Wednesday," Schumer, D-N.Y., said on the Senate floor.</p>
<p>Any effort to protect abortion access nationwide is likely to face an uphill battle in the 50-50 divided chamber, where Democrats don't have the 60 votes needed to overcome an expected filibuster.</p>
<div>
<div>
<div><a tabindex="0" href="https://www.washingtonpost.com/politics/2022/05/03/most-americans-say-supreme-court-should-uphold-roe-post-abc-poll-finds/" data-track-ctatext="MORE-Majority-of-Americans-say-Supreme-Court-should-uphold-Roe-Post-ABC-poll-finds" data-track-position="0" data-track-moduleofclick="Callout">MORE: Majority of Americans say Supreme Court should uphold Roe, Post-ABC poll finds</a></div>
</div>
</div>
<p>The party has already experienced this problem with the Women's Health and Protection Act. The bill cleared the House of Representatives in September 2021, but in the Senate Schumer failed to get even the entire Democratic caucus on board when he tried to start debate on the bill back in February.</p>
<div>
<div>
<aside aria-label="Image">
<div>&nbsp;</div>
<figure>
<div>&nbsp;</div>
<div><picture><source srcset="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_608.jpg" media="(max-width: 767px)" /><source srcset="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_384.jpg" media="(max-width: 413px)" /><img style="width: 636.016px;" src="https://s.abcnews.com/images/US/chuck-schumer-rt-jt-220505_1651774497967_hpMain_16x9_992.jpg" alt="PHOTO: Senate Majority Leader Chuck Schumer speaks to reporters following the Senate Democrats weekly policy lunch at the U.S. Capitol in Washington, D.C., on May 3, 2022." data-mptype="image" /></picture></div>
<figcaption>
<div>
<div>
<div><img style="height: 16px; width: inherit;" src="https://s.abcnews.com/assets/dtci/icomoon/svg/camera.svg" alt="Michael Mccoy/Reuters" data-mptype="image" />Michael Mccoy/Reuters</div>
<div>
<div aria-live="polite">Senate Majority Leader Chuck Schumer speaks to reporters following the Senate Democ...<button tabindex="0" aria-hidden="false">Read More</button></div>
</div>
</div>
</div>
</figcaption>
</figure>
</aside>
</div>
</div>
<p>The legislation would codify Roe while also banning requirements some states have put into place related to abortion care, such as waiting periods and mandatory doctor's visits before the procedure.</p>
<p>Republicans have taken issue with how broad the Women's Health and Protection Act is, prompting Democrats to draft a modified version. Sen. Richard Blumenthal, D-Conn., changed some of the bill's language but it still may not be enough to sway the GOP members.</p>
<p>GOP Sen. Susan Collins of Maine told ABC News' Trish Turner that she would vote "no" on the proposal.</p>
<p>"My goal is to codify what is essentially existing law," Collins said. "That means Roe v. Wade, it means Casey v. Planned Parenthood, which established the undue burden test, and it means keeping the "conscience" protections which appear to be wiped out by the Democrats' version. So, I'm not trying to go beyond current law or, but rather to codify those Supreme Court decisions."</p>
<div>
<div>
<aside aria-label="Image">
<div>&nbsp;</div>
<figure>
<div>&nbsp;</div>
<div><picture><source srcset="https://s.abcnews.com/images/US/susan-collins-ap-jt-220505_1651774684603_hpEmbed_3x2_608.jpg" media="(max-width: 767px)" /><source srcset="https://s.abcnews.com/images/US/susan-collins-ap-jt-220505_1651774684603_hpEmbed_3x2_384.jpg" media="(max-width: 413px)" /><img style="width: 636.016px;" src="https://s.abcnews.com/images/US/susan-collins-ap-jt-220505_1651774684603_hpEmbed_3x2_992.jpg" alt="PHOTO: Sen. Susan Collins speaks to reporters amid the fallout from a leaked draft Supreme Court opinion that could overturn the landmark Roe v. Wade ruling, at the Capitol in Washington, D.C., on May 4, 2022." data-mptype="image" /></picture></div>
<figcaption>
<div>
<div>
<div><img style="height: 16px; width: inherit;" src="https://s.abcnews.com/assets/dtci/icomoon/svg/camera.svg" alt="J. Scott Applewhite/AP" data-mptype="image" />J. Scott Applewhite/AP</div>
<div>
<div aria-live="polite">Sen. Susan Collins speaks to reporters amid the fallout from a leaked draft Supreme Cou...<button tabindex="0" aria-hidden="false">Read More</button></div>
</div>
</div>
</div>
</figcaption>
</figure>
</aside>
</div>
</div>
<div>
<div>
<div><a tabindex="0" href="https://abcnews.go.com/Politics/collins-hits-kavanaugh-gorsuch-leaked-supreme-court-draft/story?id=84468176" data-track-ctatext="MORE-GOP-senator-slams-Kavanaugh-Gorsuch-after-leaked-Supreme-Court-draft-opinion-on-abortion-suggests-flip-flop" data-track-position="3" data-track-moduleofclick="Callout">MORE: GOP senator slams Kavanaugh, Gorsuch after leaked Supreme Court draft opinion on abortion suggests flip flop</a></div>
</div>
</div>
<p>Collins is one of the Democratic Party's best chances of gaining a Republican vote on any potential bill. She and Sen. Lisa Murkowski of Alaska are the sole Senate Republicans who support abortion rights.</p>
<p>Collins and Murkowski have their own proposal to codify Roe. Their bill -- dubbed the Reproductive Choice Act -- would prohibit states from imposing an "undue burden" on the ability of a woman to choose to terminate a pregnancy pre-viability but also allows states to keep other restrictions in place.</p>
<div>
<div>
<aside aria-label="Image">
<div>&nbsp;</div>
<figure>
<div>&nbsp;</div>
<div><picture><source srcset="https://s.abcnews.com/images/Politics/gillibrand-rt-er-220505_1651789176372_hpMain_16x9_608.jpg" media="(max-width: 767px)" /><source srcset="https://s.abcnews.com/images/Politics/gillibrand-rt-er-220505_1651789176372_hpMain_16x9_384.jpg" media="(max-width: 413px)" /><img style="width: 636.016px;" src="https://s.abcnews.com/images/Politics/gillibrand-rt-er-220505_1651789176372_hpMain_16x9_992.jpg" alt="PHOTO: Sen. Kirsten Gillibrand speaks about abortion rights during a news conference with Democratic senators on Capitol Hill, May 5, 2022." data-mptype="image" /></picture></div>
<figcaption>
<div>
<div>
<div><img style="height: 16px; width: inherit;" src="https://s.abcnews.com/assets/dtci/icomoon/svg/camera.svg" alt="Sarah Silbiger/Reuters" data-mptype="image" />Sarah Silbiger/Reuters</div>
<div>
<div aria-live="polite">Sen. Kirsten Gillibrand speaks about abortion rights during a news conference with Dem...<button tabindex="0" aria-hidden="false">Read More</button></div>
</div>
</div>
</div>
</figcaption>
</figure>
</aside>
</div>
</div>
<p>Senate Democrats held a news conference on Thursday afternoon to discuss next week's vote.</p>
<p>"This is a life or death moment and we need to fight," Sen. Kirsten Gillibrand, D-N.Y., told reporters.</p>
<p>Schumer said next week's vote is intended to put on the record exactly where lawmakers stand on abortion rights.</p>
<p>"You will hear plenty from us," Schumer said. "This is not just one vote and then this issue goes away. You will hear a lot from us through the next month all the way through November."</p>
</section>`,
    sequence: 1,
    type: ContentType.Basic
  },
  {
    id: 2,
    name: 'start',
    courseId: 1,
    completedMethod: CompletedMethod.WithQuestion,
    sequence: 2,
    completedQuestionId: 2,
    type: ContentType.Video,
    videoType: VideoType.Link,
    link: 'https://media.istockphoto.com/videos/crypto-currency-future-of-payment-accepted-text-qr-code-sign-in-cafe-video-id1357061040'
  },
  {
    id: 3,
    name: 'install',
    courseId: 1,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test content 123',
    sequence: 3,
    type: ContentType.Survey,
    questions: [
      {
        id: 1,
        sequence: 1,
        text: 'question 1',
        type: QuestionType.Multiple,
        answers: [
          {
            id: 1,
            text: 'hello',
            isCorrect: true
          },
          {
            id: 2,
            text: 'hello',
            isCorrect: false
          },
          {
            id: 3,
            text: 'hello',
            isCorrect: false
          }
        ]
      },
      {
        id: 2,
        sequence: 2,
        text: 'question 2',
        type: QuestionType.Raw,
        answers: [
          {
            id: 1,
            text: 'hello',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'action',
    courseId: 2,
    completedMethod: CompletedMethod.AfterPeriodTime,
    periodTime: 50,
    content: 'test content',
    sequence: 4,
    type: ContentType.Video,
    link: 'https://www.youtube.com/watch?v=TVU6OD-1Amo&t=185s'
  },
  {
    id: 5,
    name: 'install 2',
    courseId: 2,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test content 123',
    sequence: 5,
    type: ContentType.Survey
  },
  {
    id: 6,
    name: 'Audio',
    courseId: 1,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test audio 123',
    sequence: 6,
    type: ContentType.Audio,
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 7,
    name: 'Iframe',
    courseId: 1,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test iframe 123',
    sequence: 6,
    type: ContentType.Iframe,
    link: 'https://huyhoang7511.talentlms.com/dashboard',
    showAs: ShowAs.Embedded,
    popUpWidth: 50,
    popUpHeight: 70
  }
];
