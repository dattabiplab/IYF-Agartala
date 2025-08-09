const shlokas = [
  {
    text: "dhṛtarāṣṭra uvāca<br>dharma-kṣetre kuru-kṣetre<br>samavetā yuyutsavaḥ<br>māmakāḥ pāṇḍavāś caiva<br>kim akurvata sañjaya",
    meaning:
      "Dhṛtarāṣṭra said: O Sañjaya, after my sons and the sons of Pāṇḍu assembled in the place of pilgrimage at Kurukṣetra, desiring to fight, what did they do?",
    reference: "- Bhagavad-gita 1.1",
  },
  {
    text: "kārpaṇya-doṣopahata-svabhāvaḥ<br>pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ<br>yac chreyaḥ syān niścitaṁ brūhi tan me<br>śiṣyas te ’haṁ śādhi māṁ tvāṁ prapannam",
    meaning:
      "Now I am confused about my duty and have lost all composure because of miserly weakness. In this condition I am asking You to tell me for certain what is best for me. Now I am Your disciple, and a soul surrendered unto You. Please instruct me.",
    reference: "- Bhagavad-gita 2.7",
  },
  {
    text: "dehino ’smin yathā dehe<br>kaumāraṁ yauvanaṁ jarā<br>tathā dehāntara-prāptir<br>dhīras tatra na muhyati",
    meaning:
      "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.",
    reference: "- Bhagavad-gita 2.13",
  },
  {
    text: "mātrā-sparśās tu kaunteya<br>śītoṣṇa-sukha-duḥkha-dāḥ<br>āgamāpāyino ’nityās<br>tāṁs titikṣasva bhārata",
    meaning:
      "O son of Kuntī, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.",
    reference: "- Bhagavad-gita 2.14",
  },
  {
    text: "na jāyate mriyate vā kadācin<br>nāyaṁ bhūtvā bhavitā vā na bhūyaḥ<br>ajo nityaḥ śāśvato ’yaṁ purāṇo<br>na hanyate hanyamāne śarīre",
    meaning:
      "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval. He is not slain when the body is slain.",
    reference: "- Bhagavad-gita 2.20",
  },
  {
    text: "nainaṁ chindanti śastrāṇi<br>nainaṁ dahati pāvakaḥ<br>na cainaṁ kledayanty āpo<br>na śoṣayati mārutaḥ",
    meaning:
      "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.",
    reference: "- Bhagavad-gita 2.23",
  },
  {
    text: "jātasya hi dhruvo mṛtyur<br>dhruvaṁ janma mṛtasya ca<br>tasmād aparihārye ’rthe<br>na tvaṁ śocitum arhasi",
    meaning:
      "One who has taken his birth is sure to die, and after death one is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament.",
    reference: "- Bhagavad-gita 2.27",
  },
  {
    text: "sukha-duḥkhe same kṛtvā<br>lābhālābhau jayājayau<br>tato yuddhāya yujyasva<br>naivaṁ pāpam avāpsyasi",
    meaning:
      "Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat – and by so doing you shall never incur sin.",
    reference: "- Bhagavad-gita 2.38",
  },
  {
    text: "nehābhikrama-nāśo ’sti<br>pratyavāyo na vidyate<br>sv-alpam apy asya dharmasya<br>trāyate mahato bhayāt",
    meaning:
      "In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.",
    reference: "- Bhagavad-gita 2.40",
  },
  {
    text: "bhogaiśvarya-prasaktānāṁ<br>tayāpahṛta-cetasām<br>vyavasāyātmikā buddhiḥ<br>samādhau na vidhīyate",
    meaning:
      "In the minds of those who are too attached to sense enjoyment and material opulence, and who are bewildered by such things, the resolute determination for devotional service to the Supreme Lord does not take place.",
    reference: "- Bhagavad-gita 2.44",
  },
  {
    text: "trai-guṇya-viṣayā vedā<br>nistrai-guṇyo bhavārjuna<br>nirdvandvo nitya-sattva-stho<br>niryoga-kṣema ātmavān",
    meaning:
      "The Vedas deal mainly with the subject of the three modes of material nature. O Arjuna, become transcendental to these three modes. Be free from all dualities and from all anxieties for gain and safety, and be established in the self.",
    reference: "- Bhagavad-gita 2.45",
  },
  // {
  //   text: "",
  //   meaning: "",
  //   reference: ""
  // },
  // {
  //   text: "",
  //   meaning: "",
  //   reference: ""
  // },
  // {
  //   text: "",
  //   meaning: "",
  //   reference: ""
  // },
  // {
  //   text: "",
  //   meaning: "",
  //   reference: ""
  // },

  {
    text: "yadā yadā hi dharmasya<br>glānir bhavati bhārata<br>abhyutthānam adharmasya<br>tadātmānaṁ sṛjāmy aham",
    meaning:
      "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion – at that time I descend Myself.",
    reference: "- Bhagavad-gita 4.7",
  },
  {
    text: "man-manā bhava mad-bhakto<br>mad-yājī māṁ namaskuru<br>mām evaiṣyasi satyaṁ te<br>pratijāne priyo ’si me",
    meaning:
      "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend.",
    reference: "- Bhagavad-gita 18.65",
  },
  {
    text: "sarva-dharmān parityajya<br>mām ekaṁ śaraṇaṁ vraja<br>ahaṁ tvāṁ sarva-pāpebhyo<br>mokṣayiṣyāmi mā śucaḥ",
    meaning:
      "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    reference: "- Bhagavad-gita 18.66",
  },
]

export default shlokas
