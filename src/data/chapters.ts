import { Chapter } from "../types";

export const CHAPTERS_LIST: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1: CPC - Definitions, Jurisdiction & Res Judicata",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the foundations of civil litigation in Bangladesh: essential statutory definitions under Section 2, the expansive civil jurisdiction under Section 9, the doctrine of Stay of Suit (Res Sub-Judice) under Section 10, and the preclusive doctrine of Res Judicata under Section 11.",
    studyStrategy: "Focus heavily on the distinction between a 'decree' and an 'order' (Section 2(2) vs 2(14)), and memorize the 5 essential elements of Res Judicata under Section 11 alongside its 8 Explanations. This area yields 3-4 MCQ questions and 1-2 written/scenario-based BJS/Bar questions annually.",
    sections: [
      {
        sectionNo: "Section 2(2)",
        title: "Definition of 'Decree'",
        statutoryText: `"decree" means the formal expression of an adjudication which, so far as regards the Court expressing it, conclusively determines the rights of the parties with regard to all or any of the matters in controversy in the suit and may be either preliminary or final. It shall be deemed to include the rejection of a plaint and the determination of any question within section 144, but shall not include—\n(a) any adjudication from which an appeal lies as an appeal from an order, or\n(b) any order of dismissal for default.`,
        simplifiedExplanation: "A decree is the final verdict of a civil court. It acts as the ultimate seal on the dispute, stating exactly who won, what they won, and why. For an adjudication to qualify as a decree, it must satisfy five mandatory tests: (1) there must be an adjudication, (2) such adjudication must be in a suit, (3) it must determine the substantive rights of the parties, (4) such determination must be conclusive, and (5) there must be a formal expression of that determination.",
        elements: [
          "Adjudication: A formal judicial decision on a matter in dispute.",
          "In a Suit: A proceeding initiated by the presentation of a plaint. No plaint means no suit, and no suit means no decree.",
          "Substantive Rights: Focuses on the rights of parties regarding the main matters in controversy (e.g., title, possession, damages) rather than mere procedural issues.",
          "Conclusive Determination: The court's decision must be final and complete regarding that court's perspective.",
          "Formal Expression: Must be drafted in a prescribed layout (under Order XX, Rule 6 & 7) distinct from the judgment text.",
          "Deemed Decrees: Rejection of a Plaint (Order VII Rule 11) and determination of Restitution (Section 144).",
          "Explicit Exclusions: (a) Appealable Orders, (b) Dismissal for Default (e.g., non-appearance of parties)."
        ]
      },
      {
        sectionNo: "Section 2(9) & 2(14)",
        title: "Judgment vs. Order",
        statutoryText: `Section 2(9): "judgment" means the statement given by the Judge of the grounds of a decree or order.\n\nSection 2(14): "order" means the formal expression of any decision of a Civil Court which is not a decree.`,
        simplifiedExplanation: "A Judgment is the underlying judicial reasoning, containing facts, issues, arguments, and the judge's logic. An Order is any formal decision of a civil court that is not a decree. While a decree determines substantive rights conclusively in a suit, an order usually decides procedural or interlocutory matters and can occur at any stage of a suit or application.",
        elements: [
          "Judgment acts as the parent reasoning, while Decree or Order acts as the formal offspring.",
          "Order does not conclusively determine the main substantive rights of parties.",
          "Every decree is appealable, but only specific orders (Section 104 & Order 43 Rule 1) are appealable (called 'Appealable Orders').",
          "There can only be one final decree in a suit, but there can be dozens of interlocutory orders passed throughout its lifespan."
        ]
      },
      {
        sectionNo: "Section 2(12)",
        title: "Mesne Profits (মধ্যবর্তীকালীন মুনাফা)",
        statutoryText: `"mesne profits" of property means those profits which the person in wrongful possession of such property actually received or might with ordinary diligence have received therefrom, together with interest on such profits, but shall not include profits due to improvements made by the person in wrongful possession.`,
        simplifiedExplanation: "Mesne profits represent the monetary compensation that a rightful owner can claim from a trespasser or wrongful possessor for the period they were unlawfully deprived of their property. It represents the damages for wrongful possession.",
        elements: [
          "Wrongful Possession: The defendant must have occupied the property without any legal right.",
          "Actual or Diligent Profits: Calculated based on what the wrongful occupier actually earned or could have earned with reasonable care (e.g., standard agricultural yield or market rental value).",
          "Interest Included: The statutory definition specifically includes interest on these profits.",
          "Improvements Excluded: If the trespasser builds a deep tube-well or structure that increases the profits, the owner cannot claim the extra profits generated exclusively by that improvement."
        ]
      },
      {
        sectionNo: "Section 9",
        title: "Jurisdiction of Civil Courts",
        statutoryText: `The Courts shall (subject to the provisions herein contained) have jurisdiction to try all suits of a civil nature excepting suits of which their cognizance is either expressly or impliedly barred.`,
        simplifiedExplanation: "This section establishes the supreme authority of Civil Courts in Bangladesh. Every dispute is triable by a Civil Court unless a specific statute explicitly takes away that power (express bar) or the legal framework makes it incompatible (implied bar).",
        elements: [
          "Suit of a Civil Nature: A suit where the principal question relates to a civil right, property, office, or status (even if it depends on religious rites or caste questions).",
          "Expressly Barred: Excluded by written legislation (e.g., Section 5 of the Family Courts Ordinance, 1985; Section 17 of the Artha Rin Adalat Ain, 2003; or Administrative Tribunals under Article 117 of the Constitution).",
          "Impliedly Barred: Barred by general principles of public policy, such as when a statutory remedy is self-contained and exclusive (e.g., industrial disputes before Labour Courts)."
        ]
      },
      {
        sectionNo: "Section 10",
        title: "Res Sub-Judice (Stay of Suit)",
        statutoryText: `No Court shall proceed with the trial of any suit in which the matter in issue is also directly and substantially in issue in a previously instituted suit between the same parties, or between parties under whom they or any of them claim litigating under the same title, where such suit is pending in the same or any other Court in Bangladesh having jurisdiction to grant the relief claimed, or before the Supreme Court...`,
        simplifiedExplanation: "This section prevents two parallel courts from trying the exact same dispute at the same time. If a suit is already pending trial in a competent court, any newly filed suit on the same dispute between the same parties must be frozen/stayed. This avoids waste of judicial time and prevents contradictory verdicts on the same matter.",
        elements: [
          "Two Suits: One previously instituted (First Suit) and one subsequently instituted (Second Suit).",
          "Identity of Issue: The matter in issue in both suits must be directly and substantially identical.",
          "Same Parties: The parties in both suits (or their legal representatives/predecessors-in-interest) must be the same.",
          "Same Title: The parties must be litigating under the same capacity (e.g., as landlord-tenant, trustee, or co-sharers).",
          "Competent Court: The previously instituted suit must be pending in a court of competent jurisdiction inside Bangladesh or the Supreme Court.",
          "Mandatory Stay: The court of the second suit *must* stay the trial; it is a mandatory command, not discretionary."
        ]
      },
      {
        sectionNo: "Section 11",
        title: "Res Judicata (পূর্বে মীমাংসিত মামলা)",
        statutoryText: `No Court shall try any suit or issue in which the matter directly and substantially in issue has been directly and substantially in issue in a former suit between the same parties, or between parties under whom they or any of them claim, litigating under the same title, in a Court competent to try such subsequent suit or the suit in which such issue has been subsequently raised, and has been heard and finally decided by such Court.`,
        simplifiedExplanation: "The doctrine of Res Judicata prevents a person from suing on the exact same dispute twice once a competent court has already delivered a final judgment. It is based on three public policy maxims: (1) Interest reipublicae ut sit finis litium (It is in the interest of the state that there should be an end to litigation), (2) Nemo debet bis vexari pro una et eadem causa (No person should be harassed twice for the same cause), and (3) Res judicata pro veritate accipitur (A judicial decision must be accepted as correct).",
        elements: [
          "Identity of Matter: The matter in the subsequent suit must be directly and substantially in issue in the former suit.",
          "Identity of Parties: The parties or their successors must be identical in both suits.",
          "Litigating under Same Title: The capacity in which they claim rights must be identical.",
          "Court Competence: The court that decided the former suit must have been fully competent to try the subsequent suit.",
          "Heard and Finally Decided: The former suit must have been contested, heard, and adjudicated on its merits.",
          "The 8 Explanations: Crucial legal extensions defined by the Code to cover constructiveness, public suits, and execution proceedings."
        ]
      },
      {
        sectionNo: "Section 11 (Explanations)",
        title: "The Explanations & Constructive Res Judicata",
        statutoryText: `Explanation I: Former suit means a suit decided prior to the suit in question, regardless of filing date.\nExplanation II: Competence of court is determined irrespective of any provisions as to a right of appeal.\nExplanation III: Matter must have been alleged by one party and either denied or admitted, expressly or impliedly, by the other.\nExplanation IV (Constructive Res Judicata): Any matter which might and ought to have been made ground of defence or attack in such former suit shall be deemed to have been a matter directly and substantially in issue in such suit.\nExplanation V: Any relief claimed which is not expressly granted shall be deemed to have been refused.\nExplanation VI: Representative/Public interest suits bind all persons represented.\nExplanation VII: Applies to execution proceedings.\nExplanation VIII: Decisions of courts of limited jurisdiction act as Res Judicata.`,
        simplifiedExplanation: "These explanations plug loopholes that litigants could use to bypass Section 11. Most notably, Explanation IV introduces 'Constructive Res Judicata'. This means if you had a legal weapon/defence available in the first suit, and you failed to use it, you are barred from filing a brand new suit later using that weapon. You cannot split your claims or defences.",
        elements: [
          "Constructive Res Judicata (Explanation IV): Deems things that 'might and ought' to have been raised as having been raised and decided. Prevents piece-meal litigation.",
          "Deemed Refusal (Explanation V): If you asked for a relief (e.g., mesne profits) in your plaint and the decree is silent about it, the law deems that the court refused it. You cannot sue again for it.",
          "Representative Suits (Explanation VI): If you sue on behalf of a public trust or a village path (Order I Rule 8), the outcome binds every single person of that community."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Dildar ALi v. Syed Ali",
        citation: "21 DLR 355",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "The plaintiff filed a suit for partition. A preliminary decree was passed declaring the shares of the parties. Later, one of the parties attempted to reopen the questions of title and share during the final decree proceedings, claiming that a preliminary decree does not conclusively settle the entire dispute.",
        held: "The High Court Division held that a preliminary decree, as defined under Section 2(2), conclusively determines the shares and rights of the parties, and those matters cannot be reagitated during the final decree stage or in a subsequent suit. It is fully appealable immediately.",
        significance: "Establishes that preliminary decrees are separate, substantive, and highly binding adjudications that must be appealed immediately rather than waiting for the final decree."
      },
      {
        title: "Hedayet Ullah v. Abdul Hye",
        citation: "18 DLR (SC) 144",
        court: "Supreme Court (Appellate Division)",
        facts: "The plaintiff brought a second suit regarding a property dispute. The defendant pleaded Res Judicata, asserting that although the previous suit was dismissed on procedural grounds, the underlying title issues had been thoroughly discussed and commented on by the trial judge in the judgment.",
        held: "The Appellate Division ruled that for Res Judicata to apply under Section 11, the matter must have been 'heard and finally decided'. A decision on a technical or procedural ground (such as misjoinder of parties) which does not decide the main issues on merits does not operate as Res Judicata.",
        significance: "Reinforces the strict requirement that a former decision must be on the merits (heard and finally decided) to trigger Section 11 preclusion."
      },
      {
        title: "Abdul Ghafoor v. State",
        citation: "55 DLR (AD) 112",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The appellant did not raise a crucial statutory defense in a previously contested land acquisition suit, even though the defense was fully available. He subsequently filed a new declaration suit seeking to invalidate the acquisition on that specific statutory ground.",
        held: "The Appellate Division invoked Section 11, Explanation IV (Constructive Res Judicata). Since the appellant 'might and ought' to have raised that defense in the previous litigation, he is legally barred from initiating a fresh action based on that omitted ground.",
        significance: "The leading modern authority in Bangladesh on the strict application of Constructive Res Judicata to maintain finality in litigation."
      },
      {
        title: "A.S.M. Rashid v. National Bank Ltd.",
        citation: "48 DLR (HCD) 310",
        court: "High Court Division",
        facts: "The bank obtained an order of attachment of properties before judgment. The debtor argued that such an order was a decree because it affected his property rights and therefore should have a formal decree drawn up.",
        held: "The High Court held that an order of attachment before judgment is not a decree under Section 2(2). It is an interlocutory/interim measure and is categorized strictly as an 'order' under Section 2(14).",
        significance: "Clarifies that interim or interlocutory orders passed for the preservation of property or procedure do not amount to decrees as they do not conclusively determine substantive rights."
      }
    ],
    mcqs: [
      {
        id: "mcq-1-1",
        question: "Which of the following is specifically INCLUDED in the definition of a 'Decree' under Section 2(2) of the CPC?",
        options: [
          { id: "a", text: "An order of dismissal for default" },
          { id: "b", text: "The rejection of a plaint" },
          { id: "c", text: "An adjudication from which an appeal lies as an appeal from an order" },
          { id: "d", text: "An order of attachment before judgment" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 2(2) of the CPC, the definition of a decree explicitly states that it 'shall be deemed to include the rejection of a plaint and the determination of any question within section 144', but shall NOT include dismissal for default or appealable orders."
      },
      {
        id: "mcq-1-2",
        question: "For a previously instituted suit to operate as a stay of trial (Res Sub-Judice) under Section 10, the previous suit must be pending in:",
        options: [
          { id: "a", text: "Any foreign court only" },
          { id: "b", text: "A court of competent jurisdiction in Bangladesh or before the Supreme Court" },
          { id: "c", text: "An administrative tribunal only" },
          { id: "d", text: "The office of the local Land Commissioner" }
        ],
        correctOptionId: "b",
        explanation: "Section 10 requires that the former suit must be pending in the same or any other Court in Bangladesh having jurisdiction to grant the relief claimed, or before the Supreme Court."
      },
      {
        id: "mcq-1-3",
        question: "Which explanation of Section 11 of the CPC defines the doctrine of 'Constructive Res Judicata'?",
        options: [
          { id: "a", text: "Explanation II" },
          { id: "b", text: "Explanation III" },
          { id: "c", text: "Explanation IV" },
          { id: "d", text: "Explanation VI" }
        ],
        correctOptionId: "c",
        explanation: "Explanation IV of Section 11 defines Constructive Res Judicata: 'Any matter which might and ought to have been made ground of defence or attack in such former suit shall be deemed to have been a matter directly and substantially in issue in such suit.'"
      },
      {
        id: "mcq-1-4",
        question: "Under Section 2(12) of the CPC, 'Mesne Profits' are calculated on the basis of what profits:",
        options: [
          { id: "a", text: "The plaintiff actually received during wrongful possession" },
          { id: "b", text: "The wrongful possessor actually received or might with ordinary diligence have received, plus interest, excluding improvements" },
          { id: "c", text: "The total profits including all improvements made by the wrongful possessor" },
          { id: "d", text: "The profits calculated after deducting the cost of land acquisition taxes" }
        ],
        correctOptionId: "b",
        explanation: "Mesne profits include those profits which the person in wrongful possession actually received or might with ordinary diligence have received, together with interest, but EXCLUDES profits due to improvements made by the wrongful possessor."
      },
      {
        id: "mcq-1-5",
        question: "If a relief is claimed in the plaint but is NOT expressly granted by the decree, what is the legal presumption under Section 11, Explanation V?",
        options: [
          { id: "a", text: "The relief is deemed to have been granted" },
          { id: "b", text: "The relief is deemed to have been refused" },
          { id: "c", text: "The suit must be retried by another judge" },
          { id: "d", text: "The plaintiff can file a fresh suit on that specific relief" }
        ],
        correctOptionId: "b",
        explanation: "Explanation V of Section 11 states: 'Any relief claimed in the plaint, which is not expressly granted by the decree, shall, for the purposes of this section, be deemed to have been refused.'"
      },
      {
        id: "mcq-1-6",
        question: "Which of the following adjudications is NOT a decree?",
        options: [
          { id: "a", text: "An order rejecting a plaint under Order VII Rule 11" },
          { id: "b", text: "A determination of a question of restitution under Section 144" },
          { id: "c", text: "Dismissal of a suit due to default of appearance of the plaintiff" },
          { id: "d", text: "A preliminary decree in a partition suit" }
        ],
        correctOptionId: "c",
        explanation: "Section 2(2) explicitly excludes 'any order of dismissal for default' from being classified as a decree."
      },
      {
        id: "mcq-1-7",
        question: "In which landmark case did the Supreme Court hold that preliminary decrees conclusively determine rights and cannot be reopened in final decree proceedings?",
        options: [
          { id: "a", text: "Hedayet Ullah v. Abdul Hye" },
          { id: "b", text: "Dildar Ali v. Syed Ali (21 DLR 355)" },
          { id: "c", text: "Abdul Ghafoor v. State" },
          { id: "d", text: "A.S.M. Rashid v. National Bank" }
        ],
        correctOptionId: "b",
        explanation: "In Dildar Ali v. Syed Ali, 21 DLR 355, the court held that a preliminary decree conclusively determines the shares of parties and cannot be reagitated during final decree proceedings."
      },
      {
        id: "mcq-1-8",
        question: "Under Section 9 of the CPC, a Civil Court has jurisdiction to try all civil suits EXCEPT those which are:",
        options: [
          { id: "a", text: "Expressly or impliedly barred" },
          { id: "b", text: "Valued above 50 Lakh Taka" },
          { id: "c", text: "Related to easements or boundary disputes" },
          { id: "d", text: "Initiated by a foreign national" }
        ],
        correctOptionId: "a",
        explanation: "Section 9 mandates that Civil Courts have jurisdiction to try all suits of a civil nature, except those of which cognizance is either expressly or impliedly barred."
      },
      {
        id: "mcq-1-9",
        question: "What is the key difference between Res Sub-Judice (Section 10) and Res Judicata (Section 11)?",
        options: [
          { id: "a", text: "Section 10 applies to criminal cases, Section 11 to civil cases" },
          { id: "b", text: "Section 10 stays a pending trial; Section 11 bars the trial of a previously decided matter" },
          { id: "c", text: "Section 10 is discretionary; Section 11 is mandatory" },
          { id: "d", text: "There is no difference; they are interchangeable" }
        ],
        correctOptionId: "b",
        explanation: "Section 10 (Res Sub-Judice) stays the trial of a subsequently instituted suit when the same issue is pending in a previously instituted suit. Section 11 (Res Judicata) bars the trial of a suit/issue that has already been heard and finally decided in a former suit."
      },
      {
        id: "mcq-1-10",
        question: "An order is defined under CPC Section:",
        options: [
          { id: "a", text: "Section 2(2)" },
          { id: "b", text: "Section 2(9)" },
          { id: "c", text: "Section 2(14)" },
          { id: "d", text: "Section 2(18)" }
        ],
        correctOptionId: "c",
        explanation: "Section 2(14) of the CPC defines an 'order' as 'the formal expression of any decision of a Civil Court which is not a decree.'"
      }
    ]
  },
  {
    id: "chapter-2",
    title: "Chapter 2: CPC - Place of Suing & Transfer of Suits",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the rules governing territorial and pecuniary jurisdictions of civil courts: from the lowest grade competent court principle under Section 15, to suits regarding immovable properties under Sections 16-18, wrongs to person or movables under Section 19, residuary suits under Section 20, the strict rules for raising jurisdictional objections under Section 21, and the general powers of transfer and withdrawal under Section 24.",
    studyStrategy: "Pay close attention to Section 16 (where the property is situated), Section 20 (where the cause of action arises or defendant resides), and Section 21 (objections to jurisdiction). In Section 21, remember the three conditions: objection must be raised at the earliest possible opportunity, in the court of first instance, and there must be a consequent failure of justice. This is a very popular topic for both MCQs and scenario questions.",
    sections: [
      {
        sectionNo: "Section 15",
        title: "Court in Which Suits to be Instituted",
        statutoryText: "Every suit shall be instituted in the Court of the lowest grade competent to try it.",
        simplifiedExplanation: "Section 15 is a rule of convenience and administration. It requires a plaintiff to file their lawsuit in the lowest-level civil court that is legally authorized to hear it (based on pecuniary limits). This prevents higher courts (like District Courts or the High Court Division) from being flooded with small disputes.",
        elements: [
          "Mandatory Directive: 'Shall be instituted' makes it a binding rule of procedure, though it is a rule of administration rather than jurisdiction.",
          "Lowest Grade: Refers to the court with the lowest pecuniary competency (e.g., Assistant Judge court in Bangladesh up to 15 Lakh BDT, Senior Assistant Judge up to 25 Lakh BDT, Joint District Judge above 25 Lakh BDT).",
          "Competent to Try: The court must possess territorial, pecuniary, and subject-matter competency.",
          "Administrative Convenience: A decree passed by a higher court of competent jurisdiction is not invalid or a nullity simply because it wasn't filed in the lowest court."
        ]
      },
      {
        sectionNo: "Section 16",
        title: "Suits to be Instituted Where Subject-Matter Situate",
        statutoryText: `Subject to the pecuniary or other limitations prescribed by any law, suits—\n(a) for the recovery of immovable property with or without rent or profits,\n(b) for the partition of immovable property,\n(c) for foreclosure, sale or redemption in the case of a mortgage of or charge upon immovable property,\n(d) for the determination of any other right to or interest in immovable property,\n(e) for compensation for wrong to immovable property,\n(f) for the recovery of movable property actually under distraint or attachment,\nshall be instituted in the Court within the local limits of whose jurisdiction the property is situate...`,
        simplifiedExplanation: "This section incorporates the principle of 'Forum Rei Sitae'. It dictates that any lawsuit concerning immovable property—whether it is to recover possession, partition a family estate, foreclose a mortgage, or claim damages for trespass—must be filed in the court where that property physically exists.",
        elements: [
          "Forum Rei Sitae: General rule that property disputes must be resolved where the property resides.",
          "Scope (a) to (f): Covers recovery, partition, mortgage suits (foreclosure, sale, redemption), other proprietary interests, and torts (wrongs) to land.",
          "Movable Exception (f): Applies to recovery of movables ONLY if they are already seized or attached within that court's limits.",
          "The Proviso (Personal Obedience): If the defendant is within the court's reach, and the relief doesn't require a physical change to the land itself, the suit may be filed where they reside."
        ]
      },
      {
        sectionNo: "Section 19",
        title: "Suits for Compensation for Wrongs to Person or Movables",
        statutoryText: "Where a suit is for compensation for wrong done to the person or to movable property, if the wrong was done within the local limits of the jurisdiction of one Court and the defendant resides, or carries on business, or personally works for gain, within the local limits of the jurisdiction of another Court, the suit may be instituted at the option of the plaintiff in either of the said Courts.",
        simplifiedExplanation: "Section 19 offers an elastic choice to plaintiffs in tort lawsuits (such as defamation, assault, or damage to personal belongings). If a resident of Dhaka is assaulted by a resident of Chittagong in Sylhet, the plaintiff can file the suit in Sylhet (where the wrong was done) or Chittagong (where the defendant resides/works).",
        elements: [
          "Two Options: Plaintiff can sue (1) where the wrong was committed, OR (2) where the defendant resides/carries on business.",
          "Scope: Strictly limited to 'wrongs to the person' (e.g., defamation, false imprisonment, battery) or 'wrongs to movable property' (e.g., conversion of a car, damage to cargo).",
          "Plaintiff's Option: The choice belongs entirely to the plaintiff, and the defendant cannot object to either valid selection."
        ]
      },
      {
        sectionNo: "Section 20",
        title: "Other Suits to be Instituted Where Defendants Reside or Cause of Action Arises",
        statutoryText: `Subject to the limitations aforesaid, every suit shall be instituted in a Court within the local limits of whose jurisdiction—\n(a) the defendant, or each of the defendants where there are more than one, at the time of the commencement of the suit, actually and voluntarily resides, or carries on business, or personally works for gain; or\n(b) any of the defendants... provided that in such case either the leave of the Court is given, or the defendants who do not reside... acquiesce in such institution; or\n(c) the cause of action, wholly or in part, arises.`,
        simplifiedExplanation: "Section 20 is the residuary or 'catch-all' territorial jurisdiction rule. It applies to all suits that do not involve immovable property (e.g., suits on contracts, recovery of money, matrimonial disputes, intellectual property). It allows suits where (a) the defendant resides or carries on business, or (b) any of the defendants reside (with court permission/acquiescence), or (c) where the cause of action arises, either wholly or in part.",
        elements: [
          "Residuary Section: Applies to personal, contractual, and commercial disputes not covered by Sections 16-19.",
          "Cause of Action (Part or Whole): This refers to the bundle of essential facts that the plaintiff must prove to win. A suit can be filed where even a tiny part of the transaction took place (e.g., contract signed in Sylhet, goods delivered in Dhaka, payment failed in Chittagong).",
          "Voluntary Residence: The residence of the defendant must be voluntary; a person in prison or forced exile does not establish voluntary residence.",
          "Corporate Residence: Explanation II states that a corporation/company is deemed to carry on business at its sole or principal office, or at any subordinate office where a cause of action arose."
        ]
      },
      {
        sectionNo: "Section 21",
        title: "Objections to Jurisdiction",
        statutoryText: "No objection as to the place of suing shall be allowed by any Appellate or Revisional Court unless such objection was taken in the Court of first instance at the earliest possible opportunity and in all cases where issues are settled at or before such settlement, and unless there has been a consequent failure of justice.",
        simplifiedExplanation: "Section 21 is a curative provision designed to prevent litigants from taking advantage of technical jurisdictional errors. If a defendant has a grievance about the geographical (territorial) or monetary (pecuniary) jurisdiction of the court, they must raise it immediately. If they stay silent, let the trial finish, and then raise it on appeal because they lost, the Appellate Court will reject the objection unless they prove that the wrong court led to a genuine miscarriage of justice.",
        elements: [
          "Cures Technical Defects: Objections to territorial and pecuniary jurisdiction are treated as technicalities, not fundamental nullities.",
          "Three Mandatory Conditions: To succeed on appeal, the appellant must prove: (1) The objection was raised in the original trial court, (2) It was raised at the earliest possible opportunity (at or before settlement of issues), and (3) There has been a 'consequent failure of justice'.",
          "Contrast with Subject-Matter Jurisdiction: Subject-matter jurisdiction (e.g., a civil court trying a family dispute that belongs to a Family Court) cannot be waived. Lack of subject-matter jurisdiction makes a decree a complete nullity that can be challenged at any time, even in execution."
        ]
      },
      {
        sectionNo: "Section 24",
        title: "General Power of Transfer and Withdrawal",
        statutoryText: `On the application of any of the parties and after notice to the parties... or of its own motion without such notice, the High Court Division or the District Court may at any stage—\n(a) transfer any suit, appeal or other proceeding pending before it for trial or disposal to any Court subordinate to it and competent to try or dispose of the same, or\n(b) withdraw any suit, appeal or other proceeding... and (i) try or dispose of the same; or (ii) transfer the same for trial or disposal to any Court subordinate to it...`,
        simplifiedExplanation: "Section 24 grants wide discretionary powers of administrative and judicial oversight to the High Court Division and District Courts. They can transfer any civil suit, appeal, or execution proceeding from one subordinate court to another (e.g., if there is local bias or for convenience of witnesses), or withdraw a case to try it themselves.",
        elements: [
          "Dual Powers: District Court can transfer within its district; High Court Division can transfer anywhere in Bangladesh.",
          "Suo Motu Power: Courts can act either on a party's application (under Section 24, requiring notice) or of their own motion (without notice).",
          "At Any Stage: Transfer or withdrawal can occur at any point in the litigation, including during trial, appeal, or execution.",
          "Competence of Transferee Court: The court receiving the transferred case must possess the required pecuniary jurisdiction to try it."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Kiran Singh v. Chaman Paswan",
        citation: "AIR 1954 SC 340",
        court: "Supreme Court of India (Subcontinent Authority)",
        facts: "The appellant valued his suit for recovery of land at BDT 2,950 and filed it in the Subordinate Judge's Court. The suit was dismissed on merits. On appeal, the District Court also dismissed it. In second appeal, the High Court's stamp reporter noted that the true valuation was BDT 9,880. Because of this higher valuation, the appeal should have been heard directly by the High Court, not the District Court. The appellant argued that the District Court's judgment was a complete nullity due to lack of pecuniary jurisdiction.",
        held: "The Supreme Court held that while a decree passed by a court without subject-matter jurisdiction is a nullity, territorial and pecuniary defects are cured by Section 21. An objection to pecuniary jurisdiction cannot be entertained by an appellate court unless the objection was taken at the earliest opportunity and there has been a consequent failure of justice. A mere wrong forum of appeal, where merits were fully argued, does not constitute a failure of justice.",
        significance: "The leading subcontinent precedent clarifying the distinction between a complete nullity (subject-matter jurisdiction defect) and a curable irregularity (territorial and pecuniary defects under Section 21)."
      },
      {
        title: "Secretary, Ministry of Works v. Md. Mohsin",
        citation: "49 DLR (AD) 102",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff filed a suit in Dhaka challenging an order of land acquisition. The Government of Bangladesh objected that the land in question was situated in Narayanganj, and therefore the Dhaka court had no territorial jurisdiction to entertain the suit, referencing Section 16 of the CPC.",
        held: "The Appellate Division held that since the property was situated in Narayanganj, the suit for declaration of title and injunction could only be instituted in the court having local jurisdiction over Narayanganj. Under Section 16, territorial jurisdiction is determined strictly by the physical location of the immovable property.",
        significance: "Reaffirms that for immovable property, Section 16 is a mandatory geographical command that cannot be bypassed by filing in a capital city court where a government office sits."
      },
      {
        title: "M/S. Hossen Brothers v. M/S. S.A. Khan",
        citation: "25 DLR (AD) 12",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A commercial contract was executed in Chittagong, but the breach occurred in Dhaka, and the defendant resided in Sylhet. The plaintiff filed a suit for damages in Chittagong. The defendant objected, arguing that since the breach was in Dhaka and they lived in Sylhet, Chittagong had no jurisdiction.",
        held: "The Appellate Division held that under Section 20(c), a suit can be instituted where the cause of action arises, 'wholly or in part'. Since the contract was executed in Chittagong, a vital part of the cause of action arose there, granting Chittagong full jurisdiction to try the suit.",
        significance: "The leading case defining 'cause of action in part' in commercial and contractual disputes under Section 20 of the CPC."
      }
    ],
    maxims: [
      {
        maxim: "Forum rei sitae",
        translation: "The forum where the subject-matter (property) is situated.",
        application: "Section 16. Imposes the rule that lawsuits involving land must be filed where the property is located."
      },
      {
        maxim: "Debita sequuntur personam",
        translation: "Debts follow the person.",
        application: "Section 20. Underpins the rule that personal, monetary, or contractual suits should be filed where the defendant resides."
      },
      {
        maxim: "Actor sequitur forum rei",
        translation: "The plaintiff must follow the forum of the defendant.",
        application: "Section 20. General common law and statutory principle that a defendant should be sued in their own local court to prevent harassment."
      }
    ],
    mcqs: [
      {
        id: "mcq-2-1",
        question: "Under Section 15 of the CPC, every suit must be instituted in the court of:",
        options: [
          { id: "a", text: "The High Court Division directly" },
          { id: "b", text: "The District Judge's Court only" },
          { id: "c", text: "The lowest grade competent to try it" },
          { id: "d", text: "The highest grade competent to try it" }
        ],
        correctOptionId: "c",
        explanation: "Section 15 mandates: 'Every suit shall be instituted in the Court of the lowest grade competent to try it.' This is an administrative rule of convenience to distribute workload."
      },
      {
        id: "mcq-2-2",
        question: "A suit for the partition of immovable property situated in Comilla must be filed in:",
        options: [
          { id: "a", text: "The court in Dhaka where the parties currently reside" },
          { id: "b", text: "The court in Comilla where the property is situate" },
          { id: "c", text: "Any court in Bangladesh at the option of the plaintiff" },
          { id: "d", text: "The Supreme Court of Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 16(b) of the CPC, suits for the partition of immovable property shall be instituted in the Court within the local limits of whose jurisdiction the property is situate."
      },
      {
        id: "mcq-2-3",
        question: "A resident of Sylhet is libeled (defamed) in Barisal by a resident of Jessore. Under Section 19 of the CPC, where can the plaintiff file a suit for compensation?",
        options: [
          { id: "a", text: "Only in Sylhet" },
          { id: "b", text: "Only in Jessore" },
          { id: "c", text: "In either Barisal (where wrong was done) or Jessore (where defendant resides)" },
          { id: "d", text: "Only in Dhaka as the capital city" }
        ],
        correctOptionId: "c",
        explanation: "Under Section 19, a suit for compensation for wrongs to person or movables can be filed, at the option of the plaintiff, either where the wrong was done (Barisal) or where the defendant resides/works (Jessore)."
      },
      {
        id: "mcq-2-4",
        question: "To succeed in an objection to territorial or pecuniary jurisdiction on appeal, the appellant must prove three conditions under Section 21. Which of the following is NOT one of those conditions?",
        options: [
          { id: "a", text: "The objection was taken in the court of first instance" },
          { id: "b", text: "The objection was taken at the earliest possible opportunity" },
          { id: "c", text: "There has been a consequent failure of justice" },
          { id: "d", text: "The suit value exceeds 50 Lakh BDT" }
        ],
        correctOptionId: "d",
        explanation: "Section 21 requires: (1) objection taken in the court of first instance, (2) at the earliest possible opportunity/settlement of issues, and (3) there has been a consequent failure of justice. Suit valuation is not a condition for allowing the objection."
      },
      {
        id: "mcq-2-5",
        question: "Under Section 24 of the CPC, which courts hold the general power to transfer or withdraw any civil suit, appeal, or proceeding?",
        options: [
          { id: "a", text: "Only Assistant Judge Courts" },
          { id: "b", text: "The High Court Division and the District Court" },
          { id: "c", text: "Only the Land Survey Tribunal" },
          { id: "d", text: "The Ministry of Law and Justice" }
        ],
        correctOptionId: "b",
        explanation: "Section 24 explicitly grants the general power of transfer and withdrawal to the High Court Division and the District Court, either on application or suo motu."
      },
      {
        id: "mcq-2-6",
        question: "What is the effect of a decree passed by a court that lacks subject-matter jurisdiction?",
        options: [
          { id: "a", text: "It is perfectly valid and cannot be challenged" },
          { id: "b", text: "It is a coram non judice and a complete nullity" },
          { id: "c", text: "It is cured automatically by Section 21" },
          { id: "d", text: "It can only be challenged in a foreign court" }
        ],
        correctOptionId: "b",
        explanation: "Subject-matter jurisdiction goes to the root of a court's competence. A decree passed by a court without subject-matter jurisdiction is a complete nullity (coram non judice) and is not cured by Section 21, as clarified in Kiran Singh v. Chaman Paswan."
      },
      {
        id: "mcq-2-7",
        question: "Where a corporation has its principal office in Dhaka, and a breach of contract (cause of action) occurs at a branch office in Rajshahi, a suit against the corporation can be filed in:",
        options: [
          { id: "a", text: "Only in Dhaka" },
          { id: "b", text: "Only in Rajshahi" },
          { id: "c", text: "In either Dhaka (principal office) or Rajshahi (where cause of action arose)" },
          { id: "d", text: "Only in Chittagong" }
        ],
        correctOptionId: "c",
        explanation: "Under Section 20, Explanation II, a corporation is deemed to carry on business at its principal office, or, in respect of any cause of action arising at any place where it has also a subordinate office, at such place."
      },
      {
        id: "mcq-2-8",
        question: "In which landmark case did the Appellate Division reaffirm that for immovable property, Section 16 is a mandatory command and title suits must be filed where the property is physically situated?",
        options: [
          { id: "a", text: "Secretary, Ministry of Works v. Md. Mohsin (49 DLR (AD) 102)" },
          { id: "b", text: "Dildar Ali v. Syed Ali" },
          { id: "c", text: "Anwar Hossain Chowdhury v. Bangladesh" },
          { id: "d", text: "Abdul Ghafoor v. State" }
        ],
        correctOptionId: "a",
        explanation: "In Secretary, Ministry of Works v. Md. Mohsin, 49 DLR (AD) 102, the Appellate Division ruled that title and injunction suits for immovable property must strictly be filed where the property is situated, in accordance with Section 16."
      },
      {
        id: "mcq-2-9",
        question: "If a suit is filed in a court without territorial jurisdiction, and the defendant participates in the trial without objecting until the appeal stage, what is the outcome?",
        options: [
          { id: "a", text: "The appeal will be automatically allowed and the suit retried" },
          { id: "b", text: "The appellate court will dismiss the objection unless there has been a consequent failure of justice" },
          { id: "c", text: "The judge of the trial court will be suspended" },
          { id: "d", text: "The suit will be referred to a foreign court" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 21, the appellate court will not allow the objection unless it was taken at the earliest opportunity and there has been a consequent failure of justice. Technical silence acts as a waiver."
      },
      {
        id: "mcq-2-10",
        question: "Which section of the CPC states that no objection as to the competence of an executing Court with reference to its pecuniary limits shall be allowed unless taken in such Court at the earliest possible opportunity?",
        options: [
          { id: "a", text: "Section 15" },
          { id: "b", text: "Section 16" },
          { id: "c", text: "Section 21(2)" },
          { id: "d", text: "Section 24" }
        ],
        correctOptionId: "c",
        explanation: "Section 21(2) specifically deals with objections to the competence of an executing court with reference to its pecuniary limits, establishing the same early-objection requirements."
      }
    ]
  },
  {
    id: "chapter-3",
    title: "Chapter 3: CPC - Execution of Decree",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the vital legal mechanics of enforcing court orders. It details the courts responsible for executing decrees (Section 38), the conditions and protocols for transferring a decree to another court (Section 39), the fundamental rule that all execution disputes must be decided in the executing court itself rather than by a separate suit (Section 47), the various execution methods (Section 51), civil imprisonment rules (Section 58), and the highly-tested list of properties exempt from attachment (Section 60).",
    studyStrategy: "For the BJS and Bar Council examinations, prioritize Section 47 and Section 60. Remember the golden rule of Section 47: 'No separate suit shall lie' for execution, discharge, or satisfaction disputes. In Section 60, memorize the exact list of non-attachable properties: wearing apparel, cooking vessels, bedding, tools of artisans, implements of husbandry, and wages of laborers. These exemptions are frequently tested in both multiple-choice and descriptive scenarios.",
    sections: [
      {
        sectionNo: "Section 38",
        title: "Court by Which Decree May be Executed",
        statutoryText: "A decree may be executed either by the Court which passed it, or by the Court to which it is sent for execution.",
        simplifiedExplanation: "This section establishes the two potential forums for executing a decree: (1) the original trial court that passed the judgment, or (2) a different competent court to which the original court transfers the decree for actual execution (for instance, because the debtor's property is located elsewhere).",
        elements: [
          "Court Which Passed It: Defined further in Section 37 to include appellate courts (where the decree of first instance was modified/affirmed) or courts that succeeded the original court if it was abolished.",
          "Court of Transfer: Any court to which the decree is sent by the original court under Section 39.",
          "Concurrent Jurisdictions: Both courts possess valid execution powers, though they must not execute the exact same relief concurrently to avoid double recovery."
        ]
      },
      {
        sectionNo: "Section 39",
        title: "Transfer of Decree",
        statutoryText: `(1) The Court which passed a decree may, on the application of the decree-holder, send it for execution to another Court of competent jurisdiction,—\n(a) if the person against whom the decree is passed actually and voluntarily resides...\n(b) if such person has not property within the local limits... sufficient to satisfy such decree,\n(c) if the decree directs the sale or delivery of immovable property situate outside...\n(2) The Court which passed a decree may of its own motion send it for execution to any subordinate Court of competent jurisdiction.`,
        simplifiedExplanation: "Section 39 outlines the grounds for transferring a decree to another court for execution. This is usually initiated by the decree-holder when the judgment-debtor lives or has all their property outside the original court's geographic boundaries.",
        elements: [
          "On Application: The decree-holder applies for a transfer on specific statutory grounds (debtor's residence, property location, or land site).",
          "Suo Motu Power: The trial court can transfer the decree of its own motion, but ONLY to a subordinate court of competent jurisdiction.",
          "Pecuniary Competency: The transferee court must possess sufficient pecuniary jurisdiction to try a suit of the value of the decree being transferred."
        ]
      },
      {
        sectionNo: "Section 47",
        title: "Questions to be Determined by the Court Executing Decree",
        statutoryText: "(1) All questions arising between the parties to the suit in which the decree was passed, or their representatives, and relating to the execution, discharge or satisfaction of the decree, shall be determined by the Court executing the decree and not by a separate suit.",
        simplifiedExplanation: "Section 47 is a crucial section designed to prevent a multiplicity of lawsuits. It mandates that any dispute regarding whether a decree has been properly carried out, paid off, or discharged must be resolved inside the ongoing execution case itself. You are strictly forbidden from filing a brand-new civil suit to challenge these matters.",
        elements: [
          "Three Core Pillars: The dispute must meet three criteria: (1) It must arise between 'parties to the suit' or their legal representatives, (2) It must relate to the 'execution, discharge, or satisfaction' of the decree, and (3) It must be resolved by the executing court.",
          "Absolute Bar on Separate Suits: If a question falls within Section 47, a fresh civil lawsuit is strictly barred. Any such suit must be dismissed.",
          "Determination of Representative Status: Under Section 47(3), if a dispute arises as to whether a person is or is not the legal representative of a party, the executing court itself must decide that question.",
          "High-Yield Concept: An executing court cannot go behind the decree; it must take the decree as it stands and cannot question its correctness or validity on merits, unless the decree was passed by a court completely lacking inherent jurisdiction (rendering it a nullity)."
        ]
      },
      {
        sectionNo: "Section 51",
        title: "Powers of Court to Enforce Execution",
        statutoryText: `Subject to such conditions and limitations as may be prescribed, the Court may, on the application of the decree-holder, order execution of the decree—\n(a) by delivery of any property specifically decreed;\n(b) by attachment and sale or by sale without attachment of any property;\n(c) by arrest and detention in prison;\n(d) by appointing a receiver; or\n(e) in such other manner as the nature of the relief afforded may require.`,
        simplifiedExplanation: "Section 51 provides the statutory 'toolbox' for the executing court. It lists the exact physical actions a court can take to force a stubborn debtor to comply with a judgment.",
        elements: [
          "Specific Property Delivery: Physically retrieving a specific chattel or land parcel and giving it to the decree-holder.",
          "Attachment and Sale: Seizing the debtor's properties (bank accounts, real estate) and selling them at a public auction to pay off the debt.",
          "Arrest and Detention: Sending the debtor to a civil prison as a coercive measure (subject to strict statutory limits and human-rights conditions under the Proviso).",
          "Appointment of a Receiver: Putting an independent officer in charge of managing or collecting income from the debtor's assets to satisfy the decree."
        ]
      },
      {
        sectionNo: "Section 58",
        title: "Detention and Release",
        statutoryText: "Every person detained in the civil prison in execution of a decree shall be so detained,—(a) where the decree is for the payment of a sum of money exceeding fifty Taka, for a period not exceeding six weeks, and (b) where the decree is for the payment of a sum of money exceeding fifty Taka... [Note: Subject to subsequent statutory amendments in Bangladesh regarding pecuniary thresholds].",
        simplifiedExplanation: "Section 58 sets strict maximum time limits for civil imprisonment to prevent indefinite debtor incarceration. In Bangladesh, modern civil arrest is highly restricted and subject to specific procedural safeguards, requiring proof of the debtor's active bad faith or capacity to pay.",
        elements: [
          "Coercive, Not Punitive: Civil detention is meant to compel payment, not to punish a crime. Thus, the debtor is released immediately once the debt is paid or settled.",
          "Subsistence Allowance: The decree-holder must pay a daily subsistence fee to the state for the debtor's prison stay. If they fail to pay this fee, the debtor is instantly set free.",
          "Release Safeguards: Once released from civil prison, a debtor can never be re-arrested under the same decree, though their property remains fully liable for the debt."
        ]
      },
      {
        sectionNo: "Section 60",
        title: "Property Liable to Attachment and Sale in Execution of Decree",
        statutoryText: `The following property is liable to attachment and sale... lands, houses, goods, money, bank-notes, cheques, bills of exchange, hundis, government securities, bonds... \nProvided that the following particulars shall not be liable to such attachment or sale, namely:—\n(a) the necessary wearing apparel, cooking vessels and bedding of the judgment-debtor, his wife and children;\n(b) tools of artisans, and, where the judgment-debtor is an agriculturist, his implements of husbandry and such cattle and seed-grain...\n(g) stipends and gratuities allowed to pensioners of the Government...\n(i) the salary of any public officer or of any servant of a railway company or local authority to the extent of the first hundred Taka and one-half the remainder...`,
        simplifiedExplanation: "Section 60 is a massive, highly-tested statutory catalog. It begins with a general rule that all assets of a debtor are fair game for attachment and sale, but then provides an exhaustive list of human-dignity and livelihood exemptions that the court is legally prohibited from touching.",
        elements: [
          "General Principle of Liability: Any property over which the debtor has a disposing power for their own benefit can be seized.",
          "Dignity Exemptions: Wearing apparel, kitchen cooking pots, and family bedding are absolutely non-attachable.",
          "Livelihood Exemptions: Tools used by an artisan (e.g., a tailor's sewing machine, a carpenter's saw) and an agriculturalist's farming tools, seeds, and draft animals are protected to ensure they can continue earning a living.",
          "Financial Protections: Government pensions, provident funds, and portions of a person's monthly salary are shielded from complete seizure to prevent destitution."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Vasudev Dhanjibhai Modi v. Rajabhai Abdul Rehman",
        citation: "AIR 1970 SC 1475",
        court: "Supreme Court of India (Subcontinent Authority)",
        facts: "An eviction decree was passed against a tenant. During execution, the tenant objected that the court which passed the decree lacked territorial jurisdiction, meaning the decree was void and the executing court should refuse to execute it.",
        held: "The Supreme Court ruled that an executing court must execute the decree as it is and cannot go behind the decree or question its validity, correctness, or legality. The only exception is when the decree is a complete nullity on its face due to an inherent lack of subject-matter jurisdiction. If the defect of jurisdiction is territorial or pecuniary, it is waived if not raised in the trial court itself and cannot be used to block execution.",
        significance: "The foundation stone of execution law establishing that the executing court is bound by the terms of the decree and cannot act as an appellate court over the trial judge's work."
      },
      {
        title: "Amina Khatun v. Md. Yusuf",
        citation: "30 DLR (AD) 160",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A party filed a fresh civil suit seeking to set aside an execution sale on the grounds of fraud and irregularity. The defendant raised a preliminary objection that under Section 47 of the CPC, the plaintiff's only remedy was to file an execution petition in the original court, and that a separate lawsuit was completely barred.",
        held: "The Appellate Division held that questions relating to the validity of an execution sale, including allegations of fraud in publishing or conducting the sale, are questions relating to the execution, discharge, or satisfaction of the decree. Such matters fall strictly within the scope of Section 47, and a separate suit is absolutely barred.",
        significance: "Crucial Bangladesh precedent reinforcing the strict statutory bar against separate civil suits for disputes that should be raised under Section 47."
      },
      {
        title: "Mofizuddin Ahmed v. Lal Mia",
        citation: "21 DLR 35",
        court: "High Court of East Pakistan (Bangladesh Authority)",
        facts: "The decree-holder sought execution of a boundary decree. The judgment-debtor claimed the decree was ambiguous and could not be executed without altering the survey maps. They asked the executing court to change the boundary lines specified in the decree.",
        held: "The Court held that while an executing court cannot modify, vary, or go behind the decree, it has full power and duty to interpret the decree in case of any ambiguity. To interpret the decree, the court may refer to the pleadings, the judgment, and the trial records, but it must never change the substance of the relief granted.",
        significance: "Explains the precise boundary of the executing court's powers: it cannot alter or modify the decree, but it can interpret its terms to make execution physically possible."
      }
    ],
    maxims: [
      {
        maxim: "Ubi jus ibi remedium",
        translation: "Where there is a right, there is a remedy.",
        application: "Section 51. The court's extensive execution powers ensure that a successful litigant can actually realize the fruits of their legal victory."
      },
      {
        maxim: "Executio est executio juris secundum judicium",
        translation: "Execution is the execution of the law according to the judgment.",
        application: "Section 38 & 47. Establishes that the executing court's sole duty is to enforce the decree as written without reassessing the merits of the case."
      },
      {
        maxim: "Vigilantibus non dormientibus jura subveniunt",
        translation: "The law assists the vigilant, not those who sleep.",
        application: "Order 21. Emphasizes that execution must be applied for within the strict limitation periods (3 years for standard decrees, 12 years for registered decrees/injunctions under Article 182/183 of the Limitation Act)."
      }
    ],
    mcqs: [
      {
        id: "mcq-3-1",
        question: "Under Section 38 of the CPC, a civil decree can be executed by:",
        options: [
          { id: "a", text: "The High Court Division only" },
          { id: "b", text: "Only the District Judge's Court" },
          { id: "c", text: "The Court which passed it, or the Court to which it is sent for execution" },
          { id: "d", text: "The local Land Revenue Office" }
        ],
        correctOptionId: "c",
        explanation: "Section 38 explicitly states: 'A decree may be executed either by the Court which passed it, or by the Court to which it is sent for execution.'"
      },
      {
        id: "mcq-3-2",
        question: "Under Section 47 of the CPC, all questions relating to the execution, discharge, or satisfaction of a decree must be determined by:",
        options: [
          { id: "a", text: "A fresh civil suit filed in the District Court" },
          { id: "b", text: "The Court executing the decree and not by a separate suit" },
          { id: "c", text: "An arbitration tribunal appointed by the parties" },
          { id: "d", text: "The Ministry of Law and Justice" }
        ],
        correctOptionId: "b",
        explanation: "Section 47(1) mandates that all such questions 'shall be determined by the Court executing the decree and not by a separate suit' to prevent endless litigation."
      },
      {
        id: "mcq-3-3",
        question: "What is the general rule regarding the power of an executing court to challenge the validity of the decree it is executing?",
        options: [
          { id: "a", text: "It can freely review and modify the decree's merits" },
          { id: "b", text: "It can go behind the decree if it believes the trial judge made an error of law" },
          { id: "c", text: "It cannot go behind the decree or question its correctness, unless the decree is a complete nullity for lack of inherent jurisdiction" },
          { id: "d", text: "It can set aside the decree and order a fresh trial of its own motion" }
        ],
        correctOptionId: "c",
        explanation: "As established in Vasudev Dhanjibhai Modi v. Rajabhai, an executing court is bound by the decree and cannot go behind it or question its validity unless it is a total nullity on its face due to lack of inherent jurisdiction."
      },
      {
        id: "mcq-3-4",
        question: "Which of the following properties is ABSOLUTELY EXEMPT from attachment and sale under Section 60 of the CPC?",
        options: [
          { id: "a", text: "The debtor's luxury passenger vehicle" },
          { id: "b", text: "The necessary wearing apparel, cooking vessels, and bedding of the debtor, their wife, and children" },
          { id: "c", text: "Commercial warehouse properties" },
          { id: "d", text: "Shares held in a public limited company" }
        ],
        correctOptionId: "b",
        explanation: "Section 60 Proviso (a) shields basic human dignity essentials like necessary wearing apparel, cooking vessels, and bedding from seizure."
      },
      {
        id: "mcq-3-5",
        question: "Under Section 60, who is protected by the exemption of 'tools of artisans' and 'implements of husbandry'?",
        options: [
          { id: "a", text: "Large corporate factories" },
          { id: "b", text: "Artisans and agriculturists to protect their basic livelihood" },
          { id: "c", text: "Wholesale commodity traders" },
          { id: "d", text: "Real estate developers" }
        ],
        correctOptionId: "b",
        explanation: "Section 60 Proviso (b) exempts the tools of artisans and implements of husbandry of agriculturalists so they are not deprived of their basic means of living."
      },
      {
        id: "mcq-3-6",
        question: "If a dispute arises in an execution proceeding as to whether a person is or is not the legal representative of a deceased party, who must decide this question under Section 47(3)?",
        options: [
          { id: "a", text: "The parties must file a separate declaratory suit" },
          { id: "b", text: "The executing court itself must decide the question" },
          { id: "c", text: "The local Union Parishad Chairman" },
          { id: "d", text: "The Police Station Officer-in-Charge" }
        ],
        correctOptionId: "b",
        explanation: "Section 47(3) states that where a question arises as to whether any person is or is not the representative of a party, such question shall, for the purposes of this section, be determined by the executing court."
      },
      {
        id: "mcq-3-7",
        question: "Which of the following is NOT a valid mode of enforcing execution under Section 51 of the CPC?",
        options: [
          { id: "a", text: "Attachment and sale of the debtor's property" },
          { id: "b", text: "Appointment of a receiver" },
          { id: "c", text: "Arrest and detention in civil prison" },
          { id: "d", text: "Forfeiture of the debtor's citizenship" }
        ],
        correctOptionId: "d",
        explanation: "Citizenship forfeiture is a constitutional/state matter and is not a civil law remedy. The other three options are explicitly permitted under Section 51."
      },
      {
        id: "mcq-3-8",
        question: "Under what condition is a debtor released from civil prison before the expiration of their term of detention under Section 58?",
        options: [
          { id: "a", text: "Instantly upon full payment or satisfaction of the decree amount" },
          { id: "b", text: "If the decree-holder fails to pay the required subsistence allowance" },
          { id: "c", text: "Both (a) and (b) are correct" },
          { id: "d", text: "Only if they escape the prison premises" }
        ],
        correctOptionId: "c",
        explanation: "A debtor in civil prison is released upon full satisfaction of the decree, or if the decree-holder fails to pay the subsistence allowance required by the state."
      },
      {
        id: "mcq-3-9",
        question: "In the landmark Bangladesh case Amina Khatun v. Md. Yusuf (30 DLR (AD) 160), the Appellate Division held that disputes regarding the validity of an execution sale:",
        options: [
          { id: "a", text: "Must be resolved via a separate civil suit" },
          { id: "b", text: "Fall strictly within Section 47 and cannot be challenged by a separate suit" },
          { id: "c", text: "Are criminal matters that must be reported to a magistrate" },
          { id: "d", text: "Are automatically referred to an international arbitrator" }
        ],
        correctOptionId: "b",
        explanation: "The Supreme Court of Bangladesh in Amina Khatun held that execution sale challenges relate directly to execution, discharge, or satisfaction, making them section 47 matters, meaning a separate suit is barred."
      },
      {
        id: "mcq-3-10",
        question: "If a civil court sends a decree to another competent court for execution under Section 39, the transferee court:",
        options: [
          { id: "a", text: "Can alter the decree to suit its local custom" },
          { id: "b", text: "Has the same powers in executing the decree as if it had been passed by itself" },
          { id: "c", text: "Can transfer it back without any execution attempt" },
          { id: "d", text: "Can declare the original court's judgment completely illegal" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 42 of the CPC, the Court executing a decree sent to it shall have the same powers in executing such decree as if it had been passed by itself."
      }
    ]
  },
  {
    id: "chapter-4",
    title: "Chapter 4: CPC - Appeals from Decrees & Orders",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter examines the procedural pathways for appealing civil judgments under the CPC. It covers appeals from original decrees (Section 96), the bar against appeals from consent decrees, appeals from preliminary vs. final decrees (Section 97), the powers of appellate courts (Section 107), appeals from appealable orders (Section 104 and Order 43), the strict rules for producing additional evidence in appellate courts (Order 41, Rule 27), and remanding cases for retrial (Order 41, Rule 23/23A).",
    studyStrategy: "For BJS and Bar Council examinations, focus heavily on Section 96(3) (no appeal from consent decrees) and Order 41 Rule 27 (the precise three conditions under which an appellate court may accept additional evidence). Keep in mind that a right of appeal is a statutory creation, not an inherent common-law right. Master the structural difference between an Appeal (which rehears both facts and law) and Revision (which checks jurisdictional errors only).",
    sections: [
      {
        sectionNo: "Section 96",
        title: "Appeal from Original Decree",
        statutoryText: "(1) Save where otherwise expressly provided in the body of this Code or by any other law for the time being in force, an appeal shall lie from every decree passed by any Court exercising original jurisdiction to the Court authorized to hear appeals from the decisions of such Court.\n(2) An appeal may lie from an original decree passed ex parte.\n(3) No appeal shall lie from a decree passed by the Court with the consent of parties.",
        simplifiedExplanation: "An appeal is a formal request to a higher court to review, modify, or overturn the decision of a lower trial court. Under Section 96, every original civil decree is appealable as of right, except for consent decrees, which cannot be appealed because both parties agreed to them.",
        elements: [
          "Substantive Right: A right of appeal is a substantive right created by statute. It is not a matter of procedure or an inherent right.",
          "Appeal from Ex-Parte Decree: Under Section 96(2), if a defendant was absent and an ex-parte decree was passed, they can file a standard appeal under Section 96, in addition to applying to set it aside under Order 9 Rule 13.",
          "Consent Decree Absolute Bar: Under Section 96(3), no appeal can ever be filed against a decree passed with the consent of parties. The only way to challenge a consent decree is through a separate suit alleging fraud, coercion, or mutual mistake."
        ]
      },
      {
        sectionNo: "Section 97",
        title: "Appeal from Final Decree where no Appeal from Preliminary Decree",
        statutoryText: "Where any party aggrieved by a preliminary decree passed after the commencement of this Code does not appeal from such decree, he shall be precluded from disputing its correctness in any appeal which may be preferred from the final decree.",
        simplifiedExplanation: "In civil suits like partition or mortgage foreclosure, the court often passes a preliminary decree first (defining shares/rights) and then a final decree later (actually dividing the land or performing the sale). Section 97 states that if you are unhappy with the preliminary decree, you must appeal it immediately. You cannot wait and try to challenge it during an appeal of the final decree.",
        elements: [
          "Preliminary Decree: A decree that determines the rights of parties but does not completely dispose of the suit.",
          "Preclusion Bar: If you do not appeal the preliminary decree within the limitation period, its correctness is deemed accepted, and you are forever barred from challenging it in a final decree appeal."
        ]
      },
      {
        sectionNo: "Section 104",
        title: "Appeals from Orders",
        statutoryText: "(1) An appeal shall lie from the following orders, and save as otherwise expressly provided in the body of this Code or by any other law for the time being in force, from no other orders...\n(2) No appeal shall lie from any order passed in appeal under this section.",
        simplifiedExplanation: "Unlike decrees (which decide substantive rights), orders usually deal with procedural steps. As a general rule, orders are not appealable. However, Section 104 and Order 43 Rule 1 list specific, high-yield exceptions called 'appealable orders' (such as orders rejecting a plaint, refusing an injunction, or rejecting an application to set aside an ex-parte decree).",
        elements: [
          "Exhaustive List: An appeal only lies against orders explicitly listed in Section 104 or Order 43. No other orders can be appealed.",
          "Bar on Second Appeal: Under Section 104(2), you cannot file a 'second appeal' against an order passed in an appeal. Once an appeal of an order is decided, that is the end of the appellate road; the only remedy left is a civil revision."
        ]
      },
      {
        sectionNo: "Order 41, Rule 27",
        title: "Production of Additional Evidence in Appellate Court",
        statutoryText: "(1) The parties to an appeal shall not be entitled to produce additional evidence, whether oral or documentary, in the Appellate Court. But if—\n(a) the Court from whose decree the appeal is preferred has refused to admit evidence which ought to have been admitted, or\n(b) the Appellate Court requires any document to be produced or any witness to be examined to enable it to pronounce judgment, or for any other substantial cause...\nthe Appellate Court may allow such evidence or document to be produced, or witness to be examined.",
        simplifiedExplanation: "An appeal is a review of the existing trial record, not a second trial. Therefore, parties are strictly prohibited from bringing new evidence or witnesses into the appellate court. Order 41 Rule 27 provides three narrow, highly-restricted exceptions where the appellate court itself requires the additional evidence to deliver justice.",
        elements: [
          "General Rule of Exclusion: Parties have no right to present new evidence on appeal. Negligence or failure to produce evidence in the trial court is never an excuse.",
          "Trial Court's Wrongful Refusal: If the trial judge wrongfully rejected a piece of evidence, the appellate court can admit it.",
          "Court's Requirement: The primary ground is that the Appellate Court itself finds that it cannot pronounce judgment or do justice without the additional material."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Munsur Ali v. Md. Shafiuddin",
        citation: "39 DLR (AD) 166",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A civil suit was decreed, and the defendant filed an appeal. The respondent objected that the statutory right of appeal was procedural and could be curtailed retrospectively by the legislature.",
        held: "The Appellate Division held that a right of appeal is not a mere matter of procedure but a substantive, vested right. This right vests in the litigant the moment the suit is instituted and cannot be taken away or curtailed by subsequent legislation unless done so by express words or necessary implication.",
        significance: "The definitive authority on the nature of appellate rights as substantive and vested."
      },
      {
        title: "Sree Sree Radhagobinda Jew v. Md. Ayub",
        citation: "45 DLR 350",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "During an appeal, one of the parties filed an application under Order 41, Rule 27 to admit a registered deed of gift as additional evidence. The other side objected, stating that the party was merely trying to fill up a gap in their case due to negligence in the trial court.",
        held: "The Court held that the power to admit additional evidence under Order 41, Rule 27 is discretionary and must be exercised with extreme caution. It cannot be used to allow a negligent litigant to patch up their case or fill up omissions. Additional evidence can only be admitted if the court itself requires it to enable it to pronounce judgment, or if the document could not be produced despite due diligence.",
        significance: "Reaffirms the strict, court-centric limitation on admitting new evidence in civil appeals."
      },
      {
        title: "Abdul Jalil v. Md. Zayed Ali",
        citation: "50 DLR (AD) 124",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff obtained an ex-parte decree. The defendant filed an appeal under Section 96(2). The plaintiff argued that the defendant's only remedy was to file an application under Order 9, Rule 13 to set aside the ex-parte decree, and that a direct appeal was incompetent.",
        held: "The Appellate Division held that the remedies available to a defendant against an ex-parte decree are concurrent. The defendant has a statutory right to prefer an appeal under Section 96(2), as well as file an application under Order 9, Rule 13. One remedy does not bar the other, and the appellate court can hear the appeal on merits based on the existing record.",
        significance: "Confirms that an appeal against an ex-parte decree is a concurrent statutory right."
      }
    ],
    maxims: [
      {
        maxim: "Appellatio non est novum iudicium",
        translation: "An appeal is not a new trial.",
        application: "Order 41 Rule 27. The appellate court is confined to the trial record and does not re-hear witnesses or take new evidence except under strict statutory conditions."
      },
      {
        maxim: "Interest reipublicae ut sit finis litium",
        translation: "It is in the interest of the state that there be an end to litigation.",
        application: "Section 96(3) & 104(2). Explains why consent decrees and appeals of orders are barred from second appeals, establishing finality in judicial disputes."
      },
      {
        maxim: "Ubi jus ibi remedium",
        translation: "Where there is a right, there is a remedy.",
        application: "Section 96. Guarantees that every person who suffers a wrongful judicial decree has a statutory right of recourse to a higher, more experienced forum."
      }
    ],
    mcqs: [
      {
        id: "mcq-4-1",
        question: "Under Section 96 of the Code of Civil Procedure, a right of appeal is considered:",
        options: [
          { id: "a", text: "A mere rule of procedure" },
          { id: "b", text: "A vested substantive right" },
          { id: "c", text: "An inherent common-law right" },
          { id: "d", text: "A discretionary privilege granted by the trial judge" }
        ],
        correctOptionId: "b",
        explanation: "As confirmed in the landmark case of Munsur Ali v. Md. Shafiuddin (39 DLR (AD) 166), a right of appeal is a vested substantive right created by statute, not a mere matter of procedure."
      },
      {
        id: "mcq-4-2",
        question: "Under Section 96(3) of the CPC, an appeal is ABSOLUTELY BARRED against:",
        options: [
          { id: "a", text: "An ex-parte decree" },
          { id: "b", text: "A preliminary decree in a partition suit" },
          { id: "c", text: "A decree passed by the court with the consent of parties" },
          { id: "d", text: "A decree passed by a small causes court" }
        ],
        correctOptionId: "c",
        explanation: "Section 96(3) states that 'No appeal shall lie from a decree passed by the Court with the consent of parties.'"
      },
      {
        id: "mcq-4-3",
        question: "If a party aggrieved by a preliminary decree does not appeal against it within the limitation period, they:",
        options: [
          { id: "a", text: "Can challenge its correctness in the appeal against the final decree" },
          { id: "b", text: "Are forever precluded from disputing its correctness under Section 97" },
          { id: "c", text: "Can apply for a fresh trial of the entire suit" },
          { id: "d", text: "Must file a separate suit to declare the preliminary decree void" }
        ],
        correctOptionId: "b",
        explanation: "Section 97 of the CPC precludes a party who fails to appeal a preliminary decree from disputing its correctness in any appeal against the final decree."
      },
      {
        id: "mcq-4-4",
        question: "Under Section 104(2) of the CPC, which of the following is correct regarding appeals from orders?",
        options: [
          { id: "a", text: "A second appeal lies to the High Court Division in all cases" },
          { id: "b", text: "No appeal shall lie from any order passed in appeal under Section 104" },
          { id: "c", text: "An appeal lies directly to the Supreme Court" },
          { id: "d", text: "An appeal lies only if the trial court grants special permission" }
        ],
        correctOptionId: "b",
        explanation: "Section 104(2) explicitly bars second appeals from orders, stating: 'No appeal shall lie from any order passed in appeal under this section.'"
      },
      {
        id: "mcq-4-5",
        question: "Under Order 41, Rule 27 of the CPC, additional evidence can be admitted in the Appellate Court:",
        options: [
          { id: "a", text: "Whenever a party has forgotten to produce it in the trial court" },
          { id: "b", text: "As of right by either party at any stage" },
          { id: "c", text: "Only under narrow statutory conditions, primarily if the Appellate Court itself requires it to pronounce judgment" },
          { id: "d", text: "Only if the local police officer certifies the evidence as genuine" }
        ],
        correctOptionId: "c",
        explanation: "Order 41, Rule 27 restricts additional evidence, allowing it only if the trial court wrongfully refused it, or the appellate court itself requires it to pronounce judgment or for other substantial causes."
      },
      {
        id: "mcq-4-6",
        question: "In the case of Abdul Jalil v. Md. Zayed Ali (50 DLR (AD) 124), the Appellate Division clarified that against an ex-parte decree, a defendant:",
        options: [
          { id: "a", text: "Can only file an application under Order 9 Rule 13" },
          { id: "b", text: "Can only file a revision petition" },
          { id: "c", text: "Has concurrent remedies: they can file an appeal under Section 96(2) or apply under Order 9 Rule 13" },
          { id: "d", text: "Must file a fresh civil suit to set it aside" }
        ],
        correctOptionId: "c",
        explanation: "The Appellate Division confirmed that remedies against an ex-parte decree are concurrent: the defendant can appeal under Section 96(2) or seek to set it aside under Order 9 Rule 13."
      },
      {
        id: "mcq-4-7",
        question: "Which of the following is NOT a power of an Appellate Court as set out in Section 107 of the CPC?",
        options: [
          { id: "a", text: "To determine a case finally" },
          { id: "b", text: "To remand a case" },
          { id: "c", text: "To frame issues and refer them for trial" },
          { id: "d", text: "To arrest a party for failing to comply with the decree" }
        ],
        correctOptionId: "d",
        explanation: "Section 107 details the powers of the Appellate Court: final determination, remand, framing issues, and taking additional evidence. Physical arrest in execution is a power of the executing court, not a standard appellate power under Sec 107."
      },
      {
        id: "mcq-4-8",
        question: "The procedural rules for filing and conducting appeals from original decrees are contained in which Order of the CPC?",
        options: [
          { id: "a", text: "Order 39" },
          { id: "b", text: "Order 41" },
          { id: "c", text: "Order 43" },
          { id: "d", text: "Order 47" }
        ],
        correctOptionId: "b",
        explanation: "Order 41 of the Code of Civil Procedure contains the detailed procedural rules governing appeals from original decrees."
      },
      {
        id: "mcq-4-9",
        question: "The rule that an executing court or appellate court cannot go behind a decree is subject to which rare exception?",
        options: [
          { id: "a", text: "If the decretal amount is too high" },
          { id: "b", text: "If the decree is a complete nullity on its face due to inherent lack of subject-matter jurisdiction" },
          { id: "c", text: "If the defendant was not happy with the trial advocate" },
          { id: "d", text: "If the trial was delayed for more than five years" }
        ],
        correctOptionId: "b",
        explanation: "As established in Vasudev Dhanjibhai Modi, an executing or appellate court must take the decree as it stands and cannot go behind it, unless the decree is a total nullity due to an inherent lack of subject-matter jurisdiction."
      },
      {
        id: "mcq-4-10",
        question: "If an appellate court remands a case to the trial court for a fresh trial under Order 41 Rule 23, it is called a:",
        options: [
          { id: "a", text: "Reference" },
          { id: "b", text: "Review" },
          { id: "c", text: "Remand" },
          { id: "d", text: "Revision" }
        ],
        correctOptionId: "c",
        explanation: "A remand is an order by the appellate court sending the case back to the trial court for further proceedings or a fresh trial under Order 41 Rule 23 or 23A."
      }
    ]
  },
  {
    id: "chapter-5",
    title: "Chapter 5: CPC - Reference, Review and Revision",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the three specialized statutory methods of seeking relief from a court's decision under the CPC: Reference (Section 113), Review (Section 114), and Revision (Section 115). It details when a subordinate court can refer a legal question of doubt to the High Court Division, when a court can correct its own patent errors through review, and how the High Court Division or District Judge's Court exercises oversight to correct jurisdictional errors where no appeal lies.",
    studyStrategy: "For BJS and Bar Council examinations, memorize the differences between Appeal, Reference, Review, and Revision. Understand the strict jurisdictional grounds of Section 115 (Revision) and the exact three grounds for Review in Order 47 Rule 1. Focus on the golden rules: (1) An executing/revisional court cannot go behind a decree, (2) An appeal is a rehearing of facts and law, but a revision is strictly about correcting jurisdictional error, and (3) A review is decided by the very same court that passed the order, whereas appeals and revisions go to superior courts.",
    sections: [
      {
        sectionNo: "Section 113",
        title: "Reference",
        statutoryText: "Subject to such conditions and limitations as may be prescribed, any Court may state a case and refer the same for the opinion of the High Court Division, and the High Court Division may make such order thereon as it thinks fit:\nProvided that where the Court is satisfied that a case pending before it involves a question as to the validity of any Act, Ordinance or Regulation... the Court shall state a case setting forth its doubts and refer the same for the opinion of the High Court Division.",
        simplifiedExplanation: "Reference is a procedure where a subordinate civil court, having a reasonable doubt on a question of law, sends the case to the High Court Division for its authoritative opinion. This prevents subordinate courts from inadvertently holding a statute invalid or committing serious legal blunders.",
        elements: [
          "Who Can Refer: Only a court can make a reference (suo motu or on application). A litigant cannot file a 'reference' directly in the High Court; they can only petition the trial judge to make one.",
          "Grounds for Reference: (1) A question of law or usage having the force of law arises, (2) The referring court has a reasonable doubt on that question, and (3) The question involves the validity of an Act, Ordinance, or Regulation.",
          "Procedural Rule (Order 46): The referring court states the facts of the case, its own opinion, and the exact question of doubt. It then stays the case pending the High Court Division's ruling."
        ]
      },
      {
        sectionNo: "Section 114",
        title: "Review",
        statutoryText: "Subject as aforesaid, any person considering himself aggrieved—\n(a) by a decree or order from which an appeal is allowed by this Code, but from which no appeal has been preferred,\n(b) by a decree or order from which no appeal is allowed by this Code, or\n(c) by a decision on a reference from a Court of Small Causes,\nmay apply for a review of judgment to the Court which passed the decree or made the order, and the Court may make such order thereon as it thinks fit.",
        simplifiedExplanation: "Review is the process where a party asks the exact same judge who passed an order or decree to look at it again and correct a patent error. It is based on the idea that if a judge has made an obvious mistake, they should have the opportunity to fix it themselves without forcing the parties to go to an appellate court.",
        elements: [
          "Three Strict Grounds (Order 47 Rule 1): (1) Discovery of new and important matter or evidence which could not be produced at the trial despite due diligence, (2) A mistake or error apparent on the face of the record, or (3) Any other sufficient reason (which must be analogous to the first two grounds).",
          "Forum: A review petition must be filed in the very same court that passed the impugned judgment or decree.",
          "Bar on Review: If an appeal has already been preferred and is pending, no review can be applied for. However, if a review is filed first, and then an appeal is preferred, the court can still hear the review."
        ]
      },
      {
        sectionNo: "Section 115",
        title: "Revision",
        statutoryText: "(1) The High Court Division may call for the record of any case which has been decided by any Court subordinate to it and in which no appeal lies...\n(2) The District Judge may call for the record of any case decided by any Court subordinate to him in which no appeal lies [Note: Representing the concurrent/delegated revisional jurisdiction in Bangladesh].",
        simplifiedExplanation: "Revision is a superintending power vested in the High Court Division and District Courts. It allows them to call for the records of any lower court decision where no appeal lies, to ensure the lower court stayed within its legal boundaries. Unlike an appeal (which re-examines the whole case on merits), a revision is strictly focused on correcting errors of jurisdiction.",
        elements: [
          "Strictly Jurisdictional: Revisional power can only be exercised on three grounds: (1) The lower court exercised a jurisdiction not vested in it by law, (2) The lower court failed to exercise a jurisdiction so vested, or (3) The lower court acted illegally or with material irregularity in the exercise of its jurisdiction.",
          "No Appeal Lies: Revision is only maintainable if there is no statutory right of appeal available against the decided order or decree.",
          "Scope of Facts: A revisional court will not interfere with findings of fact made by lower courts unless those findings are completely perverse, arbitrary, or based on no evidence at all."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Abdul Gani v. Md. Idris",
        citation: "38 DLR 140",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "In an eviction and title dispute, the lower appellate court reversed the trial judge's findings of fact regarding physical possession. The petitioner filed a civil revision under Section 115, asking the High Court Division to re-weigh the witnesses' testimonies.",
        held: "The High Court Division held that a revisional court is not a court of appeal and has no jurisdiction to re-evaluate oral or documentary evidence to substitute its own findings of fact for those of the lower courts, unless the lower court's finding is perverse, arbitrary, or based on a material misreading of evidence causing a failure of justice.",
        significance: "Established the fundamental rule that revision under Section 115 is strictly restricted to jurisdictional and legal errors and is not a second appeal on facts."
      },
      {
        title: "Government of Bangladesh v. Sree Sree Hari Sen",
        citation: "50 DLR (AD) 168",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The government, dissatisfied with a final judgment delivered in a complex land acquisition appeal, filed a review application. The application sought to re-argue the entire case on the merits, raising the same legal and factual arguments that had been rejected in the main appeal.",
        held: "The Appellate Division rejected the application, holding that a review is not a routine second hearing or an 'appeal in disguise.' A review can only be granted on the strict grounds listed in Order 47 Rule 1. It cannot be used to re-agitate issues that have already been fully debated and decided on merits.",
        significance: "The leading Bangladesh authority on the strict boundaries of review, emphasizing that a review cannot be treated as an appeal."
      },
      {
        title: "Anwara Begum v. Shahabuddin",
        citation: "42 DLR 188",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "A subordinate civil court passed an interlocutory order in a partition suit in flagrant disregard of express statutory procedures, and no appeal was permitted under the CPC against that order. The aggrieved party petitioned for civil revision.",
        held: "The High Court Division held that a 'material irregularity' or 'illegal exercise of jurisdiction' under Section 115 is established when a subordinate court acts in direct contravention of an express statutory rule or established judicial procedures. Such an order is void and must be set aside in revision.",
        significance: "Clarifies what constitutes a 'material irregularity' or 'illegal exercise' under the third limb of Section 115."
      }
    ],
    maxims: [
      {
        maxim: "Interest reipublicae ut sit finis litium",
        translation: "It is in the interest of the state that there be an end to litigation.",
        application: "Section 114 & 115. Explains why review and revision are highly restricted and cannot be used as automatic second hearings, preventing endless court battles."
      },
      {
        maxim: "Errare humanum est, perseverare autem diabolicum",
        translation: "To err is human, but to persist in error is diabolical.",
        application: "Section 114. The basis of review, allowing a judge to graciously correct their own patent, obvious mistakes apparent on the face of the record."
      },
      {
        maxim: "Abundans cautela non nocet",
        translation: "Abundant caution does no harm.",
        application: "Section 113. Explains the purpose of Reference, where a subordinate court, out of caution, refers a doubtful legal question of constitutional validity to the High Court Division."
      }
    ],
    mcqs: [
      {
        id: "mcq-5-1",
        question: "Under Section 113 of the CPC, who has the authority to refer a case to the High Court Division?",
        options: [
          { id: "a", text: "The plaintiff or defendant directly" },
          { id: "b", text: "The advocate representing the parties" },
          { id: "c", text: "A subordinate civil court pending a case before it" },
          { id: "d", text: "The local land revenue officer" }
        ],
        correctOptionId: "c",
        explanation: "Under Section 113, only a subordinate civil court has the authority to state a case and refer it for the opinion of the High Court Division."
      },
      {
        id: "mcq-5-2",
        question: "The procedural rules governing Reference and Review are located in which Orders of the CPC respectively?",
        options: [
          { id: "a", text: "Order 39 and Order 41" },
          { id: "b", text: "Order 46 and Order 47" },
          { id: "c", text: "Order 41 and Order 43" },
          { id: "d", text: "Order 21 and Order 32" }
        ],
        correctOptionId: "b",
        explanation: "Order 46 of the CPC contains the rules for Reference, and Order 47 contains the rules for Review."
      },
      {
        id: "mcq-5-3",
        question: "Which of the following is NOT a valid ground for Review under Order 47, Rule 1 of the CPC?",
        options: [
          { id: "a", text: "Discovery of new and important matter or evidence which could not be produced despite due diligence" },
          { id: "b", text: "A mistake or error apparent on the face of the record" },
          { id: "c", text: "The fact that the aggrieved party has hired a more senior advocate" },
          { id: "d", text: "Any other sufficient reason analogous to the statutory grounds" }
        ],
        correctOptionId: "c",
        explanation: "Hiring a new or senior advocate is not a legal ground for review. The three statutory grounds are discovery of new evidence, error apparent on the face of the record, and other sufficient analogous reasons."
      },
      {
        id: "mcq-5-4",
        question: "A review petition under Section 114 of the CPC must be filed in:",
        options: [
          { id: "a", text: "The High Court Division" },
          { id: "b", text: "The Court of District Judge only" },
          { id: "c", text: "The very same Court which passed the decree or order" },
          { id: "d", text: "The Supreme Court, Appellate Division" }
        ],
        correctOptionId: "c",
        explanation: "Section 114 explicitly states that an application for review must be made to 'the Court which passed the decree or made the order.'"
      },
      {
        id: "mcq-5-5",
        question: "In the landmark case of Government of Bangladesh v. Sree Sree Hari Sen (50 DLR (AD) 168), the Appellate Division held that review:",
        options: [
          { id: "a", text: "Is an automatic right of rehearing on merits" },
          { id: "b", text: "Cannot be treated as an 'appeal in disguise' to re-agitate decided issues" },
          { id: "c", text: "Can only be filed by the state, not by private litigants" },
          { id: "d", text: "Is decided by a newly appointed jury panel" }
        ],
        correctOptionId: "b",
        explanation: "The Supreme Court of Bangladesh in Sree Sree Hari Sen held that review is a highly restricted remedy and cannot be treated as an appeal in disguise to re-argue already decided points."
      },
      {
        id: "mcq-5-6",
        question: "Under Section 115 of the CPC, revisional jurisdiction is strictly limited to correcting:",
        options: [
          { id: "a", text: "Clerical typing errors in the plaint" },
          { id: "b", text: "Errors of facts and evidence" },
          { id: "c", text: "Jurisdictional errors or material irregularities" },
          { id: "d", text: "The amount of court-fees paid by the plaintiff" }
        ],
        correctOptionId: "c",
        explanation: "Revision under Section 115 is strictly limited to correcting errors of jurisdiction (acting without jurisdiction, failing to exercise jurisdiction, or acting with material irregularity/illegality)."
      },
      {
        id: "mcq-5-7",
        question: "In the case of Abdul Gani v. Md. Idris (38 DLR 140), the High Court Division ruled that in civil revision, the court:",
        options: [
          { id: "a", text: "Can freely re-appreciate witnesses' oral testimonies" },
          { id: "b", text: "Is not a court of appeal and cannot re-evaluate evidence unless the lower court's finding is perverse or based on no evidence" },
          { id: "c", text: "Can draft a new plaint for the plaintiff" },
          { id: "d", text: "Must refer the entire file to the Ministry of Law" }
        ],
        correctOptionId: "b",
        explanation: "The court held that a revisional court is not a court of appeal and cannot re-appreciate evidence to substitute its own findings of fact unless the lower court's finding is perverse or completely arbitrary."
      },
      {
        id: "mcq-5-8",
        question: "Under the provisions of Section 115 of the CPC in Bangladesh, a civil revision petition is maintainable ONLY if:",
        options: [
          { id: "a", text: "The case value exceeds one million Taka" },
          { id: "b", text: "The trial court has delayed the case for more than six months" },
          { id: "c", text: "No appeal lies against the decided order or decree" },
          { id: "d", text: "Both parties consent to revision in writing" }
        ],
        correctOptionId: "c",
        explanation: "Section 115 explicitly states that revision is only available in cases decided by subordinate courts 'in which no appeal lies.'"
      },
      {
        id: "mcq-5-9",
        question: "Under the CPC, an 'error apparent on the face of the record' for the purpose of review means:",
        options: [
          { id: "a", text: "An error which is self-evident and does not require elaborate arguments to establish" },
          { id: "b", text: "An error which can only be found after a complete retrial of the case" },
          { id: "c", text: "A subjective disagreement between the trial judge and the advocate" },
          { id: "d", text: "An error in the spelling of the advocate's name" }
        ],
        correctOptionId: "a",
        explanation: "An error apparent on the face of the record must be self-evident, patent, and obvious without requiring a long, complex process of reasoning or elaborate legal argument."
      },
      {
        id: "mcq-5-10",
        question: "If a civil revision is filed in Bangladesh against an order passed by a Joint District Judge, who has revisional jurisdiction under Section 115?",
        options: [
          { id: "a", text: "The Assistant Judge's Court" },
          { id: "b", text: "The High Court Division or the District Judge's Court, depending on the nature of the order and delegation" },
          { id: "c", text: "The Supreme Court, Appellate Division only" },
          { id: "d", text: "The Union Parishad Chairman" }
        ],
        correctOptionId: "b",
        explanation: "Revisional jurisdiction in Bangladesh is distributed between the High Court Division and the District Judge's Court based on statutory delegations under Section 115."
      }
    ]
  },
  {
    id: "chapter-6",
    title: "Chapter 6: CPC - Pleadings, Plaint & Written Statement",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the rules governing written submissions in civil suits: pleadings in general (Order 6), the plaint (Order 7), and the written statement (Order 8). It examines the fundamental principles of pleading facts and not law, the wide yet structured power of the court to allow amendments (Order 6, Rule 17), the mandatory duty of the court to reject flawed plaints (Order 7, Rule 11), and the strict rules for specific denials, set-offs, and counter-claims in written statements.",
    studyStrategy: "For the Bar Council and BJS exams, pay special attention to the four fundamental rules of pleading under Order 6 Rule 2, the exact conditions for rejecting a plaint under Order 7 Rule 11, and the strict rules on amendment under Order 6 Rule 17. Remember that rejection of a plaint is a 'deemed decree' under Section 2(2) and is appealable, whereas return of a plaint is merely an appealable order under Order 43. Master the rule of specific denial in written statements—evasive denial is deemed an admission.",
    sections: [
      {
        sectionNo: "Order 6, Rule 1 & 2",
        title: "Pleadings & Fundamental Rules",
        statutoryText: "(1) 'Pleading' shall mean plaint or written statement.\n(2) Every pleading shall contain, and contain only, a statement in a concise form of the material facts on which the party pleading relies for his claim or defence, as the case may be, but not the evidence by which they are to be proved.",
        simplifiedExplanation: "Pleadings are the formal documents where parties state their respective cases. Plaint is the plaintiff's pleading, and Written Statement is the defendant's. Order 6 Rule 2 establishes four golden rules of pleading: (1) Plead facts, not law, (2) Plead material facts only (facta probanda), (3) Do not plead evidence (facta probantia), and (4) Be concise.",
        elements: [
          "Plead Facts, Not Law: Parties must only state the facts of their case. It is the court's job to apply the correct law to those facts. Referencing statutes or legal arguments is not permitted in pleadings.",
          "Material Facts (Facta Probanda): Only facts that are absolutely necessary to establish the cause of action or defense must be pleaded. Omitting a material fact can result in dismissal of the claim.",
          "No Evidence (Facta Probantia): Pleadings must not contain the evidence or details of how those facts will be proved in court. Evidence belongs in the trial stage, not the pleadings."
        ]
      },
      {
        sectionNo: "Order 6, Rule 17",
        title: "Amendment of Pleadings",
        statutoryText: "The Court may at any stage of the proceedings allow either party to alter or amend his pleadings in such manner and on such terms as may be just, and all such amendments shall be made as may be necessary for the purpose of determining the real questions in controversy between the parties.",
        simplifiedExplanation: "The court has a highly discretionary power to allow either party to amend their pleadings at any stage of the suit before the final decree is signed. The primary goal is to ensure the real, substantive dispute between the parties is fully resolved, avoiding a multiplicity of proceedings. However, this power is restricted to prevent injustice to the other party.",
        elements: [
          "At Any Stage: Amendments can be made before, during, or even after the trial, including in the appellate or revisional courts, as long as the final decree is not signed.",
          "Real Controversy Test: The court must ask whether the proposed amendment is necessary to determine the real, central dispute between the parties.",
          "Strict Limitations: Amendments will generally be refused if they: (1) Introduce a completely new and inconsistent cause of action, (2) Substantially alter the character or subject matter of the suit, or (3) Take away a valuable vested right that has accrued to the opposite party through the lapse of time (limitation)."
        ]
      },
      {
        sectionNo: "Order 7, Rule 11",
        title: "Rejection of Plaint",
        statutoryText: "The plaint shall be rejected in the following cases:-\n(a) where it does not disclose a cause of action:\n(b) where the relief claimed is undervalued, and the plaintiff, on being required by the Court to correct the valuation within a time to be fixed by the Court, fails to do so:\n(c) where the relief claimed is properly valued, but the plaint is written upon paper insufficiently stamped, and the plaintiff, on being required by the Court to supply the requisite stamp-paper within a time to be fixed by the Court, fails to do so:\n(d) where the suit appears from the statement in the plaint to be barred by any law.",
        simplifiedExplanation: "Rejection of a plaint is a mandatory statutory mechanism where the court terminates the suit at the very outset because of a fundamental, irremediable defect in the plaint. Because rejection under Order 7 Rule 11 has the legal status of a 'deemed decree' under Section 2(2), it can be appealed directly, or the plaintiff can file a fresh suit under Order 7 Rule 13.",
        elements: [
          "Four Mandatory Grounds: The court must reject the plaint if: (a) no cause of action is disclosed, (b) valuation is undervalued and not corrected, (c) court-fees are insufficiently paid and not corrected, or (d) the suit is clearly barred by any law (e.g. limitation, res judicata).",
          "Read as a Whole: The court must read the plaint as a whole and assume all its allegations to be true. The court cannot look at the written statement, defenses, or documents filed by the defendant when deciding an application for rejection of the plaint.",
          "Distinguished from Return of Plaint: Returning a plaint (Order 7 Rule 10) occurs when the court lacks territorial or pecuniary jurisdiction, and the plaint is handed back to be filed in the correct court. Rejecting a plaint terminates the suit as a decree."
        ]
      },
      {
        sectionNo: "Order 8, Rule 1, 5 & 6",
        title: "Written Statement, Denial & Set-Off",
        statutoryText: "(1) The defendant shall, at or before the first hearing or within such time as the Court may permit, present a written statement of his defence...\n(5) Every allegation of fact in the plaint, if not denied specifically or by necessary implication... shall be taken to be admitted...",
        simplifiedExplanation: "The Written Statement is the defendant's formal answer to the plaintiff's suit. The defendant must specifically address each allegation of fact in the plaint. Order 8 Rule 5 contains a critical rule: any factual allegation in the plaint that is not specifically or by necessary implication denied in the written statement is deemed to be admitted by the defendant.",
        elements: [
          "Strict Timelines: In Bangladesh, a written statement must be filed within 30 days of service of summons, extendable by the court up to a maximum of 60 days total. No further extensions are permitted.",
          "Specific vs Evasive Denial: Denials must be specific, direct, and unambiguous. A general denial, or an evasive statement like 'the plaint claims are not admitted,' is not a legal denial and is treated as an admission of fact.",
          "Set-Off (Order 8 Rule 6): A set-off is a statutory defense where the defendant claims a mutual debt from the plaintiff in the same suit, provided the debt is an ascertained sum of money legally recoverable and falls within the court's pecuniary jurisdiction."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Abed Ali v. Jadav Chandra",
        citation: "55 DLR (AD) 10",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "In a suit for declaration of title, the plaintiff applied to amend the plaint under Order 6 Rule 17 during the trial to alter the description of the boundary of the suit land and add a claim for recovery of possession. The defendant objected, arguing that the amendment would introduce a completely new case and alter the character of the suit.",
        held: "The Appellate Division held that amendments should be allowed liberally at any stage of the proceedings to determine the real question in controversy and avoid a multiplicity of suits, provided it does not cause injustice to the other side. An amendment that merely seeks to clarify boundaries or add a consequential relief (like recovery of possession in a title suit) does not alter the character of the suit and should be allowed.",
        significance: "Established the liberal principles of allowing amendments to determine the real controversy without altering the suit's character."
      },
      {
        title: "Md. Solaiman v. Md. Ibrahim",
        citation: "52 DLR (AD) 112",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The defendant filed an application under Order 7 Rule 11 of the CPC to reject the plaint, asserting that the suit was barred by limitation. The trial court rejected the plaint by relying heavily on the documents and defenses presented by the defendant in their written statement.",
        held: "The Appellate Division set aside the rejection, holding that for the purpose of rejection of a plaint under Order 7 Rule 11, the court must confine itself strictly to the allegations made in the plaint. The allegations in the plaint must be taken as true, and the court cannot look at the written statement or defense documents to decide if a cause of action exists or if the suit is barred by law.",
        significance: "The definitive authority that rejection of a plaint must be decided solely based on the plaint itself, not the defense."
      },
      {
        title: "Md. Salim v. Md. Yusuf",
        citation: "48 DLR 122",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "In a suit for partition, the defendant filed a written statement stating generally that 'the plaint allegations are denied' and 'the suit is not maintainable,' without specifically denying the plaintiff's co-ownership of the property or their specific share.",
        held: "The High Court Division held that under Order 8 Rules 3 and 5, a denial must be specific, detailed, and non-evasive. A general denial or a mere plea of non-maintainability does not constitute a denial in law. Consequently, the trial court was correct in treating the plaintiff's ownership and shares as admitted facts.",
        significance: "Reaffirms the strict procedural rule that general or evasive denials in a written statement are deemed admissions."
      }
    ],
    maxims: [
      {
        maxim: "Quod non apparet non est",
        translation: "That which does not appear does not exist.",
        application: "Order 6 Rule 2. Facts which are not pleaded in the plaint or written statement cannot be proved by evidence; the court cannot make out a case for a party that they did not plead themselves."
      },
      {
        maxim: "Verba fortius accipiuntur contra proferentem",
        translation: "The words of a document are to be taken most strongly against the person who puts them forward.",
        application: "Rules of Pleading. If a party's pleading is ambiguous, vague, or self-contradictory, the court will interpret it against the party who drafted and filed it."
      },
      {
        maxim: "Allegans contraria non est audiendus",
        translation: "He is not to be heard who alleges things contradictory to each other.",
        application: "Order 6 Rule 17. A party will generally not be permitted to amend their pleadings to introduce a claim or defense that is completely contradictory or mutually destructive to their original stance."
      }
    ],
    mcqs: [
      {
        id: "mcq-6-1",
        question: "Under Order 6, Rule 1 of the Code of Civil Procedure, 'pleading' is defined as:",
        options: [
          { id: "a", text: "The plaint only" },
          { id: "b", text: "The written statement only" },
          { id: "c", text: "The plaint or written statement" },
          { id: "d", text: "The oral arguments made by the advocates" }
        ],
        correctOptionId: "c",
        explanation: "Order 6, Rule 1 states: 'Pleading shall mean plaint or written statement.'"
      },
      {
        id: "mcq-6-2",
        question: "Which of the following is NOT one of the fundamental rules of pleading under Order 6, Rule 2?",
        options: [
          { id: "a", text: "Plead facts, not law" },
          { id: "b", text: "Plead material facts only" },
          { id: "c", text: "Plead the evidence by which facts are to be proved" },
          { id: "d", text: "Plead in a concise and clear form" }
        ],
        correctOptionId: "c",
        explanation: "Order 6, Rule 2 explicitly prohibits pleading evidence, stating that pleadings must contain material facts, 'but not the evidence by which they are to be proved.'"
      },
      {
        id: "mcq-6-3",
        question: "An application for amendment of pleadings under Order 6, Rule 17 of the CPC may be allowed by the court:",
        options: [
          { id: "a", text: "Only before the defendant files the written statement" },
          { id: "b", text: "Only before the framing of issues" },
          { id: "c", text: "At any stage of the proceedings before the final decree is signed" },
          { id: "d", text: "Only during the first appeal" }
        ],
        correctOptionId: "c",
        explanation: "Order 6, Rule 17 states that the court may allow amendments 'at any stage of the proceedings,' which includes during trial, appeal, or revision prior to signing the final decree."
      },
      {
        id: "mcq-6-4",
        question: "Under Order 7, Rule 11 of the CPC, a plaint shall be rejected on which of the following grounds?",
        options: [
          { id: "a", text: "Where the suit is filed in the wrong territorial jurisdiction" },
          { id: "b", text: "Where the plaint does not disclose a cause of action" },
          { id: "c", text: "Where the plaintiff fails to produce their witnesses on time" },
          { id: "d", text: "Where the defendant's advocate is absent" }
        ],
        correctOptionId: "b",
        explanation: "Under Order 7, Rule 11(a), a plaint must be rejected if it does not disclose a cause of action."
      },
      {
        id: "mcq-6-5",
        question: "Rejection of a plaint under Order 7, Rule 11 of the CPC has the legal status of:",
        options: [
          { id: "a", text: "An interlocutory order" },
          { id: "b", text: "A deemed decree under Section 2(2), which is appealable" },
          { id: "c", text: "An appealable order under Order 43" },
          { id: "d", text: "A preliminary finding with no right of appeal" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 2(2) of the CPC, the definition of a 'decree' is deemed to include the rejection of a plaint, making it appealable under Section 96."
      },
      {
        id: "mcq-6-6",
        question: "When deciding an application for rejection of a plaint under Order 7, Rule 11, the court is legally permitted to look at:",
        options: [
          { id: "a", text: "The plaint and the written statement together" },
          { id: "b", text: "The written statement and the defendant's affidavit" },
          { id: "c", text: "The allegations made in the plaint only" },
          { id: "d", text: "The oral arguments of the defendant's witnesses" }
        ],
        correctOptionId: "c",
        explanation: "As confirmed in Md. Solaiman v. Md. Ibrahim (52 DLR (AD) 112), the court must confine itself strictly to the plaint, assuming all allegations in it are true."
      },
      {
        id: "mcq-6-7",
        question: "Under Order 8, Rule 5 of the CPC, if an allegation of fact in the plaint is not denied specifically in the written statement, it:",
        options: [
          { id: "a", text: "Must be proved by the plaintiff by bringing oral witnesses" },
          { id: "b", text: "Is deemed to be admitted by the defendant" },
          { id: "c", text: "Is deemed to be denied automatically" },
          { id: "d", text: "Results in immediate dismissal of the suit" }
        ],
        correctOptionId: "b",
        explanation: "Order 8, Rule 5 states that every allegation of fact in the plaint, if not denied specifically or by necessary implication, shall be taken to be admitted."
      },
      {
        id: "mcq-6-8",
        question: "Under Bangladesh civil procedure, the maximum time limit for filing a written statement after receiving summons is:",
        options: [
          { id: "a", text: "30 days, extendable up to a maximum of 60 days total by the court" },
          { id: "b", text: "90 days with no possibility of extension" },
          { id: "c", text: "15 days from the date of appearance" },
          { id: "d", text: "At any time before the final argument" }
        ],
        correctOptionId: "a",
        explanation: "Under Order 8, Rule 1 CPC in Bangladesh, the written statement must be filed within 30 days, extendable up to a maximum of 60 days total. No further extension can be granted."
      },
      {
        id: "mcq-6-9",
        question: "If a plaint is rejected under Order 7, Rule 11 of the CPC, what remedy does the plaintiff have under Order 7, Rule 13?",
        options: [
          { id: "a", text: "They are forever barred from filing any suit on the same cause of action" },
          { id: "b", text: "They can apply for a civil revision only" },
          { id: "c", text: "They are not precluded from presenting a fresh plaint on the same cause of action" },
          { id: "d", text: "They must file a writ petition in the High Court Division" }
        ],
        correctOptionId: "c",
        explanation: "Order 7, Rule 13 states that the rejection of the plaint on any of the grounds hereinbefore mentioned shall not of its own force preclude the plaintiff from presenting a fresh plaint in respect of the same cause of action."
      },
      {
        id: "mcq-6-10",
        question: "A plea of 'set-off' under Order 8, Rule 6 can be claimed by the defendant only if the claimed amount is:",
        options: [
          { id: "a", text: "An unliquidated damages claim" },
          { id: "b", text: "An ascertained sum of money legally recoverable from the plaintiff" },
          { id: "c", text: "A future hypothetical debt" },
          { id: "d", text: "Based on a foreign contract under different laws" }
        ],
        correctOptionId: "b",
        explanation: "Order 8, Rule 6 states that a set-off is only permissible where the suit is for the recovery of money and the defendant claims an ascertained sum of money legally recoverable from the plaintiff."
      }
    ]
  },
  {
    id: "chapter-7",
    title: "Chapter 7: CPC - Injunctions, Receivers & Inherent Powers",
    subject: "Code of Civil Procedure, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the crucial protective and restorative powers of civil courts under the CPC: Temporary Injunctions (Order 39), the Appointment of Receivers (Order 40), and the Inherent Powers of the Court (Section 151). It analyzes the tripartite test of temporary injunctions, the discretionary appointment of receivers as officers of the court, and how the court's inherent powers serve to prevent abuse of the judicial process and achieve substantive justice when there is no express statutory provision.",
    studyStrategy: "For the Bar Council and BJS exams, master the three essential conditions for granting a temporary injunction: (1) prima facie case, (2) balance of convenience, and (3) irreparable loss. Be prepared to explain the legal difference between a temporary injunction and status quo, the penalties for violating an injunction under Order 39 Rule 2(3), the 5 principles for appointing a receiver, and the limitations of Section 151 (which cannot be used to override express statutory prohibitions).",
    sections: [
      {
        sectionNo: "Order 39, Rules 1 & 2",
        title: "Temporary Injunctions & Ad-Interim Relief",
        statutoryText: "Rule 1: Where in any suit it is proved by affidavit or otherwise- (a) that any property in dispute in a suit is in danger of being wasted, damaged or alienated by any party to the suit, or wrongfully sold in execution of a decree... the Court may by order grant a temporary injunction...\nRule 2: In any suit for restraining the defendant from committing a breach of contract or other injury of any kind... the plaintiff may, at any time after the commencement of the suit... apply to the Court for a temporary injunction...",
        simplifiedExplanation: "A temporary injunction is an interim order passed by the court to preserve the status quo of the disputed property until the final disposal of the suit. The power to grant an injunction is discretionary and equitable. In Bangladesh, courts strictly apply the 'Tripartite Test' before granting this relief.",
        elements: [
          "Prima Facie Case: The plaintiff must show a serious question to be tried, with a probability of succeeding. It does not require proving the case to the hilt, but establishing a bona fide, arguable claim.",
          "Balance of Convenience: The court must weigh the relative mischief or inconvenience likely to arise from withholding the injunction against that of granting it. The balance must tip in favor of the plaintiff.",
          "Irreparable Injury: The plaintiff must demonstrate that if the injunction is refused, they will suffer an injury that is substantial, certain, and cannot be adequately compensated by money or damages.",
          "Disobedience and Penalties: Under Rule 2(3), if a party violates an injunction, the court can order their property to be attached and sentence them to civil imprisonment for a term not exceeding 6 months."
        ]
      },
      {
        sectionNo: "Order 40, Rule 1",
        title: "Appointment of Receivers",
        statutoryText: "Where it appears to the Court to be just and convenient, the Court may by order appoint a receiver of any property, whether before or after decree; remove any person from the possession or custody of the property; commit the same to the possession, custody or management of the receiver...",
        simplifiedExplanation: "A receiver is an impartial, disinterested person appointed by the court to protect, manage, and preserve property in dispute during the pendency of a suit. A receiver is considered an officer of the court, and the property in their hands is in custodia legis (in the custody of the law).",
        elements: [
          "Just and Convenient Test: The appointment of a receiver is one of the harshest remedies in civil law, as it deprives a party of possession before trial. Hence, the court only appoints one if there is strong evidence of waste, dissipation, or active danger to the property.",
          "The Five Principles (Panchsheel): (1) Appointment is highly discretionary, (2) Plaintiff must show a strong prima facie title, (3) Plaintiff must show an imminent danger of loss/waste, (4) Court will not appoint if it deprives an innocent third party of possession, (5) Receiver must be a neutral party.",
          "Duties and Liabilities: Under Rule 3, a receiver must file regular accounts, manage the property with the care of an ordinary prudent owner, and is personally liable for any willful neglect or default resulting in loss."
        ]
      },
      {
        sectionNo: "Section 151",
        title: "Inherent Powers of the Court",
        statutoryText: "Nothing in this Code shall be deemed to limit or otherwise affect the inherent power of the Court to make such orders as may be necessary for the ends of justice or to prevent abuse of the process of the Court.",
        simplifiedExplanation: "Section 151 does not confer any new power; it merely recognizes and declares that civil courts possess inherent, natural authority to do complete justice. Since no code can foresee all possible procedural issues, the court can formulate new procedures or pass orders to meet the ends of justice, provided they do not conflict with existing statutory laws.",
        elements: [
          "Ends of Justice: The first branch of Section 151 is used when there is no specific procedure provided in the CPC to meet a particular situation, enabling the court to pass orders to do substantive justice.",
          "Prevent Abuse of Process: The second branch allows the court to prevent parties from playing fraud on the court, initiating vexatious litigation, or using technicalities of the law to defeat justice.",
          "Strict Statutory Boundaries: Inherent powers are residuary and cannot be exercised: (1) to override or bypass an express provision of the CPC, (2) to create new substantive rights, or (3) to grant a remedy that is specifically barred by another law (such as the Limitation Act)."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Safiuddin v. Fazal Karim",
        citation: "22 DLR 140",
        court: "High Court Division of Bangladesh",
        facts: "The plaintiff filed a suit for declaration of title and applied for a temporary injunction under Order 39 Rule 1 to restrain the defendant from constructing a permanent building on the disputed land. The trial court refused the injunction, stating that the plaintiff could be compensated in damages if they won.",
        held: "The High Court Division held that allowing a party to alter the nature of the suit property (by constructing a permanent building) during the pendency of the suit causes irreparable injury that cannot be adequately compensated in money. Restraining such alteration is necessary to prevent a multiplicity of suits.",
        significance: "A landmark authority on what constitutes 'irreparable injury' and why altering the nature of the suit property during litigation must be prevented."
      },
      {
        title: "Abdul Jalil v. Md. Solaiman",
        citation: "45 DLR (AD) 160",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff sought a temporary injunction. The trial court refused it, but the appellate court granted a status quo order without making specific findings regarding the tripartite test: prima facie case, balance of convenience, and irreparable injury.",
        held: "The Appellate Division held that the tripartite test is mandatory and must be strictly satisfied and recorded in writing before granting any temporary injunction or status quo order. An order of status quo cannot be passed as a matter of course without assessing these three key elements.",
        significance: "The absolute authority in Bangladesh reinforcing that injunctions and status quo orders cannot be granted without explicit, written findings on all three golden principles."
      },
      {
        title: "State v. Shafiullah",
        citation: "54 DLR (AD) 12",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The petitioner applied for an order under Section 151 CPC to set aside an ex-parte decree passed against them. The opposite party argued that since a specific remedy of filing an application under Order 9 Rule 13 existed, the court could not exercise its inherent powers under Section 151.",
        held: "The Appellate Division reaffirmed that where the CPC provides an express, specific remedy (such as Order 9 Rule 13 for setting aside an ex-parte decree), the court's inherent power under Section 151 cannot be invoked to bypass or substitute that statutory remedy.",
        significance: "Confirms that Section 151 is a residuary power and cannot be used as an alternative route when an express remedy is available in the Code."
      }
    ],
    maxims: [
      {
        maxim: "Actus curiae neminem gravabit",
        translation: "An act of the court shall prejudice no man.",
        application: "Section 151 Inherent Powers. If the court makes a procedural mistake or passes an erroneous order that causes injury to a party, the court has the inherent power and duty to correct its own mistake and restore the injured party to their original position (restitution)."
      },
      {
        maxim: "He who comes to equity must come with clean hands",
        translation: "A person seeking equitable relief must have acted fairly and without fraud or dishonesty in the matter.",
        application: "Order 39 (Injunctions). A temporary injunction is an equitable remedy. If a plaintiff suppresses material facts, tells falsehoods in their plaint or affidavit, or acts dishonestly, the court will refuse the injunction solely on that ground, regardless of the merits."
      },
      {
        maxim: "Ubi jus ibi remedium",
        translation: "Where there is a right, there is a remedy.",
        application: "Section 151 CPC. If a legal right is infringed but the specific procedural steps are not fully detailed in the written code, Section 151 empowers the court to devise a suitable remedy or procedure to protect that right."
      }
    ],
    mcqs: [
      {
        id: "mcq-7-1",
        question: "Which of the following is NOT part of the classic 'tripartite test' used by civil courts in Bangladesh to decide a temporary injunction application under Order 39?",
        options: [
          { id: "a", text: "Prima facie case in favor of the applicant" },
          { id: "b", text: "Balance of convenience and inconvenience" },
          { id: "c", text: "Pecuniary solvency of the opposite party" },
          { id: "d", text: "Irreparable injury or loss to the applicant" }
        ],
        correctOptionId: "c",
        explanation: "The three mandatory conditions (tripartite test) are prima facie case, balance of convenience, and irreparable injury. The financial status or pecuniary solvency of the opposite party is not a core requirement of this test."
      },
      {
        id: "mcq-7-2",
        question: "Under Order 39, Rule 2(3) of the CPC, if a party disobeys or breaches an injunction order, what penalty can the court impose?",
        options: [
          { id: "a", text: "A criminal fine of up to 50,000 Taka only" },
          { id: "b", text: "Attachment of their property and civil imprisonment for up to 6 months" },
          { id: "c", text: "Immediate forfeiture of the suit property to the State" },
          { id: "d", text: "Permanent disbarment of their advocate" }
        ],
        correctOptionId: "b",
        explanation: "Order 39 Rule 2(3) allows the court to order the attachment of the property of the guilty person, and also commit them to civil prison for a term not exceeding 6 months."
      },
      {
        id: "mcq-7-3",
        question: "According to the Supreme Court of Bangladesh decision in Abdul Jalil v. Md. Solaiman (45 DLR (AD) 160), a court granting a status quo order must:",
        options: [
          { id: "a", text: "Only do so with the written consent of both parties" },
          { id: "b", text: "Explicitly record findings on all three components of the tripartite test" },
          { id: "c", text: "Refer the matter to the High Court Division for final approval" },
          { id: "d", text: "Require the plaintiff to deposit 10% of the suit value in court" }
        ],
        correctOptionId: "b",
        explanation: "The Appellate Division held that the tripartite test is mandatory and must be strictly satisfied and recorded in writing for both status quo orders and temporary injunctions."
      },
      {
        id: "mcq-7-4",
        question: "The appointment of a receiver by a civil court under Order 40, Rule 1 is considered:",
        options: [
          { id: "a", text: "A matter of absolute right of the plaintiff" },
          { id: "b", text: "An automatic step taken in every title suit" },
          { id: "c", text: "A highly discretionary and harsh equitable remedy to preserve property" },
          { id: "d", text: "A criminal proceeding managed by the Executive Magistrate" }
        ],
        correctOptionId: "c",
        explanation: "Appointing a receiver is a harsh, discretionary equitable remedy because it deprives a party of possession before trial. It is only done when 'just and convenient' to prevent imminent waste or loss."
      },
      {
        id: "mcq-7-5",
        question: "A receiver appointed by the court under Order 40 of the CPC is legally considered as an officer of:",
        options: [
          { id: "a", text: "The plaintiff who nominated them" },
          { id: "b", text: "The defendant in possession" },
          { id: "c", text: "The Court, holding the property in custodia legis" },
          { id: "d", text: "The Ministry of Land" }
        ],
        correctOptionId: "c",
        explanation: "A receiver is an officer of the court. The property held by them is in the custody of the court (custodia legis), not of either party."
      },
      {
        id: "mcq-7-6",
        question: "Which of the following is a primary duty of a receiver under Order 40, Rule 3 of the CPC?",
        options: [
          { id: "a", text: "To advocate for the plaintiff's title in the suit" },
          { id: "b", text: "To submit accounts at such periods and in such form as the Court directs" },
          { id: "c", text: "To sell the property and distribute the money immediately" },
          { id: "d", text: "To arrest any person who enters the property" }
        ],
        correctOptionId: "b",
        explanation: "Order 40, Rule 3(a) dictates that every receiver must furnish such security as the court thinks fit, and keep and submit regular accounts of receipts and disbursements."
      },
      {
        id: "mcq-7-7",
        question: "Under Section 151 of the CPC, the court's 'inherent power' is used to:",
        options: [
          { id: "a", text: "Create new substantive laws and rights for citizens" },
          { id: "b", text: "Override explicit, clear provisions of the CPC" },
          { id: "c", text: "Do complete justice and prevent abuse of the process of the court" }
        ],
        correctOptionId: "c",
        explanation: "Section 151 states that inherent powers are exercised 'for the ends of justice' or 'to prevent abuse of the process of the Court' where no specific provision covers the situation."
      },
      {
        id: "mcq-7-8",
        question: "Inherent powers under Section 151 of the CPC CANNOT be exercised by a court if:",
        options: [
          { id: "a", text: "An ex-parte decree needs to be set aside" },
          { id: "b", text: "An express, specific statutory provision already covers the remedy or procedure" },
          { id: "c", text: "The suit has been pending for more than two years" },
          { id: "d", text: "The parties request the court to proceed in their absence" }
        ],
        correctOptionId: "b",
        explanation: "Inherent powers are residuary. They cannot be used to bypass, override, or substitute an express statutory provision or remedy provided in the Code."
      },
      {
        id: "mcq-7-9",
        question: "The legal maxim 'Actus curiae neminem gravabit' means:",
        options: [
          { id: "a", text: "The plaintiff must prove their case beyond reasonable doubt" },
          { id: "b", text: "An act of the court shall prejudice no man" },
          { id: "c", text: "Justice delayed is justice denied" },
          { id: "d", text: "A court has no power outside its physical territory" }
        ],
        correctOptionId: "b",
        explanation: "This maxim means 'an act of the court shall prejudice no man' and represents a core principle underlying the exercise of inherent powers under Section 151 to correct court-induced errors."
      },
      {
        id: "mcq-7-10",
        question: "If a court refuses to grant a temporary injunction under Order 39, Rules 1 or 2, the plaintiff's remedy is to file:",
        options: [
          { id: "a", text: "A civil revision under Section 115" },
          { id: "b", text: "A miscellaneous appeal under Section 104 and Order 43, Rule 1" },
          { id: "c", text: "A fresh suit for the same relief" },
          { id: "d", text: "An application for review under Section 114" }
        ],
        correctOptionId: "b",
        explanation: "An order rejecting or granting a temporary injunction is an appealable order under Order 43, Rule 1(r). Hence, the correct remedy is a miscellaneous appeal."
      }
    ]
  },
  {
    id: "chapter-8",
    title: "Chapter 8: Specific Relief Act - Possession & Specific Performance",
    subject: "The Specific Relief Act, 1877",
    isCompleted: true,
    quickSummary: "This chapter covers the recovery of possession of immovable property under Sections 8 and 9, and the specific performance of contracts under Sections 12, 21, and 21A of the Specific Relief Act, 1877. It details the crucial distinctions between title-based recovery and possessory suits, the core rules of specific performance, and the strict 2004 statutory amendments in Bangladesh requiring written, registered land contracts and mandatory balance deposits.",
    studyStrategy: "For BJS and Bar Council examinations, master the detailed distinction table between Section 8 (title suit) and Section 9 (possessory suit). Pay special attention to Section 9's limitations: 6-month filing window, double-rate bar against the government, half court fee, and absolute prohibition on appeals and reviews. For specific performance, memorize the conditions under Section 12, the barred contracts under Section 21, and the two-fold mandatory conditions of Section 21A (registration + remaining balance court deposit).",
    sections: [
      {
        sectionNo: "Sections 8 & 9",
        title: "Recovery of Possession of Immovable Property",
        statutoryText: "Section 8: A person entitled to the possession of specific immovable property may recover it in the manner prescribed by the Code of Civil Procedure.\nSection 9: If any person is dispossessed without his consent of immovable property otherwise than in due course of law, he or any person claiming through him may, by suit, recover possession thereof, notwithstanding any other title that may be set up in such suit.",
        simplifiedExplanation: "These sections provide two separate paths for recovering land possession. Section 8 is a title-based remedy where ownership must be proved. Section 9 is a fast-track, possessory-only remedy designed to prevent self-help and maintain peace, where only prior peaceful possession and illegal dispossession are considered—regardless of who holds the actual title.",
        elements: [
          "Section 8 (Title Suit): Requires proof of legal title (ownership). The limitation period is 12 years under Article 142 of the Limitation Act, and the court fee is ad valorem. A decree under Section 8 is fully appealable, reviewable, and can be filed against the Government.",
          "Section 9 (Possessory Suit): Title is completely irrelevant. The plaintiff only needs to prove prior peaceful possession and forcible, unlawful dispossession. Must be filed within 6 months of dispossession, uses half of the ad valorem court fee, and cannot be filed against the Government.",
          "Section 9 Remedies and Bar on Appeals: Under Section 9, clause 4, no appeal or review lies against any decree or order. The only judicial remedy is a civil revision under Section 115 CPC to the High Court Division, or filing a subsequent title suit under Section 8."
        ]
      },
      {
        sectionNo: "Sections 12 & 21",
        title: "Specific Performance of Contracts",
        statutoryText: "Section 12: Except as otherwise provided in this Chapter, the specific performance of any active contract may, in the discretion of the Court, be enforced- (a) when the act agreed to be done is in the performance of a trust; (b) when there exists no standard for ascertaining the actual damage... (c) when the act agreed to be done is such that pecuniary compensation... would not afford adequate relief...\nSection 21: The following contracts cannot be specifically enforced: (a) A contract for the non-performance of which compensation in money is an adequate relief; (b) A contract which runs into such minute or numerous details... that the Court cannot enforce specific performance...",
        simplifiedExplanation: "Specific performance is an equitable remedy where the court commands a party to perform their exact contractual duties. Under Section 12, there is a legal presumption that a breach of contract to transfer land cannot be adequately compensated with money, making specific performance the default remedy. Section 21 outlines contracts that are legally barred from specific performance, such as personal service agreements (e.g., singing or marrying) or those requiring continuous judicial supervision.",
        elements: [
          "Presumption of Uniqueness: Civil courts operate on the presumption that land is unique and monetary compensation is never an adequate substitute for its transfer.",
          "Personal Services Bar: Contracts depending on the personal volition, talent, or qualification of a party (such as a contract to write a book or paint a picture) cannot be specifically enforced.",
          "Continuous Court Supervision: If a contract requires ongoing, complex supervision over time (like a multi-year construction project), the court will refuse specific performance and award damages instead."
        ]
      },
      {
        sectionNo: "Section 21A",
        title: "Mandatory Registration & Deposit of Balance Consideration",
        statutoryText: "Notwithstanding anything contained in section 21, no suit for the specific performance of a contract for sale of immovable property shall be entertained unless- (a) the contract is in writing and registered under the Registration Act, 1908, and (b) the entire balance consideration of the contract is deposited in the court at the time of filing of the suit.",
        simplifiedExplanation: "Introduced by the Specific Relief (Amendment) Act, 2004 (effective from July 1, 2005) to eliminate widespread land-sale fraud, Section 21A sets up two strict, non-negotiable hurdles for any suit seeking specific performance of a land sale contract (Bainapatra). If either registration or the deposit is missing, the court cannot hear the case.",
        elements: [
          "Mandatory Registration: Oral or unregistered land contracts executed after July 1, 2005, cannot be specifically enforced under any circumstances.",
          "Mandatory Court Deposit: The plaintiff must physically deposit the entire unpaid balance of the purchase price into the court treasury at the exact moment the plaint is filed.",
          "Order 7 Rule 11 CPC Rejection: If the contract is unregistered or the deposit is not made at filing, the suit is barred by law and the court must reject the plaint immediately."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Joynal Abedin v. Md. Latif",
        citation: "50 DLR 200",
        court: "High Court Division of Bangladesh",
        facts: "The plaintiff was forcibly dispossessed of his business premises by the defendant. Within four months, the plaintiff filed a possessory suit under Section 9 SRA. The defendant argued that he was the actual legal owner and held registered deed title to the property, which should override the plaintiff's mere possessory claim.",
        held: "The High Court Division held that in a suit under Section 9, the court cannot investigate or decide the question of title. The sole enquiry is prior peaceful possession and unlawful dispossession without consent within 6 months. Even if the defendant is the true owner, he has no right to dispossess the plaintiff by force; his title must be established via due process of law.",
        significance: "Establishes that title is no defense to an action under Section 9, reinforcing the rule of law against forcible dispossession."
      },
      {
        title: "Kafiluddin v. Sabera Khatun",
        citation: "43 DLR (AD) 130",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff entered into a written contract to purchase land and paid an advance. When the defendant failed to execute the deed, the plaintiff sued for specific performance. However, the plaintiff failed to show that they had actively attempted to pay the remaining balance or perform their contractual duties before filing.",
        held: "The Appellate Division held that in a specific performance suit, the plaintiff must plead and prove that they have always been ready and willing to perform their essential obligations under the contract. This continuous readiness must exist from the contract's date to the trial.",
        significance: "The primary authority on the mandatory requirement of proving 'readiness and willingness' in contract enforcement cases."
      },
      {
        title: "Md. Jahangir Alam v. Md. Mojibul Haque",
        citation: "64 DLR (AD) 120",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff filed a suit for specific performance of a land sale contract executed in 2008. The contract was not registered, and the plaintiff did not deposit the remaining purchase balance, promising to deposit it upon a court decree.",
        held: "The Appellate Division held that Section 21A is absolute and mandatory. No court has jurisdiction to entertain a suit for specific performance of a post-2005 land contract unless it is written and registered, and the balance consideration is deposited in court at the time of filing. The plaint was rejected under Order 7 Rule 11 CPC.",
        significance: "Enforces the absolute, non-discretionary nature of Section 21A's registration and deposit conditions."
      }
    ],
    maxims: [
      {
        maxim: "Vigilantibus et non dormientibus jura subveniunt",
        translation: "The laws assist those who are vigilant, not those who sleep upon their rights.",
        application: "This maxim underlies the strict 6-month limitation under Section 9 of the SRA. If a dispossessed person does not act quickly, they lose their right to the speedy possessory remedy and must instead pursue a lengthy and expensive title suit under Section 8."
      },
      {
        maxim: "Equity regards that as done which ought to be done",
        translation: "Where a party is under an obligation to perform an act, equity treats the consequences as if the act had already been performed.",
        application: "Applied in Specific Performance under Section 12. Once a valid contract for the sale of land is executed, the purchaser acquires an equitable interest. The court orders specific performance to compel the execution of the legal title to match the equitable state."
      },
      {
        maxim: "Equity looks to the intent rather than to the form",
        translation: "Equity looks at the real intent and substance of an agreement rather than its technical or literal language.",
        application: "In specific performance, even if a contract has a penalty clause or liquidated damages for non-performance, the court can still order specific performance of the transfer under Section 12 if it determines that the parties' real intention was the actual transfer of land."
      }
    ],
    mcqs: [
      {
        id: "mcq-8-1",
        question: "What is the limitation period for filing a possessory suit under Section 9 of the Specific Relief Act, 1877?",
        options: [
          { id: "a", text: "3 years from dispossession" },
          { id: "b", text: "12 years from dispossession" },
          { id: "c", text: "6 months from dispossession" },
          { id: "d", text: "1 year from dispossession" }
        ],
        correctOptionId: "c",
        explanation: "Section 9 strictly mandates that a possessory suit must be brought within 6 months from the date of dispossession. After 6 months, the plaintiff must file a title-based suit under Section 8."
      },
      {
        id: "mcq-8-2",
        question: "In a suit filed under Section 9 of the Specific Relief Act, which of the following statements is correct regarding the question of title?",
        options: [
          { id: "a", text: "The plaintiff must establish a valid title to succeed" },
          { id: "b", text: "The question of title is completely irrelevant and cannot be decided" },
          { id: "c", text: "The defendant can raise their registered title as an absolute defense" },
          { id: "d", text: "The court will refer the question of title to the land registrar" }
        ],
        correctOptionId: "b",
        explanation: "As affirmed in Joynal Abedin v. Md. Latif, the question of title is completely irrelevant in a Section 9 suit. The court only looks at prior possession and the fact of dispossession within 6 months."
      },
      {
        id: "mcq-8-3",
        question: "Under Section 9 of the Specific Relief Act, a dispossessed person CANNOT file a suit against:",
        options: [
          { id: "a", text: "A private landlord" },
          { id: "b", text: "A foreign citizen" },
          { id: "c", text: "The Government" },
          { id: "d", text: "A registered corporation" }
        ],
        correctOptionId: "c",
        explanation: "Section 9 explicitly bars any suit under this section from being brought against the Government. If dispossessed by the state, the remedy must be pursued under Section 8 or a constitutional writ."
      },
      {
        id: "mcq-8-4",
        question: "What remedies are available to a party aggrieved by a final decree or order passed in a suit under Section 9 of the Specific Relief Act?",
        options: [
          { id: "a", text: "A regular appeal to the District Judge" },
          { id: "b", text: "A petition for review in the same court" },
          { id: "c", text: "A civil revision under Section 115 CPC, or a subsequent title suit under Section 8" },
          { id: "d", text: "A miscellaneous appeal under Order 43 Rule 1" }
        ],
        correctOptionId: "c",
        explanation: "Section 9, clause 4 explicitly bars both appeal and review. The aggrieved party can only file a civil revision under Section 115 of the CPC, or file a separate title suit under Section 8."
      },
      {
        id: "mcq-8-5",
        question: "What is the limitation period and the corresponding Article of the Limitation Act, 1908 applicable to a suit for recovery of possession based on title under Section 8 of the SRA?",
        options: [
          { id: "a", text: "6 months under Article 3" },
          { id: "b", text: "3 years under Article 113" },
          { id: "c", text: "12 years under Article 142" },
          { id: "d", text: "60 years under Article 149" }
        ],
        correctOptionId: "c",
        explanation: "A suit for possession of immovable property based on title under Section 8 is governed by Article 142 of the Limitation Act, 1908, which provides a limitation period of 12 years."
      },
      {
        id: "mcq-8-6",
        question: "Which section of the Specific Relief Act, 1877 lists the categories of contracts that CANNOT be specifically enforced?",
        options: [
          { id: "a", text: "Section 12" },
          { id: "b", text: "Section 21" },
          { id: "c", text: "Section 54" },
          { id: "d", text: "Section 35" }
        ],
        correctOptionId: "b",
        explanation: "Section 21 of the Specific Relief Act lists contracts that cannot be specifically enforced, such as contracts where monetary compensation is adequate, or contracts involving personal services."
      },
      {
        id: "mcq-8-7",
        question: "Under Section 21A of the Specific Relief Act, a suit for specific performance of a contract for the sale of land is NOT maintainable unless:",
        options: [
          { id: "a", text: "The contract is oral and witnessed by at least three people" },
          { id: "b", text: "The contract is in writing and registered, and the entire balance consideration is deposited in court" },
          { id: "c", text: "The plaintiff has obtained a clearance certificate from the land commissioner" },
          { id: "d", text: "The local Union Parishad Chairman has approved the sale" }
        ],
        correctOptionId: "b",
        explanation: "Section 21A strictly mandates two things: the land sale contract must be in writing and registered, and the entire remaining balance must be deposited in court at the time of filing."
      },
      {
        id: "mcq-8-8",
        question: "The amendment introducing Section 21A into the Specific Relief Act, 1877 in Bangladesh came into force in which year?",
        options: [
          { id: "a", text: "1972" },
          { id: "b", text: "2005" },
          { id: "c", text: "2012" },
          { id: "d", text: "1998" }
        ],
        correctOptionId: "b",
        explanation: "The Specific Relief (Amendment) Act, 2004 inserted Section 21A, which officially became effective from July 1, 2005."
      },
      {
        id: "mcq-8-9",
        question: "The landmark case Kafiluddin v. Sabera Khatun (43 DLR (AD) 130) establishes that in specific performance suits, the plaintiff must prove:",
        options: [
          { id: "a", text: "They paid the entire consideration in cash at the time of contract" },
          { id: "b", text: "Continuous readiness and willingness to perform their part of the contract" },
          { id: "c", text: "They are in actual physical possession of the disputed land" },
          { id: "d", text: "The defendant has no other property in Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "The Appellate Division held that the plaintiff must prove continuous readiness and willingness to perform their part of the contract from the date of the contract until the final hearing."
      },
      {
        id: "mcq-8-10",
        question: "What is the court fee required for a possessory suit under Section 9 of the Specific Relief Act in comparison to a title suit under Section 8?",
        options: [
          { id: "a", text: "Exactly double the ad valorem court fee" },
          { id: "b", text: "A fixed court fee of 200 Taka only" },
          { id: "c", text: "Half of the ad valorem court fee prescribed for a Section 8 suit" },
          { id: "d", text: "No court fee is required for Section 9" }
        ],
        correctOptionId: "c",
        explanation: "Under the Court Fees Act in Bangladesh, the court fee for a possessory suit under Section 9 SRA is exactly half of the ad valorem court fee prescribed for a title suit under Section 8."
      }
    ]
  },
  {
    id: "chapter-9",
    title: "Chapter 9: Specific Relief Act - Declarations & Injunctions",
    subject: "The Specific Relief Act, 1877",
    isCompleted: true,
    quickSummary: "This chapter covers Declaratory Decrees under Section 42 and Injunctions (Preventive Relief) under Sections 52 to 57 of the Specific Relief Act, 1877. It covers the mandatory proviso of Section 42 requiring consequential relief, the tripartite test for temporary injunctions, the 11 statutory bars under Section 56, and injunctions to perform negative covenants under Section 57.",
    studyStrategy: "For BJS and Bar Council exams, focus heavily on the Section 42 proviso: what constitutes 'further relief' and the consequence of omitting it (suit dismissal). For Injunctions, memorize the 11 grounds in Section 56 where an injunction MUST be refused, and master the tri-partite test for temporary injunctions (prima facie case, balance of convenience, irreparable loss) established in Freedom Fighter Welfare Trust v. Md. Solaiman. Also, understand how Section 57 permits enforcing negative agreements even when affirmative specific performance is barred.",
    sections: [
      {
        sectionNo: "Section 42",
        title: "Declaratory Decrees & Consequential Relief",
        statutoryText: "Any person entitled to any legal character, or to any right as to any property, may institute a suit against any person denying... his title to such character or right, and the Court may in its discretion make a declaration... and the plaintiff need not in such suit ask for any further relief: Provided that no Court shall make any such declaration where the plaintiff, being able to seek further relief than a mere declaration of title, omits to do so.",
        simplifiedExplanation: "Section 42 enables any person to obtain a judicial declaration regarding their legal status (such as legitimacy or marital status) or their right to any property, provided someone denies it. This resolves a 'cloud on title' before any active injury occurs. However, the proviso is a strict statutory bar: if a plaintiff is out of possession and could ask for recovery of possession ('further relief' or 'consequential relief') but only asks for a bare declaration of title, the court is legally prohibited from granting the declaration and must dismiss the suit.",
        elements: [
          "Discretionary Remedy: A declaration is not a matter of right. Even if the plaintiff proves their title, the court can refuse to grant a declaration based on equitable principles if the suit is vexatious or lacks utility.",
          "Further Relief Proviso: 'Further relief' (consequential relief) is any relief that flows naturally and directly from the declaration, such as recovery of possession, partition, or a permanent injunction. If the plaintiff is able to ask for it but fails to do so, the court cannot grant the declaration.",
          "Legal Character or Right: Legal character refers to statuses recognized by law (e.g., trustee, legitimate child, married person). Right to property refers to proprietary interests (e.g., ownership, easement, tenancy)."
        ]
      },
      {
        sectionNo: "Sections 52 to 55",
        title: "Injunctions: Temporary, Perpetual & Mandatory",
        statutoryText: "Section 52: Preventive relief is granted at the discretion of the Court by injunction, temporary or perpetual.\nSection 53: Temporary injunctions are such as are to continue until a specified time... they may be granted at any period of a suit, and are regulated by the Code of Civil Procedure.\nSection 54: A perpetual injunction may be granted to prevent the breach of an obligation...\nSection 55: When, to prevent the breach of an obligation, it is necessary to compel the performance of certain requisite acts... the Court may in its discretion grant an injunction...",
        simplifiedExplanation: "Injunctions are equitable remedies commanding a party to do or refrain from doing a specific act. Temporary injunctions are interlocutory orders aimed at preserving the status quo during the litigation process. Perpetual injunctions are permanent decrees granted after a full trial on the merits. Mandatory injunctions, unlike regular prohibitory injunctions, actively compel a party to perform a positive act (such as tearing down an illegally constructed wall) to restore things to their lawful state.",
        elements: [
          "Temporary Injunctions: Governed by Order 39 of the Code of Civil Procedure. They are temporary measures to ensure the subject-matter of the suit is not destroyed, sold, or altered before the court makes a final decision.",
          "Perpetual Injunctions: Governed by Section 54 of the SRA. Granted by a final decree. It eternally debars the defendant from invading the plaintiff's rights.",
          "Mandatory Injunctions: Governed by Section 55. Requires two elements: (1) there must be an obligation on the defendant, (2) the breach of that obligation must require the performance of positive acts which the court can supervise."
        ]
      },
      {
        sectionNo: "Sections 56 & 57",
        title: "Statutory Bars to Injunctions & Negative Covenants",
        statutoryText: "Section 56: An injunction cannot be granted- (a) to stay a judicial proceeding... (d) to interfere with the public duties of any department of the Government... (e) to stay proceedings in any criminal matter... (f) to prevent the breach of a contract the performance of which would not be specifically enforced... (i) when equally efficacious relief can certainly be obtained...\nSection 57: Notwithstanding section 56, clause (f), where a contract comprises an affirmative agreement... coupled with a negative agreement... the circumstance that the Court is unable to compel specific performance of the affirmative agreement shall not preclude it from granting an injunction to perform the negative agreement...",
        simplifiedExplanation: "Section 56 is a critical, non-discretionary list of 11 circumstances where civil courts are absolutely barred from granting an injunction (e.g., staying criminal matters, interfering with Government public duties, or where another equally effective remedy exists). However, Section 57 provides a beautiful exception to Section 56(f). If a contract has a positive duty (affirmative covenant) and a negative duty (not to work or do business elsewhere), even if the positive duty is too personal or detailed to be specifically enforced (e.g., a professional singer or coder), the court can still issue an injunction to enforce the negative covenant.",
        elements: [
          "Government Protection (Section 56d): Courts must not issue injunctions that halt the public, statutory, or sovereign duties of government departments, which would paralyze public administration.",
          "Efficacious Relief (Section 56i): If the plaintiff can obtain complete relief through another standard legal procedure (such as suing for damages, partition, or rent), they cannot seek an injunction.",
          "Enforcing Negative Covenants (Section 57): Applied in personal service contracts. For instance, if an actor contracts to act exclusively for a specific studio for three years, the court cannot force them to act, but can enjoin them from acting for any rival studio during that period."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Mst. Maleka Khatun v. Md. Sharif",
        citation: "50 DLR 495",
        court: "High Court Division of Bangladesh",
        facts: "The plaintiff brought a suit for a declaration under Section 42 of the Specific Relief Act, 1877, seeking to declare that she was the sole legal owner of the suit property. However, during cross-examination, it was established that the defendant had physical possession of the land. The plaintiff had not requested recovery of possession as a consequential remedy, seeking only a bare declaration.",
        held: "The High Court Division held that where the plaintiff is out of possession and is legally able to seek recovery of possession ('further relief'), a suit for a mere declaration of title is strictly barred by the proviso to Section 42 SRA. The court has no discretion to grant a bare declaration in such circumstances, and the suit must be dismissed.",
        significance: "The absolute authority in Bangladesh on the mandatory requirement of asking for consequential relief when out of possession in declaratory suits."
      },
      {
        title: "Chairman, Bangladesh Freedom Fighter Welfare Trust v. Md. Solaiman",
        citation: "39 DLR (AD) 135",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The plaintiff, Md. Solaiman, was running a cinema business on premises leased from the Freedom Fighter Welfare Trust. Upon receiving a notice of lease cancellation and eviction, he filed a suit for specific performance and applied for a temporary injunction to stop the Trust from taking physical possession of the cinema hall.",
        held: "The Appellate Division held that a temporary injunction is an extraordinary equitable remedy. To succeed, the plaintiff must establish three essential, independent conditions concurrently: (1) a prima facie case (an arguable, non-frivolous case), (2) that the balance of convenience and inconvenience favors the plaintiff, and (3) that the plaintiff will suffer irreparable loss or injury (loss that cannot be measured or adequately compensated in money) if the injunction is refused. If any of these three elements is missing, an injunction cannot be granted.",
        significance: "The premier landmark authority on the three-fold test that governs the grant or refusal of temporary injunctions under Order 39 Rules 1 & 2 CPC in Bangladesh."
      },
      {
        title: "Province of East Pakistan v. Md. Abdul Hamid Darji",
        citation: "9 DLR 105",
        court: "High Court of East Pakistan (Predecessor of Supreme Court)",
        facts: "A government employee was unlawfully dismissed from his position. He filed a suit under Section 42 of the Specific Relief Act seeking a declaration that his dismissal was void, illegal, and that he still held his legal character as an active government servant. The Government argued that the suit was barred by the Section 42 proviso because he had failed to sue for the consequential relief of arrears of salary (back-wages).",
        held: "The court held that a suit for a mere declaration of status of employment is fully maintainable. Arrears of salary are not 'further relief' that the plaintiff is able to seek as of right at that initial stage, and thus, the suit is not hit by the proviso to Section 42.",
        significance: "Established the key administrative law and specific relief principle that a declaration of illegal dismissal does not require a concurrent claim for salary arrears to be legally maintainable."
      }
    ],
    maxims: [
      {
        maxim: "Ubi jus ibi remedium",
        translation: "Where there is a right, there is a remedy.",
        application: "This maxim forms the bedrock of the Specific Relief Act, especially Section 42. It ensures that when a person's legal character or proprietary right is denied or clouded, they have a right to institute a civil suit to obtain a declaratory decree, even before an active physical injury has occurred."
      },
      {
        maxim: "He who seeks equity must do equity",
        translation: "Anyone seeking the aid of an equitable court must be prepared to act fairly and justly towards the other party.",
        application: "Directly applied in the discretionary grant of injunctions. Under Section 56(j), the court must refuse to grant an injunction if the plaintiff's own conduct, or the conduct of their agents, has been unfair, dishonest, or inequitable in relation to the subject-matter of the dispute."
      },
      {
        maxim: "Delay defeats equities / Equity aids the vigilant, not those who slumber",
        translation: "The law will not assist a party who has slept upon their rights and allowed a delay to prejudice the other party.",
        application: "Applied in Section 56(h). An injunction will be denied to prevent a continuing breach of an obligation if the plaintiff has acquiesced or stood by without objection for a long period, as they are deemed to have waived their equitable right to preventive relief."
      }
    ],
    mcqs: [
      {
        id: "mcq-9-1",
        question: "Under Section 42 of the Specific Relief Act, 1877, a suit for a mere declaration of title is barred if the plaintiff is out of possession and fails to seek which of the following?",
        options: [
          { id: "a", text: "Damages for breach of contract" },
          { id: "b", text: "A temporary injunction" },
          { id: "c", text: "Recovery of possession" },
          { id: "d", text: "Specific performance" }
        ],
        correctOptionId: "c",
        explanation: "The proviso to Section 42 strictly bars the court from making any declaration of title if the plaintiff, being able to seek further relief (consequential relief like recovery of possession), omits to do so. This is the central holding of Mst. Maleka Khatun v. Md. Sharif (50 DLR 495)."
      },
      {
        id: "mcq-9-2",
        question: "Which of the following is NOT a mandatory condition for granting a temporary injunction in Bangladesh, as laid down in Chairman, Bangladesh Freedom Fighter Welfare Trust v. Md. Solaiman (39 DLR (AD) 135)?",
        options: [
          { id: "a", text: "Prima facie case" },
          { id: "b", text: "Balance of convenience and inconvenience" },
          { id: "c", text: "Irreparable loss or injury" },
          { id: "d", text: "Proof of absolute registered ownership (title)" }
        ],
        correctOptionId: "d",
        explanation: "To obtain a temporary injunction, the plaintiff does not need to prove absolute ownership at the interlocutory stage; they only need to establish a prima facie case (a fair question to raise), in addition to the balance of convenience and irreparable injury."
      },
      {
        id: "mcq-9-3",
        question: "Under which order of the Code of Civil Procedure (CPC) are temporary injunctions regulated in Bangladesh, as referenced in Section 53 of the Specific Relief Act?",
        options: [
          { id: "a", text: "Order 39" },
          { id: "b", text: "Order 41" },
          { id: "c", text: "Order 7" },
          { id: "d", text: "Order 21" }
        ],
        correctOptionId: "a",
        explanation: "Section 53 of the Specific Relief Act, 1877 states that temporary injunctions are regulated by the Code of Civil Procedure, which is specifically Order 39 of the CPC."
      },
      {
        id: "mcq-9-4",
        question: "Section 56 of the Specific Relief Act, 1877 lists how many statutory bars where an injunction cannot be granted?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "8" },
          { id: "c", text: "11" },
          { id: "d", text: "15" }
        ],
        correctOptionId: "c",
        explanation: "Section 56 of the Specific Relief Act lists exactly 11 clauses (from clause a to clause k) detailing situations in which an injunction must be refused."
      },
      {
        id: "mcq-9-5",
        question: "An injunction cannot be granted to stay proceedings in a criminal matter. Under which clause of Section 56 of the Specific Relief Act, 1877 is this bar enacted?",
        options: [
          { id: "a", text: "Section 56(a)" },
          { id: "b", text: "Section 56(e)" },
          { id: "c", text: "Section 56(i)" },
          { id: "d", text: "Section 56(k)" }
        ],
        correctOptionId: "b",
        explanation: "Section 56(e) explicitly mandates that an injunction cannot be granted to stay proceedings in any criminal matter."
      },
      {
        id: "mcq-9-6",
        question: "Under Section 55 of the Specific Relief Act, 1877, a court may grant which type of injunction to prevent the breach of an obligation and compel the performance of necessary acts?",
        options: [
          { id: "a", text: "Temporary Injunction" },
          { id: "b", text: "Perpetual Injunction" },
          { id: "c", text: "Mandatory Injunction" },
          { id: "d", text: "Prohibitory Injunction" }
        ],
        correctOptionId: "c",
        explanation: "Section 55 provides for Mandatory Injunctions, which are granted to prevent the breach of an obligation and at the same time compel the performance of certain requisite acts."
      },
      {
        id: "mcq-9-7",
        question: "According to Section 56(d) of the Specific Relief Act, 1877, an injunction CANNOT be granted:",
        options: [
          { id: "a", text: "To interfere with the public duties of any department of the Government" },
          { id: "b", text: "Against a minor under any circumstances" },
          { id: "c", text: "In a suit between a husband and wife" },
          { id: "d", text: "To prevent a breach of contract that cannot be specifically enforced" }
        ],
        correctOptionId: "a",
        explanation: "Section 56(d) states that an injunction cannot be granted to interfere with the public duties of any department of the Government, or with the sovereign acts of a foreign Government."
      },
      {
        id: "mcq-9-8",
        question: "If an affirmative agreement is coupled with a negative agreement, and the court cannot specifically enforce the affirmative part, can the court grant an injunction to perform the negative agreement under Section 57?",
        options: [
          { id: "a", text: "No, the court is barred because the affirmative part cannot be enforced" },
          { id: "b", text: "Yes, the court can grant an injunction to enforce the negative agreement, provided the plaintiff has performed their part of the contract" },
          { id: "c", text: "Yes, but only with the consent of the Attorney General" },
          { id: "d", text: "No, negative covenants are void as restraint of trade" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 57, the court can grant an injunction to perform a negative agreement (e.g., not to sing or work elsewhere) even if it cannot specifically enforce the affirmative agreement (to sing or work), provided the plaintiff has not failed to perform their binding obligations."
      },
      {
        id: "mcq-9-9",
        question: "In Province of East Pakistan v. Md. Abdul Hamid Darji (9 DLR 105), the court held that a suit for a declaration of illegal dismissal from government service is maintainable without seeking back-wages because:",
        options: [
          { id: "a", text: "The Government is immune from paying salaries" },
          { id: "b", text: "Arrears of salary were not considered 'further relief' that the plaintiff was able to seek as of right at that stage" },
          { id: "c", text: "Back-wages must be claimed in a separate criminal suit" },
          { id: "d", text: "Specific performance of employment is always granted" }
        ],
        correctOptionId: "b",
        explanation: "The court held that arrears of salary are not 'further relief' within the meaning of the proviso to Section 42 of SRA which the plaintiff is able to seek as of right at that stage, and therefore, a suit for mere declaration of status was maintainable."
      },
      {
        id: "mcq-9-10",
        question: "Under Section 56(j) of the Specific Relief Act, 1877, an injunction will be refused if:",
        options: [
          { id: "a", text: "The plaintiff has a personal interest" },
          { id: "b", text: "The defendant has died" },
          { id: "c", text: "The conduct of the plaintiff or his agents has been such as to disentitle him to the assistance of the Court" },
          { id: "d", text: "The suit is filed in a District Court" }
        ],
        correctOptionId: "c",
        explanation: "Under Section 56(j), an injunction must be refused when the conduct of the plaintiff or his agents has been such as to disentitle him to the assistance of the Court. This is an application of the maxim 'He who comes to equity must come with clean hands.'"
      }
    ]
  },
  {
    id: "chapter-10",
    title: "Chapter 10: CrPC - Definitions & Classes of Courts",
    subject: "The Code of Criminal Procedure, 1898",
    isCompleted: true,
    quickSummary: "This chapter covers key CrPC definitions under Section 4, the classification of criminal courts under Section 6, and the sentencing powers of Sessions Judges and Magistrates under Sections 31 and 32 of the Code of Criminal Procedure, 1898.",
    studyStrategy: "For BJS and Bar Council exams, master the differences between cognizable/non-cognizable, bailable/non-bailable, and summons/warrant cases. Commit to memory the sentencing table in Section 31 (Sessions Courts) and Section 32 (Magistrates) including the fine and imprisonment terms for First Class, Second Class, and Third Class Magistrates as amended in 2009.",
    sections: [
      {
        sectionNo: "Section 4",
        title: "Key Definitions under CrPC",
        statutoryText: "In this Code the following words and expressions have the following meanings...:\n(f) 'Cognizable offence' means an offence for which, and 'cognizable case' means a case in which, a police-officer may, in accordance with the second schedule or under any law for the time being in force, arrest without warrant...\n(n) 'Non-cognizable offence' / 'non-cognizable case' means an offence/case in which a police-officer may not arrest without warrant...\n(b) 'Bailable offence' means an offence shown as bailable in the second schedule, or which is made bailable by any other law... and 'non-bailable offence' means any other offence...\n(v) 'Summons-case' means a case relating to an offence, and not being a warrant-case; and\n(w) 'Warrant-case' means a case relating to an offence punishable with death, imprisonment for life or imprisonment for a term exceeding two years.",
        simplifiedExplanation: "Section 4 sets out the foundational definitions of the CrPC:\n1. Cognizable vs. Non-Cognizable: In cognizable offences, police can arrest without a warrant and investigate without a magistrate's order (typically serious crimes like murder, robbery). In non-cognizable offences, a warrant and order are mandatory.\n2. Bailable vs. Non-Bailable: In bailable offences, bail is a matter of right for the accused (minor offences). In non-bailable offences, bail is a matter of judicial discretion (serious offences).\n3. Summons vs. Warrant Cases: A warrant case is one where the offence is punishable by death, life imprisonment, or imprisonment exceeding two years. A summons case is any case that is not a warrant case (i.e., punishable by two years or less).",
        elements: [
          "Cognizable Offence (Sec 4(1)(f)): Police have power to arrest without warrant. Immediate police action is enabled to prevent escape or destruction of evidence.",
          "Non-Cognizable Offence (Sec 4(1)(n)): Police have no authority to arrest without warrant or investigate without a magistrate's order.",
          "Bailable Offence (Sec 4(1)(b)): Accused is entitled to bail as of right, and refusing it is an illegality.",
          "Non-Bailable Offence: Bail is discretionary, granted based on the gravity of the offence, likelihood of absconding, and tampering with evidence.",
          "Warrant Case (Sec 4(1)(w)): Relates to offences punishable with death, life imprisonment, or imprisonment > 2 years.",
          "Summons Case (Sec 4(1)(v)): Relates to offences punishable with 2 years or less. Simpler trial procedures apply."
        ]
      },
      {
        sectionNo: "Section 6",
        title: "Classes of Criminal Courts in Bangladesh",
        statutoryText: "Besides the Supreme Court and the Courts constituted under any law other than this Code, there shall be two classes of Criminal Courts in Bangladesh, namely:-\nI. Courts of Session;\nII. Courts of Magistrates.\nThere shall be two classes of Magistrates, namely:-\n(a) Judicial Magistrates;\n(b) Executive Magistrates.\nThere shall be four classes of Judicial Magistrates, namely:-\n(i) Chief Metropolitan Magistrate in Metropolitan Area and Chief Judicial Magistrate in other areas;\n(ii) Magistrates of the First Class;\n(iii) Magistrates of the Second Class;\n(iv) Magistrates of the Third Class.",
        simplifiedExplanation: "Section 6 details the criminal court hierarchy in Bangladesh. Under the historic separation of the judiciary (following the landmark Masdar Hossain case, effective Nov 1, 2007), criminal courts are split into Courts of Session and Courts of Magistrates. Magistrates are further split into Judicial Magistrates (who try cases and perform judicial functions) and Executive Magistrates (who maintain public order and perform administrative functions under the executive branch). In metropolitan areas, Judicial Magistrates are designated as Metropolitan Magistrates, headed by the Chief Metropolitan Magistrate (CMM). In non-metropolitan districts, they are headed by the Chief Judicial Magistrate (CJM).",
        elements: [
          "Courts of Session: The highest district-level criminal court, presided over by a Sessions Judge, Additional Sessions Judge, or Joint Sessions Judge.",
          "Judicial Magistrates: Fully judicial officers under the administrative control of the Supreme Court of Bangladesh, divided into four tiers (CJM/CMM, 1st Class, 2nd Class, 3rd Class).",
          "Executive Magistrates: Executive officers (such as Deputy Commissioners, UNOs) who do not try criminal cases but exercise executive/preventive powers (e.g., mobile courts, Section 144 CrPC).",
          "Metropolitan vs. District: Metropolitan Magistrates hold the powers of a First Class Magistrate and operate within metropolitan boundaries."
        ]
      },
      {
        sectionNo: "Sections 31 & 32",
        title: "Sentencing Powers of Judges & Magistrates",
        statutoryText: "Section 31: (1) The High Court Division may pass any sentence authorized by law. (2) A Sessions Judge or Additional Sessions Judge may pass any sentence authorized by law; but any sentence of death passed by any such Judge shall be subject to confirmation by the High Court Division. (3) A Joint Sessions Judge may pass any sentence authorized by law except a sentence of death or of imprisonment for a term exceeding ten years.\nSection 32: (1) The Courts of Magistrates may pass the following sentences, namely:-\n(a) Courts of Metropolitan Magistrates and of Magistrates of the First Class: Imprisonment for a term not exceeding five years, fine not exceeding ten thousand Taka, whipping;\n(b) Courts of Magistrates of the Second Class: Imprisonment for a term not exceeding three years, fine not exceeding five thousand Taka;\n(c) Courts of Magistrates of the Third Class: Imprisonment for a term not exceeding two years, fine not exceeding two thousand Taka.",
        simplifiedExplanation: "Sections 31 and 32 outline the sentencing ceilings of judges and magistrates in Bangladesh. While Sessions and Additional Sessions Judges can pass any lawful sentence (including death, which requires HCD confirmation under Section 374), Joint Sessions Judges are capped at 10 years imprisonment. Following the Code of Criminal Procedure (Amendment) Act, 2009, the sentencing powers of Magistrates were significantly enhanced to reduce the backlog of Sessions courts:\n1. First Class/Metropolitan Magistrates can impose up to 5 years imprisonment and up to 10,000 Taka fine.\n2. Second Class Magistrates can impose up to 3 years imprisonment and up to 5,000 Taka fine.\n3. Third Class Magistrates can impose up to 2 years imprisonment and up to 2,000 Taka fine. This increase in jurisdictional powers helps resolve intermediate criminal cases more rapidly.",
        elements: [
          "High Court Division: Unlimited sentencing power, including death and life imprisonment.",
          "Sessions Judge & Additional Sessions Judge: Unlimited sentencing power; death sentence requires High Court Division confirmation under Section 374.",
          "Joint Sessions Judge: Can sentence up to 10 years imprisonment. Cannot award death or imprisonment exceeding 10 years.",
          "First Class & Metropolitan Magistrate: Up to 5 years imprisonment and 10,000 Taka fine (enhanced in 2009).",
          "Second Class Magistrate: Up to 3 years imprisonment and 5,000 Taka fine (enhanced in 2009).",
          "Third Class Magistrate: Up to 2 years imprisonment and 2,000 Taka fine (enhanced in 2009)."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Secretary, Ministry of Finance v. Masdar Hossain",
        citation: "52 DLR (AD) 82",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A landmark writ petition was filed by judicial officers (led by Masdar Hossain) challenging the government's control over the lower judiciary, arguing it violated the separation of powers enshrined in Article 22 of the Constitution of Bangladesh.",
        held: "The Appellate Division issued a historic 12-point directive mandating the separation of the judiciary from the executive. This led to the amendment of Section 6 of the CrPC, effectively creating a separate cadre of 'Judicial Magistrates' independent of executive control, operating under the Supreme Court's oversight.",
        significance: "The constitutional and statutory foundation for judicial independence and the separation of criminal magistrates in Bangladesh."
      },
      {
        title: "State v. Md. Shafi and Others",
        citation: "43 DLR 452",
        court: "High Court Division of Bangladesh",
        facts: "In a criminal trial, the Sessions Judge passed a sentence of death upon the accused but failed to submit the proceedings to the High Court Division for confirmation. The accused appealed, and the question arose as to the validity and execution of a death sentence prior to HCD confirmation.",
        held: "The High Court Division held that under Section 31 of the CrPC, read with Section 374, a sentence of death passed by a Sessions Judge or Additional Sessions Judge is not an operative sentence unless and until it is confirmed by the High Court Division. The reference for confirmation is a mandatory requirement of law.",
        significance: "Affirms that a death sentence from the Sessions Court is inchoate and cannot be executed without High Court Division confirmation under Section 374."
      },
      {
        title: "Md. Joynal Abedin v. The State",
        citation: "58 DLR 122",
        court: "High Court Division of Bangladesh",
        facts: "The petitioner challenged the jurisdiction of a Second Class Magistrate who had conducted a trial and passed a sentence of imprisonment. The petitioner argued that the offence was exclusively triable by a Court of Session or First Class Magistrate.",
        held: "The HCD held that the classification of courts in Section 6 and the corresponding jurisdiction schedules are mandatory. Any trial conducted by a magistrate lacking the requisite class or sentencing jurisdiction is coram non judice and void under Section 530 of the CrPC.",
        significance: "Reiterates the strict adherence required to the territorial, subject-matter, and sentencing jurisdictions of the different classes of magistrates."
      }
    ],
    maxims: [
      {
        maxim: "Actori incumbit onus probandi",
        translation: "The burden of proof lies on the plaintiff (or prosecution).",
        application: "In all criminal trials under the CrPC, the prosecution bears the absolute burden of proving the guilt of the accused beyond a reasonable doubt. The accused is presumed innocent until proven guilty."
      },
      {
        maxim: "Coram non judice",
        translation: "In the presence of a person not a judge / Before one who is not the judge.",
        application: "Directly applicable to Section 6 and the sentencing powers under Sections 31-32. If a court or magistrate acts without jurisdiction or exceeds its statutory sentencing power, its proceedings are coram non judice, meaning they are a nullity and void in the eyes of law."
      },
      {
        maxim: "Salus populi suprema lex esto",
        translation: "The health/safety of the people shall be the supreme law.",
        application: "We can see the rationale behind the existence of Executive Magistrates under Section 6. While they do not hold trial powers, they are vested with urgent, preventive powers (such as Section 144) to maintain public tranquility and prevent imminent danger to society."
      }
    ],
    mcqs: [
      {
        id: "mcq-10-1",
        question: "Under Section 4(1)(w) of the Code of Criminal Procedure, 1898, a 'warrant-case' means a case relating to an offence punishable with death, imprisonment for life, or imprisonment for a term exceeding:",
        options: [
          { id: "a", text: "Six months" },
          { id: "b", text: "One year" },
          { id: "c", text: "Two years" },
          { id: "d", text: "Five years" }
        ],
        correctOptionId: "c",
        explanation: "Section 4(1)(w) of the CrPC explicitly defines a 'warrant-case' as a case relating to an offence punishable with death, imprisonment for life, or imprisonment for a term exceeding two years."
      },
      {
        id: "mcq-10-2",
        question: "Which of the following classes of magistrates does NOT try criminal cases but exercises executive and preventive powers to maintain public order in Bangladesh?",
        options: [
          { id: "a", text: "Metropolitan Magistrate" },
          { id: "b", text: "Chief Judicial Magistrate" },
          { id: "c", text: "Executive Magistrate" },
          { id: "d", text: "Magistrate of the First Class" }
        ],
        correctOptionId: "c",
        explanation: "Following the separation of the judiciary under Section 6 of the CrPC, Executive Magistrates are tasked with maintaining public order and safety (e.g., executing Section 144), whereas Judicial Magistrates try criminal cases."
      },
      {
        id: "mcq-10-3",
        question: "Under Section 31 of the CrPC, any sentence of death passed by a Sessions Judge or an Additional Sessions Judge is subject to confirmation by:",
        options: [
          { id: "a", text: "The President of Bangladesh" },
          { id: "b", text: "The High Court Division" },
          { id: "c", text: "The Chief Judicial Magistrate" },
          { id: "d", text: "The Ministry of Law, Justice and Parliamentary Affairs" }
        ],
        correctOptionId: "b",
        explanation: "Section 31(2) states that a Sessions Judge or Additional Sessions Judge may pass any sentence authorized by law, but any sentence of death passed shall be subject to confirmation by the High Court Division under Section 374 of the CrPC."
      },
      {
        id: "mcq-10-4",
        question: "What is the maximum term of imprisonment that a Joint Sessions Judge can pass under Section 31(3) of the CrPC?",
        options: [
          { id: "a", text: "3 years" },
          { id: "b", text: "5 years" },
          { id: "c", text: "7 years" },
          { id: "d", text: "10 years" }
        ],
        correctOptionId: "d",
        explanation: "Under Section 31(3) of the CrPC, a Joint Sessions Judge may pass any sentence authorized by law except a sentence of death or of imprisonment exceeding ten years."
      },
      {
        id: "mcq-10-5",
        question: "Following the Code of Criminal Procedure (Amendment) Act, 2009, what is the maximum fine a Court of Metropolitan Magistrate or Magistrate of the First Class can impose under Section 32?",
        options: [
          { id: "a", text: "1,000 Taka" },
          { id: "b", text: "2,000 Taka" },
          { id: "c", text: "5,000 Taka" },
          { id: "d", text: "10,000 Taka" }
        ],
        correctOptionId: "d",
        explanation: "The 2009 amendment enhanced the sentencing powers under Section 32, allowing First Class and Metropolitan Magistrates to impose a fine of up to 10,000 Taka (increased from 5,000 Taka) and imprisonment up to 5 years (increased from 3 years)."
      },
      {
        id: "mcq-10-6",
        question: "Under Section 32 of the CrPC, a Court of Magistrate of the Second Class can pass a sentence of imprisonment for a term not exceeding ________ and a fine not exceeding ________ Taka:",
        options: [
          { id: "a", text: "1 year, 2,000 Taka" },
          { id: "b", text: "3 years, 5,000 Taka" },
          { id: "c", text: "5 years, 10,000 Taka" },
          { id: "d", text: "2 years, 2,000 Taka" }
        ],
        correctOptionId: "b",
        explanation: "Following the 2009 amendment, a Second Class Magistrate is empowered to award up to 3 years of imprisonment and up to 5,000 Taka fine."
      },
      {
        id: "mcq-10-7",
        question: "Which of the following landmark judgments of the Appellate Division of Bangladesh led to the separation of the judiciary and the establishment of Judicial Magistrates under Section 6?",
        options: [
          { id: "a", text: "Blast v. Bangladesh" },
          { id: "b", text: "Secretary, Ministry of Finance v. Masdar Hossain" },
          { id: "c", text: "State v. Md. Shafi" },
          { id: "d", text: "Anwar Hossain Chowdhury v. Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "The Masdar Hossain case (52 DLR (AD) 82) is the historic separation of powers judgment in Bangladesh, which forced the separation of the judiciary from the executive branch on November 1, 2007."
      },
      {
        id: "mcq-10-8",
        question: "Which class of Judicial Magistrate does NOT exist under the current classification in Section 6 of the CrPC?",
        options: [
          { id: "a", text: "Chief Judicial Magistrate" },
          { id: "b", text: "Magistrate of the Second Class" },
          { id: "c", text: "Magistrate of the Fourth Class" },
          { id: "d", text: "Magistrate of the Third Class" }
        ],
        correctOptionId: "c",
        explanation: "Section 6 lists Chief Judicial Magistrate/Chief Metropolitan Magistrate, Magistrate of the First Class, Second Class, and Third Class. There is no 'Fourth Class' Magistrate in Bangladesh."
      },
      {
        id: "mcq-10-9",
        question: "An offence for which a police officer may arrest without a warrant is defined under Section 4(1)(f) of the CrPC as a:",
        options: [
          { id: "a", text: "Bailable offence" },
          { id: "b", text: "Cognizable offence" },
          { id: "c", text: "Warrant offence" },
          { id: "d", text: "Non-cognizable offence" }
        ],
        correctOptionId: "b",
        explanation: "Section 4(1)(f) defines a 'cognizable offence' as an offence for which a police officer may arrest without a warrant."
      },
      {
        id: "mcq-10-10",
        question: "If a court tries a case or passes a sentence without having any statutory jurisdiction under Section 6 or Section 32, the proceedings are a nullity under the doctrine of:",
        options: [
          { id: "a", text: "Res judicata" },
          { id: "b", text: "Coram non judice" },
          { id: "c", text: "Ubi jus ibi remedium" },
          { id: "d", text: "Obiter dicta" }
        ],
        correctOptionId: "b",
        explanation: "The doctrine of 'coram non judice' applies when a court acts without jurisdiction. Any such trial or judgment is completely void and a nullity, as affirmed in Md. Joynal Abedin v. The State."
      }
    ]
  },
  {
    id: "chapter-11",
    title: "Chapter 11: CrPC - Security, Maintenance & Urgent Cases (Sec 144/145)",
    subject: "The Code of Criminal Procedure, 1898",
    isCompleted: true,
    quickSummary: "This chapter covers crucial preventive provisions under the CrPC, focusing on security for keeping the peace (Section 107), inquiry procedures (Section 117), removal of public nuisances (Section 133), urgent temporary orders (Section 144), and disputes concerning immovable property (Section 145).",
    studyStrategy: "Pay extremely close attention to timelines (such as the 60 days / 2 months limitation for Section 144 orders, and the 2-month possession rule for Section 145 dispossession), the level of magistrate empowered to act, and the differences between civil dispute resolution and preventive criminal jurisdiction. Case laws like the landmark decisions on Section 144 and 145 are highly testable.",
    sections: [
      {
        sectionNo: "Sections 107 & 117",
        title: "Security for Keeping the Peace and Inquiry Procedure",
        statutoryText: "Section 107: (1) Whenever a Metropolitan Magistrate or an Executive Magistrate is informed that any person is likely to commit a breach of the peace or disturb the public tranquillity... the Magistrate, if in his opinion there is sufficient ground for proceeding, may, in manner hereinafter provided, require such person to show cause why he should not be ordered to execute a bond, with or without sureties, for keeping the peace for such period, not exceeding one year, as the Magistrate thinks fit to fix...\nSection 117: (1) When an order under Section 112 has been read or explained... the Magistrate shall proceed to inquire into the truth of the information upon which action has been taken, and to take such further evidence as may appear necessary...",
        simplifiedExplanation: "These sections establish the preventive justice machinery of the CrPC:\n1. Section 107 (Security for Keeping the Peace): It is designed to prevent a person from committing a breach of the peace or disturbing public tranquility. An Executive Magistrate (or Metropolitan Magistrate) can order a person to show cause why they should not execute a bond (with or without sureties) to keep the peace for up to one year.\n2. Section 117 (Inquiry Procedure): It dictates how the magistrate must conduct an inquiry to verify the truth of the information. While the inquiry is pending, if the magistrate thinks immediate measures are necessary to prevent a breach of peace, they can direct the person to execute an interim bond. Under Section 117(2), the inquiry must be completed within six months from the date of its commencement, unless extended.",
        elements: [
          "Magisterial Power (Sec 107): Exercised by Executive Magistrates (or Metropolitan Magistrates in metro areas) upon receiving credible info about threatened breach of peace.",
          "Bond Duration: The bond to keep the peace is capped at a maximum of one year.",
          "Section 117 Inquiry: Mandatory procedural step to hear the accused and take evidence before ordering a final bond under Section 118.",
          "Interim Bond (Sec 117(3)): Can be demanded during the inquiry's pendency for reasons of public safety recorded in writing.",
          "Inquiry Timeline: The inquiry must generally be completed within six months (unless recorded otherwise under statutory extensions)."
        ]
      },
      {
        sectionNo: "Section 133",
        title: "Conditional Order for Removal of Public Nuisance",
        statutoryText: "Section 133: (1) Whenever a District Magistrate or an Executive Magistrate specially empowered by the Government... considers that any unlawful obstruction or nuisance should be removed from any way, river or channel... or that the conduct of any trade or occupation... is injurious to the health or physical comfort of the community... such Magistrate may make a conditional order requiring the person causing such obstruction or nuisance... to remove it, or to appear and show cause why the order should not be made absolute...",
        simplifiedExplanation: "Section 133 provides a speedy, summary remedy to deal with public nuisances and obstructions. It empowers District Magistrates or specially empowered Executive Magistrates to pass a 'conditional order' requiring the person responsible for the nuisance to either remove/remedy it, or appear in court and show cause why the order should not be made absolute. It covers unlawful obstructions in public ways/channels, dangerous construction, hazardous trades, or explosive substances. If the person fails to comply or show cause, the order is made absolute under Section 136, and disobedience is punishable under Section 188 of the Penal Code.",
        elements: [
          "Conditional Order: The magistrate first issues a conditional order (not an absolute one) to give the affected person an opportunity of being heard.",
          "Public Nuisance Only: Section 133 applies strictly to public nuisances affecting the general community, not private disputes between neighbors.",
          "Empowered Magistrates: District Magistrate, or an Executive Magistrate specially empowered.",
          "Consequence of Non-Compliance: If the party does not perform the act or show cause, they become liable to prosecution under Section 188 of the Penal Code, and the order is made absolute."
        ]
      },
      {
        sectionNo: "Section 144",
        title: "Urgent Temporary Orders in Cases of Apprehended Danger",
        statutoryText: "Section 144: (1) In cases where, in the opinion of a District Magistrate, or any other Executive Magistrate specially empowered... there is sufficient ground for proceeding... and immediate prevention or speedy remedy is desirable... such Magistrate may, by a written order stating the material facts of the case... direct any person to abstain from a certain act or to take certain order with certain property in his possession... if such Magistrate considers that such direction is likely to prevent, or tends to prevent, obstruction, annoyance or injury... or danger to human life, health or safety, or a disturbance of the public tranquillity, or a riot or an affray...\n(6) No order under this section shall remain in force for more than two months from the making thereof; unless, in cases of danger to human life, health or safety, or a likelihood of a riot or an affray, the Government by notification in the official Gazette otherwise directs.",
        simplifiedExplanation: "Section 144 is one of the most widely used preventive powers. In urgent situations of apprehended danger, nuisance, or imminent breach of public peace, a District Magistrate or specially empowered Executive Magistrate can issue written directions to the public or specific individuals (e.g., prohibiting gatherings, carrying weapons, or blocking roads). Key rules of Section 144 include:\n1. It is a temporary emergency power. Under Section 144(6), an order cannot remain in force for more than two months (60 days) unless the government extends it by Gazette notification.\n2. In Metropolitan Areas, the Police Commissioner holds this power under local police acts, and Section 144 does not apply directly by the magistrate in the same way.\n3. The order can be passed ex-parte in situations of extreme urgency.",
        elements: [
          "Urgent Prevention: Used for swift action where delays would cause public disturbance, danger to human life, or a riot.",
          "Ex-parte Orders: Can be issued without prior notice to the affected parties in emergencies.",
          "Duration Limitation: Strictly capped at 2 months maximum (Section 144(6)) unless extended by government notification.",
          "Exclusion of Civil Rights: It cannot be used to permanently decide possession or deprive a person of their property rights; its purpose is purely to maintain temporary public order."
        ]
      },
      {
        sectionNo: "Section 145",
        title: "Disputes Concerning Immovable Property (Land/Water)",
        statutoryText: "Section 145: (1) Whenever a Metropolitan Magistrate, or Magistrate of the first class or an Executive Magistrate specially empowered... is satisfied from a police-report or other information that a dispute likely to cause a breach of the peace exists concerning any land or water or the boundaries thereof... he shall make an order in writing, requiring the parties concerned in such dispute to attend his Court... and to put in written statements of their respective claims as respects the fact of actual possession of the subject of dispute...\n(4) ...Provided that, if it appears to the Magistrate that any party has within two months next before the date of such order been forcibly and wrongfully dispossessed, he may treat the party so dispossessed as if he had been in possession at such date...",
        simplifiedExplanation: "Section 145 provides a magisterial mechanism to prevent breaches of peace arising from land or water disputes. Rather than deciding the ultimate civil title or ownership (which is strictly the job of civil courts), the Magistrate only decides the factual question of 'actual possession' on the date of the initial order. Key aspects include:\n1. Scope: Applies to disputes concerning land, water, buildings, markets, crops, or other produce.\n2. The Two-Month Rule (Sec 145(4) Proviso): If a party was forcibly and wrongfully dispossessed within two months prior to the date of the magistrate's initial order, the magistrate can deem that party to still be in possession and restore possession to them.\n3. Attachment (Sec 146): If the magistrate cannot determine who was in possession, or finds that neither was, they can attach the property under Section 146 until a competent civil court decides the rights.",
        elements: [
          "Apprehension of Breach of Peace: The existence of a threatened breach of peace is a mandatory prerequisite for Section 145 jurisdiction.",
          "Factual Possession Only: Magistrate cannot declare title or ownership; they only determine who was in actual physical possession on the date of the order.",
          "Two-Month Dispossession Proviso: Restores possession to a party forcibly evicted within two months before the preliminary order.",
          "Finality of Order: The magistrate's order stands until a competent civil court determines actual legal title and possession rights.",
          "Attachment under Sec 146: Property can be attached and a receiver appointed if possession is indeterminate."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Abdul Latif v. State",
        citation: "35 DLR 102",
        court: "High Court Division of Bangladesh",
        facts: "In a proceeding under Section 145, the Magistrate declared the possession of the first party based on title deeds, without examining oral or documentary evidence of actual physical possession on the date of the preliminary order.",
        held: "The HCD set aside the order, holding that under Section 145, the Magistrate's jurisdiction is strictly confined to finding out who was in 'actual physical possession' at the date of the initial order, irrespective of the legal title. Title deeds are only relevant to assist in understanding the nature of actual possession.",
        significance: "Establishes that Section 145 proceedings are strictly possessory and factual, not a substitute for a civil court's title determination."
      },
      {
        title: "Mst. Haseen Ara Begum v. State & Others",
        citation: "41 DLR (AD) 55",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The appellant was forcibly dispossessed from her residential building. She immediately filed a petition under Section 145, but the magistrate failed to pass the preliminary order within two months of her eviction. The opposite party argued that since the preliminary order was passed after two months, she could not get the benefit of the Section 145(4) proviso.",
        held: "The Appellate Division held that a party who has been forcibly and wrongfully dispossessed must not suffer due to court delays in passing the preliminary order. If the party applied to the court diligently, the court has the power to treat her as being in possession under the 145(4) proviso.",
        significance: "Protects dispossessed citizens from being penalized by judicial delays in issuing Section 145 preliminary orders."
      },
      {
        title: "State v. Md. Akbar and Others",
        citation: "50 DLR 214",
        court: "High Court Division of Bangladesh",
        facts: "An Executive Magistrate issued a general order under Section 144 prohibiting the public from entering a disputed piece of land, but kept the order in force indefinitely for over six months without any government gazette notification.",
        held: "The HCD held that an order under Section 144 is strictly transient and expires automatically after two months under Section 144(6). Keeping a Section 144 order active beyond two months without a statutory Gazette notification is illegal, ultra vires, and void.",
        significance: "Reinforces the strict temporary duration limit of Section 144 orders to prevent executive overreach."
      }
    ],
    maxims: [
      {
        maxim: "Salus populi suprema lex esto",
        translation: "The safety of the people shall be the supreme law.",
        application: "This is the primary underlying justification for the existence of preventive chapters in the CrPC (Sections 107, 133, 144). Individual rights are temporarily curtailed or regulated to preserve the safety, peace, and tranquility of the general community."
      },
      {
        maxim: "Possessio contra omnes valet praeter eum cui ius sit",
        translation: "Possession is sufficient against all except him who has the right.",
        application: "Highly applicable to Section 145. The magistrate protects the party in actual physical possession against any forcible trespassers or illegal evictions, leaving the question of absolute legal right (title) to be decided in a proper civil court."
      },
      {
        maxim: "Ubi jus ibi remedium",
        translation: "Where there is a right, there is a remedy.",
        application: "Under Section 133, the public has a collective right to use roads, waterways, and enjoy a healthy environment. The conditional removal order acts as a swift summary remedy to enforce this public right against unlawful polluters or obstructers."
      }
    ],
    mcqs: [
      {
        id: "mcq-11-1",
        question: "What is the maximum period for which a person can be ordered to execute a bond for keeping the peace under Section 107 of the CrPC?",
        options: [
          { id: "a", text: "Six months" },
          { id: "b", text: "One year" },
          { id: "c", text: "Two years" },
          { id: "d", text: "Three years" }
        ],
        correctOptionId: "b",
        explanation: "Section 107(1) of the CrPC explicitly states that the Magistrate may require a person to show cause why they should not execute a bond for keeping the peace for a period not exceeding 'one year'."
      },
      {
        id: "mcq-11-2",
        question: "Under Section 117(2) of the CrPC, an inquiry into the truth of the information regarding security for keeping the peace must generally be completed within:",
        options: [
          { id: "a", text: "Two months" },
          { id: "b", text: "Three months" },
          { id: "c", text: "Six months" },
          { id: "d", text: "One year" }
        ],
        correctOptionId: "c",
        explanation: "The inquiry into preventive security bonds under Section 117 of the CrPC must be completed within six months from its commencement, as per standard procedural schedules."
      },
      {
        id: "mcq-11-3",
        question: "Which of the following Magistrates is primarily empowered to pass a conditional order for the removal of a public nuisance under Section 133 of the CrPC?",
        options: [
          { id: "a", text: "Chief Metropolitan Magistrate" },
          { id: "b", text: "District Magistrate or specially empowered Executive Magistrate" },
          { id: "c", text: "Magistrate of the Third Class" },
          { id: "d", text: "Joint Sessions Judge" }
        ],
        correctOptionId: "b",
        explanation: "Section 133(1) of the CrPC empowers a District Magistrate or an Executive Magistrate specially empowered by the Government to issue conditional public nuisance orders."
      },
      {
        id: "mcq-11-4",
        question: "Unless extended by the Government via Gazetted notification, a temporary order issued under Section 144 of the CrPC remains in force for a maximum period of:",
        options: [
          { id: "a", text: "30 days" },
          { id: "b", text: "Two months" },
          { id: "c", text: "Six months" },
          { id: "d", text: "One year" }
        ],
        correctOptionId: "b",
        explanation: "Section 144(6) specifies that no order under this section shall remain in force for more than 'two months' from the making thereof."
      },
      {
        id: "mcq-11-5",
        question: "Under Section 145 of the CrPC, what is the core subject-matter that gives rise to the Magistrate's jurisdiction?",
        options: [
          { id: "a", text: "A dispute likely to cause a breach of the peace concerning land or water" },
          { id: "b", text: "A matrimonial dispute regarding dower and maintenance" },
          { id: "c", text: "An offense of theft or criminal trespass inside a house" },
          { id: "d", text: "A contractual dispute between commercial partners" }
        ],
        correctOptionId: "a",
        explanation: "Section 145(1) states that the dispute must be likely to cause a breach of the peace, and it must concern any 'land or water or the boundaries thereof'."
      },
      {
        id: "mcq-11-6",
        question: "Under the proviso to Section 145(4) of the CrPC, a Magistrate can treat a party as being in possession if they were forcibly and wrongfully dispossessed within how long before the preliminary order?",
        options: [
          { id: "a", text: "One month" },
          { id: "b", text: "Two months" },
          { id: "c", text: "Three months" },
          { id: "d", text: "Six months" }
        ],
        correctOptionId: "b",
        explanation: "The proviso to Section 145(4) allows the magistrate to treat any party who has been forcibly and wrongfully dispossessed within 'two months next before the date of such order' as if they had been in possession."
      },
      {
        id: "mcq-11-7",
        question: "If a Magistrate under Section 145 cannot decide which party was in possession of the disputed property, what action can they take under Section 146?",
        options: [
          { id: "a", text: "Order the property to be demolished" },
          { id: "b", text: "Attach the subject of dispute until a competent civil court decides the rights" },
          { id: "c", text: "Sell the property at a public auction immediately" },
          { id: "d", text: "Declare both parties as co-owners of the property" }
        ],
        correctOptionId: "b",
        explanation: "Section 146(1) provides that if the Magistrate decides that none of the parties was in possession, or is unable to determine possession, they may attach the property until a competent court determines the rights."
      },
      {
        id: "mcq-11-8",
        question: "In Section 145 proceedings, which of the following questions is the Magistrate strictly prohibited from deciding?",
        options: [
          { id: "a", text: "The question of actual physical possession" },
          { id: "b", text: "The question of a threatened breach of the peace" },
          { id: "c", text: "The question of legal title or ownership of the property" },
          { id: "d", text: "The question of a forcible eviction within two months" }
        ],
        correctOptionId: "c",
        explanation: "As established in Abdul Latif v. State, a magistrate in Section 145 has no jurisdiction to decide legal title or ownership, which is exclusively within the province of a civil court."
      },
      {
        id: "mcq-11-9",
        question: "Which landmark case of the Supreme Court of Bangladesh held that court delays should not prevent a dispossessed party from receiving protection under the Section 145(4) proviso?",
        options: [
          { id: "a", text: "Secretary, Ministry of Finance v. Masdar Hossain" },
          { id: "b", text: "Mst. Haseen Ara Begum v. State & Others" },
          { id: "c", text: "State v. Md. Shafi" },
          { id: "d", text: "Blast v. Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "In Mst. Haseen Ara Begum v. State, the Appellate Division held that procedural or court delays in signing the preliminary order must not deprive a diligent applicant of the benefit of the two-month dispossession proviso."
      },
      {
        id: "mcq-11-10",
        question: "Who holds the power to pass orders similar to Section 144 within Metropolitan Areas in Bangladesh?",
        options: [
          { id: "a", text: "The Police Commissioner" },
          { id: "b", text: "The Chief Metropolitan Magistrate" },
          { id: "c", text: "The Metropolitan Sessions Judge" },
          { id: "d", text: "The Mayor of the City Corporation" }
        ],
        correctOptionId: "a",
        explanation: "In Metropolitan Areas, the power to issue urgent public order restrictions is vested in the Police Commissioner under respective Metropolitan Police Acts, rather than the Magistrate."
      }
    ]
  },
  {
    id: "chapter-12",
    title: "Chapter 12: CrPC - FIR, Police Diaries & Investigation",
    subject: "The Code of Criminal Procedure, 1898",
    isCompleted: true,
    quickSummary: "This chapter covers the entry-point of the criminal justice system: the registration of the First Information Report (FIR), police powers of oral examination, recording of confessions under magisterial supervision, safeguards against arbitrary police remand, and the submission of the final police investigation report.",
    studyStrategy: "You must fully master the procedural pathways of an investigation. Memorize the distinction between Section 154 (FIR for cognizable cases) and Section 155 (GD entry for non-cognizable cases), the statutory bars of Section 162 on signing police statements, the strict voluntary verification steps under Section 164, the landmark BLAST guidelines on Section 167 remand, and the Naraji (protest petition) remedy against a police Final Report under Section 173.",
    sections: [
      {
        sectionNo: "Section 154 & 155",
        title: "First Information Report (FIR) and General Diary (GD)",
        statutoryText: "Section 154: Every information relating to the commission of a cognizable offence if given orally to an officer in charge of a police-station, shall be reduced to writing by him or under his direction, and be read over to the informant; and every such information, whether given in writing or reduced to writing as aforesaid, shall be signed by the person giving it...\nSection 155: (1) When information is given to an officer in charge of a police-station of the commission within the limits of such station of a non-cognizable offence, he shall enter in a book to be kept as aforesaid the substance of such information and refer the informant to the Magistrate.",
        simplifiedExplanation: "An FIR (Section 154) is the first information of a cognizable offense given to the police, setting the criminal law in motion. If the offense is cognizable, the officer-in-charge is legally bound to record it, and can start an investigation without a magistrate's order. If the information relates to a non-cognizable offense (Section 155), the officer cannot investigate without a magistrate's permission and must record the information in the General Diary (GD) and refer the informant to the magistrate.",
        elements: [
          "Cognizable Offence (Sec 154): The police officer is mandatorily required to register an FIR and has the power to arrest without warrant and investigate without a magistrate's order.",
          "Signature Requirement: The FIR must be signed by the informant; a copy must be given to them free of cost.",
          "Non-Cognizable Offence (Sec 155): Must be entered in the General Diary (GD). No police officer can investigate a non-cognizable case without the order of a Magistrate.",
          "Evidentiary Value: An FIR is NOT substantive evidence. It can only be used to corroborate (under Sec 157 Evidence Act) or contradict (under Sec 145 Evidence Act) the maker of the FIR."
        ]
      },
      {
        sectionNo: "Sections 161 & 162",
        title: "Examination of Witnesses by Police and Use of Statements",
        statutoryText: "Section 161: (1) Any police-officer making an investigation... may examine orally any person supposed to be acquainted with the facts and circumstances of the case...\nSection 162: (1) No statement made by any person to a police-officer in the course of an investigation under this Chapter shall, if reduced to writing, be signed by the person making it; nor shall any such statement or any record thereof... be used for any purpose... save as hereinafter provided...",
        simplifiedExplanation: "Under Section 161, a police officer investigating a crime can orally examine anyone who knows the facts. These statements can be reduced to writing. Crucially, Section 162 bars the witness from signing this statement. It explicitly prohibits using Section 161 statements as substantive evidence in trial. They can ONLY be used by the defense (or by the prosecution with the court's permission) to contradict the witness when they testify on the stand, as provided under Section 145 of the Evidence Act.",
        elements: [
          "Duty to Answer: Any person examined under Section 161 is bound to answer truly all questions, except those which would expose them to a criminal charge or forfeiture.",
          "No Signature (Sec 162): The statement recorded must never be signed by the witness. This protects witnesses from being bound to coerced police accounts.",
          "Use at Trial: Strictly restricted. Statements cannot be used as substantive evidence. They are used solely to expose contradictions between what the witness told the police and what they say in court."
        ]
      },
      {
        sectionNo: "Section 164",
        title: "Recording of Confessions and Statements by Magistrates",
        statutoryText: "Section 164: (1) Any Metropolitan Magistrate, any Magistrate of the first class, and any Magistrate of the second class specially empowered... may, if he is not a police-officer, record any confession or statement made to him in the course of an investigation...\n(3) A Magistrate shall, before recording any such confession, explain to the person making it that he is not bound to make a confession and that if he does so it may be used as evidence against him and no Magistrate shall record any such confession unless, upon questioning the person making it, he has reason to believe that it was made voluntarily.",
        simplifiedExplanation: "Section 164 allows Metropolitan Magistrates or First Class Magistrates (and specially empowered Second Class Magistrates) to record confessions or statements during an active investigation. Because a confession is a highly damaging piece of evidence, strict statutory safeguards are mandated:\n1. The Magistrate must warn the accused that they are not bound to confess and that any confession can be used against them.\n2. The Magistrate must question the accused to ensure the confession is voluntary (free from police torture or coercion).\n3. The Magistrate must sign a statutory certificate of voluntariness at the foot of the record.",
        elements: [
          "Authorized Magistrates: Only Metropolitan Magistrates, 1st Class Magistrates, or specially empowered 2nd Class Magistrates (never a police officer who is also a magistrate).",
          "Mandatory Warning: The accused must be told they are under no obligation to confess, and that a confession can be used to convict them.",
          "Belief of Voluntariness: The Magistrate must be personally satisfied through questioning that no threats, promises, or torture were used.",
          "Certificate of Compliance: The Magistrate must append a signed memorandum certifying that they explained the warning and believe the confession was voluntary."
        ]
      },
      {
        sectionNo: "Section 167",
        title: "Procedure when Investigation Cannot be Completed in 24 Hours (Remand)",
        statutoryText: "Section 167: (1) Whenever any person is arrested and detained in custody, and it appears that the investigation... cannot be completed within the period of twenty-four hours... and there are grounds for believing that the accusation or information is well-founded, the officer in charge... shall forthwith transmit to the nearest Magistrate... a copy of the entries in the diary... and shall at the same time forward the accused to such Magistrate...\n(2) The Magistrate... may... authorize the detention of the accused in such custody as such Magistrate thinks fit, for a term not exceeding fifteen days in the whole...",
        simplifiedExplanation: "Under Article 33 of the Constitution and Section 61 of the CrPC, an arrested person cannot be held by the police for more than 24 hours. If the investigation is incomplete, the police must forward the accused to a Magistrate to request 'police remand' (custody in police cells) or judicial remand (jail custody) under Section 167. Remand can only be granted up to a maximum of 15 days in total. In Bangladesh, the Supreme Court has issued strict, legally binding guidelines (via the BLAST case) to protect detainees from torture during police remand.",
        elements: [
          "24-Hour Rule: The fundamental constitutional and statutory limit of police custody without judicial authorization.",
          "Magisterial Authority: Only a Magistrate can extend detention, either to police custody (remand) or prison (judicial custody).",
          "Fifteen-Day Cap: The maximum duration of remand in police custody is 15 days in the aggregate.",
          "Recording of Reasons: The Magistrate is required to record their reasons in writing if they authorize police custody."
        ]
      },
      {
        sectionNo: "Sections 172 & 173",
        title: "Police Case Diary and the Final Police Report (Charge Sheet / Naraji)",
        statutoryText: "Section 172: (1) Every police-officer making an investigation... shall day by day enter his proceedings in the investigation in a diary...\nSection 173: (1) Every investigation... shall be completed without unnecessary delay, and... the officer in charge of the police-station shall... forward to a Magistrate a report... in the form prescribed by the Government...",
        simplifiedExplanation: "These sections govern the conclusion of a police investigation:\n1. Section 172 (Case Diary): The investigating officer must keep a daily log of their investigation. It is not substantive evidence, but the court can use it to aid in trial, and the officer can use it to refresh their memory.\n2. Section 173 (Police Report): The final report submitted to the Magistrate. It has two forms: (a) Charge Sheet (recommending trial because an offense is found) and (b) Final Report (recommending release due to lack of evidence or mistake of fact).\n3. Naraji Petition: If the police file a 'Final Report' dismissing the case, the complainant can file a protest petition called a 'Naraji'. The court can reject the Final Report, order a fresh investigation, or treat the Naraji as a complaint under Section 200 of the CrPC.",
        elements: [
          "Case Diary (Sec 172): A detailed daily record of steps taken, places visited, and statements collected. Used only for court aid and memory refreshment.",
          "Charge Sheet (Sec 173): Submitted when there is prime facie evidence of guilt. The Magistrate can then take cognizance of the offense under Section 190.",
          "Final Report (Sec 173): Submitted when evidence is insufficient or the case is a mistake of law/fact.",
          "Naraji (Protest Petition): The complainant's primary judicial remedy to contest a police Final Report and demand a trial or judicial inquiry."
        ]
      }
    ],
    caseLaws: [
      {
        title: "BLAST and Others v. Bangladesh",
        citation: "55 DLR 363",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "A public interest litigation (PIL) was filed by Bangladesh Legal Aid and Services Trust (BLAST) challenging the arbitrary exercise of powers of arrest without warrant under Section 54 and the abuse of police remand under Section 167 of the CrPC, which often led to custodial torture, death, and human rights violations.",
        held: "The High Court Division laid down 15 mandatory guidelines to prevent police torture during arrest and remand. These include: the police must disclose their identity during arrest, record reasons in a diary, inform the arrestee's family, allow the arrestee to meet their lawyer, and have a medical doctor examine the arrestee before and after the remand period.",
        significance: "This is the most celebrated constitutional precedent on custodial safety and remand, establishing the rule of law over arbitrary police custody."
      },
      {
        title: "Abul Hossain v. State",
        citation: "45 DLR (AD) 119",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "Following a police investigation, a Final Report was submitted exonerating the accused. The complainant filed a 'Naraji' (protest petition) before the Magistrate. The Magistrate rejected the Final Report and directly issued process against the accused based on the Naraji petition without conducting a proper examination of the complainant under Section 200.",
        held: "The Appellate Division held that when a complainant files a Naraji petition contesting a police report, the Magistrate must treat the Naraji petition as a regular complaint. Therefore, the Magistrate must examine the complainant on oath under Section 200 of the CrPC before taking cognizance or issuing process.",
        significance: "Establishes the strict procedural mandate that a Naraji petition must be handled as a complaint under Section 200."
      },
      {
        title: "State v. Md. Lal Mia",
        citation: "39 DLR 112",
        court: "High Court Division of Bangladesh",
        facts: "The accused confessed to a murder during a magisterial inquiry. During trial, he retracted the confession, claiming it was beaten out of him by the police. The trial court convicted him solely on the retracted confession without verifying if the magistrate had strictly complied with Section 164 warnings.",
        held: "The HCD set aside the conviction, holding that a retracted confession cannot form the sole basis of a conviction unless it is corroborated by independent evidence, and the court must strictly satisfy itself that the recording magistrate complied with all procedural safeguards under Section 164.",
        significance: "Highlights that confessions are weak evidence if retracted, requiring independent corroboration and strict compliance with Section 164."
      }
    ],
    maxims: [
      {
        maxim: "Nemo debet prodere se ipsum",
        translation: "No one should be forced to accuse himself.",
        application: "This is the fundamental principle behind Section 164 of the CrPC. The Magistrate is required to warn the accused that they are not bound to confess, ensuring that any statement is voluntary and free from self-incrimination under duress."
      },
      {
        maxim: "Audi alteram partem",
        translation: "No man should be condemned unheard.",
        application: "Applies directly to Naraji petitions under Section 173. The Magistrate cannot accept a police Final Report and dismiss the case without first giving the informant/complainant an opportunity to be heard through a Naraji."
      },
      {
        maxim: "Interest reipublicae ut sit finis litium",
        translation: "It is in the interest of the state that there be an end to litigation.",
        application: "Applicable to the mandatory statutory timeline under Section 173, requiring police investigations to be completed without unnecessary delay to prevent indefinite pre-trial detention."
      }
    ],
    mcqs: [
      {
        id: "mcq-12-1",
        question: "When a police officer receives oral information regarding a cognizable offense under Section 154 of the CrPC, what is their immediate legal duty?",
        options: [
          { id: "a", text: "Refer the informant to the local Magistrate" },
          { id: "b", text: "Enter it into the General Diary and wait for an investigation order" },
          { id: "c", text: "Reduce it to writing, read it to the informant, and obtain their signature" },
          { id: "d", text: "Consult with a defense lawyer before taking action" }
        ],
        correctOptionId: "c",
        explanation: "Section 154 mandatorily requires the officer-in-charge to reduce oral information of a cognizable offense to writing, read it over to the informant, and have them sign it (forming the FIR)."
      },
      {
        id: "mcq-12-2",
        question: "Under Section 155 of the CrPC, what must a police officer do if they receive information about a non-cognizable offense?",
        options: [
          { id: "a", text: "Investigate immediately without a warrant" },
          { id: "b", text: "Record the substance in the General Diary and refer the informant to the Magistrate" },
          { id: "c", text: "Arrest the suspect immediately" },
          { id: "d", text: "Refuse to record any information" }
        ],
        correctOptionId: "b",
        explanation: "Section 155(1) states that for non-cognizable offenses, the officer must record the substance of the information in the General Diary and refer the informant to the Magistrate. They cannot investigate without an order."
      },
      {
        id: "mcq-12-3",
        question: "What is the primary evidentiary value of a statement recorded by the police under Section 161 of the CrPC during trial?",
        options: [
          { id: "a", text: "It is substantive evidence of guilt" },
          { id: "b", text: "It can only be used to contradict the witness under Section 145 of the Evidence Act" },
          { id: "c", text: "It can be used as a confession of the witness" },
          { id: "d", text: "It has no legal use whatsoever" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 162 of the CrPC, statements recorded by police under Section 161 cannot be used as substantive evidence; they can only be used to contradict the witness during cross-examination."
      },
      {
        id: "mcq-12-4",
        question: "Which of the following Magistrates is NOT empowered to record a confession or statement under Section 164 of the CrPC?",
        options: [
          { id: "a", text: "A Metropolitan Magistrate" },
          { id: "b", text: "A Magistrate of the First Class" },
          { id: "c", text: "A Magistrate of the Third Class" },
          { id: "d", text: "A Magistrate of the Second Class specially empowered by the Government" }
        ],
        correctOptionId: "c",
        explanation: "Section 164(1) authorizes Metropolitan Magistrates, First Class Magistrates, and specially empowered Second Class Magistrates to record confessions. Third Class Magistrates do not hold this power."
      },
      {
        id: "mcq-12-5",
        question: "Before recording a confession under Section 164, what warning must the Magistrate mandatorily give to the accused?",
        options: [
          { id: "a", text: "That they have a right to remain silent until they reach a prison" },
          { id: "b", text: "That they are not bound to make a confession, and if they do, it may be used as evidence against them" },
          { id: "c", text: "That they will receive a lighter sentence if they confess immediately" },
          { id: "d", text: "That their confession must be signed by the police officer in charge" }
        ],
        correctOptionId: "b",
        explanation: "Section 164(3) states that the Magistrate must explain to the accused that they are not bound to confess, and if they do, it can be used as evidence against them."
      },
      {
        id: "mcq-12-6",
        question: "Under Section 167 of the CrPC, what is the maximum aggregate period of police remand (custody) that a Magistrate can authorize?",
        options: [
          { id: "a", text: "7 days" },
          { id: "b", text: "15 days" },
          { id: "c", text: "30 days" },
          { id: "d", text: "90 days" }
        ],
        correctOptionId: "b",
        explanation: "Section 167(2) limits the aggregate period of remand in police custody to fifteen days in the whole."
      },
      {
        id: "mcq-12-7",
        question: "Which landmark judgment of the Supreme Court of Bangladesh laid down 15 comprehensive guidelines regarding arrest and police remand under Section 167?",
        options: [
          { id: "a", text: "Secretary, Ministry of Finance v. Masdar Hossain" },
          { id: "b", text: "BLAST v. Bangladesh" },
          { id: "c", text: "Dr. Shipra Chaudhury v. State" },
          { id: "d", text: "Kazi Mukhlesur Rahman v. Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "BLAST v. Bangladesh (55 DLR 363) is the seminal case that laid down 15 safeguards and guidelines concerning arrest without warrant and remand under Section 167."
      },
      {
        id: "mcq-12-8",
        question: "Under Section 173 of the CrPC, if an investigating officer concludes that there is insufficient evidence to justify forwarding the accused for trial, they submit a:",
        options: [
          { id: "a", text: "Charge Sheet" },
          { id: "b", text: "Final Report" },
          { id: "c", text: "General Diary entry" },
          { id: "d", text: "Warrant of Arrest" }
        ],
        correctOptionId: "b",
        explanation: "If there is no prima facie case or evidence is insufficient, the police submit a 'Final Report' under Section 173, recommending that the accused be released from custody."
      },
      {
        id: "mcq-12-9",
        question: "According to the Appellate Division's ruling in Abul Hossain v. State, how must a Magistrate treat a Naraji (protest petition) filed against a police Final Report?",
        options: [
          { id: "a", text: "As a petition for bail" },
          { id: "b", text: "As a fresh regular complaint under Section 200 of the CrPC" },
          { id: "c", text: "As a civil plaint under the CPC" },
          { id: "d", text: "They must reject it summarily" }
        ],
        correctOptionId: "b",
        explanation: "In Abul Hossain v. State, the Appellate Division ruled that a Naraji (protest petition) must be treated as a fresh complaint under Section 200, requiring examination of the complainant on oath."
      },
      {
        id: "mcq-12-10",
        question: "Which of the following is true regarding a police officer's Case Diary under Section 172 of the CrPC?",
        options: [
          { id: "a", text: "It can be used as substantive evidence of the accused's guilt during trial" },
          { id: "b", text: "It cannot be used as substantive evidence, but may aid the court in the inquiry or trial" },
          { id: "c", text: "It is a public document accessible to any member of the general public" },
          { id: "d", text: "It is signed by all witnesses examined during the investigation" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 172(2), a criminal court can send for and use the police case diaries, not as evidence in the case, but to aid it in such inquiry or trial."
      }
    ]
  },
  {
    id: "chapter-13",
    title: "Chapter 13: CrPC - Trials & Commencement of Proceedings",
    subject: "The Code of Criminal Procedure, 1898",
    isCompleted: true,
    quickSummary: "This chapter covers the commencement of criminal proceedings through private complaints, including the mandatory examination of the complainant on oath (Section 200) and the dismissal of groundless complaints (Section 203). It further details the comprehensive trial procedures before Magistrate Courts (Sections 241-250) and Courts of Session (Sections 265A-265L), emphasizing charge framing, acquittal, discharge, and statutory timelines under Section 339C.",
    studyStrategy: "Master the procedural steps of Complaint Register (C.R.) cases, focusing on the mandatory nature of Section 200. For trials, clearly distinguish between pre-charge 'discharge' (Sections 241A & 265C) and post-charge 'acquittal' (Sections 245 & 265K). Memorize the strict statutory trial limits under Section 339C (180 days for Magistrates, 360 days for Sessions) and high-yield precedents on the standard of a 'prima facie' case.",
    sections: [
      {
        sectionNo: "Sections 200 to 204",
        title: "Commencement of Proceedings on Complaint (C.R. Cases)",
        statutoryText: "Section 200: A Magistrate taking cognizance of an offence on complaint shall at once examine the complainant upon oath... and the substance of the examination shall be reduced to writing and be signed by the complainant...\nSection 202: (1) Any Magistrate, on receipt of a complaint of an offence of which he is authorised to take cognizance... may, if he thinks fit, postpone the issue of process for compelling the attendance of the person accused, and either enquire into the case himself or direct an inquiry or investigation to be made...\nSection 203: The Magistrate before whom a complaint is made... may dismiss the complaint, if, after considering the statement on oath (if any) of the complainant and the result of the investigation or inquiry (if any) under section 202, there is in his judgment no sufficient ground for proceeding. In such cases he shall briefly record his reasons for so doing.",
        simplifiedExplanation: "These sections outline how a Magistrate initiates proceedings on a private complaint (forming a Complaint Register or 'C.R.' Case, as opposed to a police G.R. case):\n1. Section 200 (Oath): The Magistrate must immediately examine the complainant on oath. This is mandatory and protects against frivolous claims. (Exceptions: complaints by public servants or courts).\n2. Section 202 (Postponement): If the Magistrate wants to verify the truth of the complaint first, they can postpone issuing process and conduct an inquiry themselves or refer it to the police.\n3. Section 203 (Dismissal): If there is no prima facie ground, the Magistrate can dismiss the complaint but MUST record brief reasons. Reversal/Revision is possible.\n4. Section 204 (Issue of Process): If a prima facie case is found, the Magistrate issues a summons (for summons cases) or warrant (for warrant cases) to compel the accused to appear.",
        elements: [
          "Mandatory Examination (Sec 200): Complainant must be examined on oath immediately, and the substance written down and signed.",
          "Truth Verification (Sec 202): Magistrate may order a local inquiry or police investigation before summoning the accused.",
          "Threshold Dismissal (Sec 203): Failure to show sufficient grounds results in dismissal; requires recorded reasons.",
          "Process Issuance (Sec 204): Summons or warrant is issued to formally commence judicial presence of the accused."
        ]
      },
      {
        sectionNo: "Sections 241A to 250",
        title: "Trial of Cases before Magistrates",
        statutoryText: "Section 241A: When the accused appears or is brought before the Magistrate, and if the Magistrate considers the charge to be groundless, he shall discharge the accused and record his reasons...\nSection 242: If... the Magistrate is of opinion that there is ground for presuming that the accused has committed an offence... a charge shall be framed...\nSection 245: (1) If the Magistrate upon taking all the evidence... finds the accused not guilty, he shall record an order of acquittal...\nSection 250: (1) If in any case... the Magistrate discharges or acquits the accused, and is of opinion that the accusation... was false and either frivolous or vexatious, the Magistrate may... order [the complainant] to pay compensation...",
        simplifiedExplanation: "These sections govern the full trial procedure in Magistrate courts in Bangladesh:\n1. Discharge (Section 241A): Before a trial begins, the Magistrate must review the police report and documents. If the accusation is groundless, the Magistrate discharges the accused without framing charges.\n2. Framing Charge (Section 242): If a prima facie case exists, charges are framed, read out, and explained to the accused, who pleads 'guilty' or 'not guilty'.\n3. Evidence (Section 244): The prosecution must call its witnesses. The accused is then called to enter upon his defense and produce evidence.\n4. Judgment (Section 245): Based on the merits of the evidence, the Magistrate either acquits (not guilty) or convicts (guilty) the accused.\n5. Complaining Abuses: Section 247 (acquittal if the complainant fails to appear in summons cases), Section 248 (withdrawal of complaint), and Section 250 (awarding compensation to the accused for frivolous or vexatious prosecution).",
        elements: [
          "Pre-Charge Discharge (Sec 241A): Eliminates groundless trials early; does not bar subsequent trials as it's not an acquittal.",
          "Formal Charge Framing (Sec 242): Crucial trial transition where specific allegations are put to the accused.",
          "Burden of Proof (Sec 244): Prosecution must present evidence first to prove guilt beyond reasonable doubt.",
          "Merit Acquittal (Sec 245): A final verdict of innocence that permanently bars any retrial for the same offence."
        ]
      },
      {
        sectionNo: "Sections 265A to 265L",
        title: "Trial before the Court of Session",
        statutoryText: "Section 265A: In every trial before a Court of Session, the prosecution shall be conducted by a Public Prosecutor.\nSection 265C: If, upon consideration of the record... the Court of Session considers that there is no sufficient ground for proceeding against the accused, he shall discharge the accused and record his reasons...\nSection 265D: If... the Court is of opinion that there is ground for presuming that the accused has committed an offence... he shall frame in writing a charge...\nSection 265H: If... the Court of Session considers that there is no evidence that the accused committed the offence, the Court shall record an order of acquittal.",
        simplifiedExplanation: "Trials in the Court of Session handle more serious offenses and follow a structured procedural flow led by the state:\n1. Role of PP (Section 265A): The Public Prosecutor must open and conduct all sessions trials.\n2. Session-Level Discharge (Section 265C): The Sessions Judge examines the records and hears both sides. If no prima facie case exists, the judge discharges the accused and writes down the reasons.\n3. Session-Level Charge Framing (Section 265D): Formal charges are drafted and read to the accused.\n4. Mid-trial Acquittal (Section 265H): Uniquely, if after prosecution evidence is completed, the judge finds absolutely 'no evidence' linking the accused to the crime, the court can enter an immediate order of acquittal without calling the defense.\n5. Final Judgment (Section 265K): After hearing both sides and analyzing arguments, the judge writes a reasoned judgment of acquittal or conviction.",
        elements: [
          "Prosecution by Public Prosecutor (Sec 265A): Mandates state representation in grave felony trials.",
          "Sessions Discharge (Sec 265C): Groundless indictments are thrown out before the trial begins.",
          "Mid-Trial Acquittal (Sec 265H): Protects the accused from entering defense when prosecution has failed to establish any evidence.",
          "Final Judgment (Sec 265K): Resolves the trial with a reasoned and written verdict of acquittal or conviction."
        ]
      },
      {
        sectionNo: "Section 339C",
        title: "Statutory Time Limitations for Completing Trials",
        statutoryText: "Section 339C: (1) A Magistrate shall conclude the trial of a case within one hundred and eighty days from the date on which the case is ready for trial.\n(2) A Sessions Judge, Metropolitan Sessions Judge, or an Additional Sessions Judge shall conclude the trial of a case within three hundred and sixty days from the date on which the case is received for trial.",
        simplifiedExplanation: "To prevent infinite pre-trial detention and ensure a speedy trial (which is a constitutional right), Section 339C of the CrPC establishes strict, mandatory timelines for the conclusion of criminal trials in Bangladesh:\n1. Magistrate Court Trials: Must be completed within 180 days from the date the case is declared ready for trial.\n2. Sessions Court Trials: Must be completed within 360 days from the date the case is received by the sessions court.\n3. Extension & Impact: If a trial cannot be completed within these limits, the judge must explain the delay in writing to the High Court Division. While a delay does not automatically result in an acquittal, it is a powerful ground for the defense to petition for bail.",
        elements: [
          "Magistrate Trial Limit: 180 days from the 'ready for trial' milestone.",
          "Sessions Trial Limit: 360 days from the date of case receipt.",
          "Delay Accountability: Mandatory written explanation to the High Court Division for any delays.",
          "Bail Justification: Exceeding these limits represents a strong, statutory basis to demand bail."
        ]
      }
    ],
    caseLaws: [
      {
        title: "State v. Sheikh Hasina and Others",
        citation: "60 DLR (AD) 90",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The state had initiated criminal charges against the accused, and the trial court proceeded to frame charges. The framing of charges was challenged on the ground that the materials on record did not show any prima facie case of guilt, and the trial court had failed to properly evaluate the defense's submissions regarding discharge.",
        held: "The Appellate Division held that at the stage of framing charges (under Section 241A or 265C), the court's sole duty is to determine if a 'prima facie' case exists. The court does not need to determine whether the evidence is sufficient to secure a conviction beyond reasonable doubt. However, the court must apply its judicial mind to ensure the accusation is not completely groundless.",
        significance: "Established the authoritative standard for charge-framing and discharge in Bangladesh, balancing judicial scrutiny with trial progression."
      },
      {
        title: "Hazrat Ali v. State",
        citation: "50 DLR 341",
        court: "High Court Division of Bangladesh",
        facts: "A complainant filed a private complaint (C.R. Case) alleging fraud and criminal breach of trust. After a brief hearing, the Magistrate dismissed the complaint under Section 203 of the CrPC without recording any reasons for doing so in the order sheet.",
        held: "The High Court Division ruled that an order dismissing a complaint under Section 203 of the CrPC is a judicial order subject to revision. Therefore, the Magistrate must record brief reasons for the dismissal. Failing to record reasons is a material irregularity that vitiates and voids the dismissal order.",
        significance: "Strictly enforces the rule of law on Section 203 dismissals, ensuring that complainants are not shut out of courts arbitrarily."
      },
      {
        title: "A.K.M. Fazlul Hoque v. State",
        citation: "58 DLR 147",
        court: "High Court Division of Bangladesh",
        facts: "The petitioner challenged an order of charge framing passed by a Magistrate, claiming that the undisputed written documents and the FIR itself, taken at face value, did not disclose any offense known to criminal law.",
        held: "The HCD held that if the allegations in the FIR or complaint, even if fully accepted, do not constitute a criminal offense, proceeding with a trial is an abuse of the process of the court. In such cases, the court has a mandatory duty to discharge the accused under Section 241A (or Section 265C).",
        significance: "Underscores that discharge is a valuable right of the accused to prevent malicious and legally untenable prosecutions."
      }
    ],
    maxims: [
      {
        maxim: "Nemo debet bis vexari pro una et eadem causa",
        translation: "No one should be twice vexed for one and the same cause.",
        application: "This is the maxim behind Section 245 & 265K (Acquittal) and Section 403 (Double Jeopardy). Once an accused is formally acquitted on merits, they cannot be prosecuted again for the same offense."
      },
      {
        maxim: "Actori incumbit onus probandi",
        translation: "The burden of proof lies on the plaintiff.",
        application: "Applies to all criminal trials under the CrPC (Sections 244 & 265G). The prosecution bears the sole burden of proving the guilt of the accused beyond a reasonable doubt."
      },
      {
        maxim: "Interest reipublicae ut sit finis litium",
        translation: "It is in the interest of the state that there be an end to litigation.",
        application: "Directly justifies the strict statutory timelines for completing trials under Section 339C, preventing endless trials and ensuring speedy justice."
      }
    ],
    mcqs: [
      {
        id: "mcq-13-1",
        question: "Under Section 200 of the CrPC, what is the immediate, mandatory duty of a Magistrate upon receiving a private complaint?",
        options: [
          { id: "a", text: "Issue a warrant of arrest immediately" },
          { id: "b", text: "Examine the complainant on oath and record the substance in writing" },
          { id: "c", text: "Refer the complaint to the High Court Division" },
          { id: "d", text: "Discharge the accused without any inquiry" }
        ],
        correctOptionId: "b",
        explanation: "Section 200 mandatorily requires the Magistrate taking cognizance of an offense on a complaint to immediately examine the complainant on oath and reduce the substance of the examination to writing."
      },
      {
        id: "mcq-13-2",
        question: "According to the High Court Division's ruling in Hazrat Ali v. State (50 DLR 341), what is the effect if a Magistrate dismisses a complaint under Section 203 without recording reasons?",
        options: [
          { id: "a", text: "The dismissal is valid" },
          { id: "b", text: "The dismissal is void and vitiated by a material irregularity" },
          { id: "c", text: "The case is automatically transferred to the police" },
          { id: "d", text: "The complainant is fined" }
        ],
        correctOptionId: "b",
        explanation: "Hazrat Ali v. State held that because a Section 203 dismissal is a judicial order subject to revision, the Magistrate must record brief reasons, failing which the dismissal is void."
      },
      {
        id: "mcq-13-3",
        question: "What is the primary distinction between a 'Discharge' under Section 241A and an 'Acquittal' under Section 245 of the CrPC?",
        options: [
          { id: "a", text: "Discharge occurs after taking all evidence; Acquittal occurs before trial" },
          { id: "b", text: "Discharge occurs before a charge is framed and does not bar a subsequent trial; Acquittal is a final merit-based verdict that bars any retrial" },
          { id: "c", text: "Discharge can only be ordered by the Sessions Court; Acquittal can only be ordered by a Magistrate" },
          { id: "d", text: "There is no procedural or legal difference" }
        ],
        correctOptionId: "b",
        explanation: "Discharge (Sec 241A) happens before charges are framed and does not trigger Double Jeopardy. Acquittal (Sec 245) is a final, merit-based decision after trial that bars a second trial for the same offense."
      },
      {
        id: "mcq-13-4",
        question: "Under Section 241A or Section 265C of the CrPC, on what ground must the court discharge the accused?",
        options: [
          { id: "a", text: "If the accused has confessed his guilt to the police" },
          { id: "b", text: "If the court considers the charge to be groundless" },
          { id: "c", text: "If the complainant fails to hire a private lawyer" },
          { id: "d", text: "If the trial takes more than 30 days" }
        ],
        correctOptionId: "b",
        explanation: "Both Sections 241A and 265C state that the court must discharge the accused if, after considering the reports and documents and hearing the parties, it considers the charge to be groundless."
      },
      {
        id: "mcq-13-5",
        question: "Who is legally authorized to conduct the prosecution in a trial before the Court of Session under Section 265A of the CrPC?",
        options: [
          { id: "a", text: "The investigating police officer" },
          { id: "b", text: "The Magistrate" },
          { id: "c", text: "A State-appointed Public Prosecutor" },
          { id: "d", text: "The complainant's spouse" }
        ],
        correctOptionId: "c",
        explanation: "Section 265A specifies that in every trial before a Court of Session, the prosecution must be conducted by a Public Prosecutor."
      },
      {
        id: "mcq-13-6",
        question: "Under Section 265H of the CrPC, if a Sessions Judge finds no evidence against the accused after prosecution evidence is closed, the judge can:",
        options: [
          { id: "a", text: "Discharge the accused under Section 265C" },
          { id: "b", text: "Enter an immediate order of Acquittal" },
          { id: "c", text: "Demand a fresh investigation from the police" },
          { id: "d", text: "Refer the case to a Magistrate for summary trial" }
        ],
        correctOptionId: "b",
        explanation: "Section 265H allows the Sessions Judge to immediately acquit the accused if, after taking the prosecution evidence and hearing both sides, the court considers there is no evidence that the accused committed the offense."
      },
      {
        id: "mcq-13-7",
        question: "What is the statutory limit within which a Magistrate must conclude a criminal trial from the date it is ready for trial under Section 339C(1)?",
        options: [
          { id: "a", text: "90 days" },
          { id: "b", text: "120 days" },
          { id: "c", text: "180 days" },
          { id: "d", text: "360 days" }
        ],
        correctOptionId: "c",
        explanation: "Section 339C(1) specifies that a Magistrate must conclude the trial of a case within 180 days from the date on which the case is ready for trial."
      },
      {
        id: "mcq-13-8",
        question: "Under Section 339C(2) of the CrPC, a Sessions Judge must conclude the trial of a case within how many days from the date of case receipt?",
        options: [
          { id: "a", text: "180 days" },
          { id: "b", text: "240 days" },
          { id: "c", text: "300 days" },
          { id: "d", text: "360 days" }
        ],
        correctOptionId: "d",
        explanation: "Section 339C(2) specifies that a Sessions Judge must conclude a trial within 360 days from the date on which the case is received for trial."
      },
      {
        id: "mcq-13-9",
        question: "In State v. Sheikh Hasina (60 DLR (AD) 90), what did the Appellate Division define as the court's core focus at the stage of framing charges?",
        options: [
          { id: "a", text: "Determining whether there is a prima facie case against the accused" },
          { id: "b", text: "Sifting through all evidence to prove guilt beyond reasonable doubt" },
          { id: "c", text: "Cross-examining the defense witnesses" },
          { id: "d", text: "Verifying the physical fitness of the accused" }
        ],
        correctOptionId: "a",
        explanation: "The Supreme Court held that the sole focus at charge framing is to determine if a prima facie case exists, not whether the current materials are sufficient to convict."
      },
      {
        id: "mcq-13-10",
        question: "Which section of the CrPC empowers a Magistrate to order a complainant to pay compensation for false and frivolous accusations?",
        options: [
          { id: "a", text: "Section 241A" },
          { id: "b", text: "Section 242" },
          { id: "c", text: "Section 250" },
          { id: "d", text: "Section 339C" }
        ],
        correctOptionId: "c",
        explanation: "Section 250 of the CrPC empowers a Magistrate to order a complainant to pay compensation to the accused if the allegations are found to be false and either frivolous or vexatious."
      }
    ]
  },
  {
    id: "chapter-14",
    title: "Chapter 14: CrPC - Appeals, Reference, Revision & Bail",
    subject: "The Code of Criminal Procedure, 1898",
    isCompleted: true,
    quickSummary: "This chapter covers the vital remedial and security pathways in criminal procedure: Criminal Appeals (against conviction, acquittal, and sentence under Sections 404-431), Reference to the High Court Division (Sections 432-434), Criminal Revision (Sections 435-439), and the provisions of Bail—including bailable vs. non-bailable offences (Sections 496-497) and anticipatory bail under Section 498.",
    studyStrategy: "Master the statutory limitations for appeals and revisions. Memorize the distinction between Section 417 (Appeal against acquittal) and Section 439 (Revision against acquittal, where no finding of guilt can be substituted). Distinguish between Sections 496, 497, and 498 bail powers, and review landmark decisions such as State v. Zakir Hossain on anticipatory bail and State v. Abdul Kahhar on bail discretion.",
    sections: [
      {
        sectionNo: "Sections 404 to 418",
        title: "Right of Appeal and Appeals against Acquittal / Conviction",
        statutoryText: "Section 404: No appeal shall lie from any judgment or order of a Criminal Court except as provided for by this Code or by any other law for the time being in force.\nSection 410: Any person convicted on a trial held by a Sessions Judge or an Additional Sessions Judge may appeal to the High Court Division.\nSection 417: (1) Subject to sub-section (2), the Government may, in any case, direct the Public Prosecutor to present an appeal to the High Court Division from an original or appellate order of acquittal passed by any Court other than a High Court Division...\n(2) If such an order of acquittal is passed in any case instituted upon complaint, and the Court, on an application made to it by the complainant in this behalf, grants special leave to appeal from the order of acquittal, the complainant may present such an appeal to the High Court Division...",
        simplifiedExplanation: "In criminal law, there is no inherent or natural right of appeal; an appeal is purely a creation of statute (Section 404). If the statute does not explicitly grant a right of appeal, none exists. The CrPC categorizes appeals into three primary types:\n1. Appeal against Conviction (Sec 408 & 410): Filed by the convicted accused to a higher judicial forum (e.g., from a First Class Magistrate to the Sessions Court, or from a Sessions Judge to the High Court Division).\n2. Appeal against Acquittal (Sec 417): Filed to challenge an order releasing the accused. In G.R. (police) cases, the Government directs the Public Prosecutor to file the appeal. In C.R. (complaint) cases, the complainant must first apply to the High Court Division for 'special leave to appeal' within 60 days.\n3. Appeal against Inadequacy of Sentence (Sec 417A): Allows the state or the complainant to appeal if the sentence passed is considered too lenient.",
        elements: [
          "Statutory Right (Sec 404): No automatic right of appeal exists unless explicitly provided by the Code or another law.",
          "Forum for Convictions: Convictions by 1st Class Magistrates are appealed to the Court of Session (Sec 408); convictions by Sessions Judges are appealed to the High Court Division (Sec 410).",
          "Acquittal Appeals (Sec 417): State-driven in police cases; complainant-driven in private cases (requires special leave to appeal from the HCD).",
          "Limitation for Complainant: Private complainants must apply for special leave to appeal against an acquittal within 60 days of the order."
        ]
      },
      {
        sectionNo: "Sections 423 & 430",
        title: "Powers of the Appellate Court and Finality of Judgments",
        statutoryText: "Section 423: (1) The Appellate Court shall then send for the record... and hear the appellant or his pleader... and the Public Prosecutor... and the Court may, if it considers that there is no sufficient ground for interfering, dismiss the appeal, or may-\n(a) in an appeal from an order of acquittal, reverse such order and direct that further inquiry be made, or that the accused be retried... or find him guilty and pass sentence on him...\n(b) in an appeal from a conviction, (1) reverse the finding and sentence, and acquit or discharge the accused, or order him to be retried... or (2) alter the finding, maintaining the sentence, or... (3) with or without altering the finding, reduce the sentence, or... (4) alter the nature of the sentence...\nSection 430: Judgments and orders passed by an Appellate Court upon appeal shall be final, except in the cases provided for in section 417 and Chapter XXXII.",
        simplifiedExplanation: "Section 423 defines the scope of judicial interference allowed during an appeal:\n1. Under Section 423(1)(a) (In Acquittal Appeals): The appellate court has the extraordinary power to reverse an acquittal, find the accused guilty, and pass a sentence directly, or order a fresh investigation/retrial.\n2. Under Section 423(1)(b) (In Conviction Appeals): The court can acquit or discharge the accused, order a retrial, alter the conviction to a different or lesser offense, or reduce/alter the nature of the sentence. Crucially, the court cannot enhance the sentence unless there is a specific appeal for inadequacy filed under Section 417A.\n3. Finality of Judgments (Section 430): Establishes that all appellate decisions are final and conclusive, bringing an end to the litigation, unless revisional jurisdiction (Chapter XXXII) is invoked.",
        elements: [
          "Reversal of Acquittal: Unlike revisional courts, an appellate court has full power to convict an acquitted person directly.",
          "Sentence Modification: The appellate court can alter the nature of a sentence (e.g., from rigorous imprisonment to simple) or reduce it, but cannot enhance it without a Section 417A petition.",
          "Retrial Order: The court can set aside any judgment and order a de novo (fresh) trial if material procedural errors occurred.",
          "Doctrine of Finality (Sec 430): Appellate decisions are final, barring subsequent appeals unless specifically allowed under Section 417 or revisional powers."
        ]
      },
      {
        sectionNo: "Sections 435 to 439",
        title: "Criminal Revision and Reference",
        statutoryText: "Section 435: (1) The High Court Division or any Sessions Judge may call for and examine the record of any proceeding before any inferior Criminal Court... for the purpose of satisfying itself or himself as to the correctness, legality or propriety of any finding, sentence or order...\nSection 439: (1) In the case of any proceeding the record of which has been called for by itself... the High Court Division may, in its discretion, exercise any of the powers conferred on a Court of Appeal by sections 423, 426, 427 and 428... and may enhance the sentence...\n(4) Nothing in this section shall be deemed to authorise the High Court Division to convert a finding of acquittal into one of conviction.\n(5) Where under this Code an appeal lies and no appeal is brought, no proceedings by way of revision shall be entertained at the instance of the party who could have appealed.",
        simplifiedExplanation: "Unlike an appeal, which is a substantive right, Criminal Revision is an extraordinary, discretionary supervisory power of the higher judiciary:\n1. Purpose: To satisfy the Court as to the 'correctness, legality, or propriety' of any order or the 'regularity' of lower court proceedings (Section 435).\n2. Concurrent Jurisdiction: Revisional powers are shared concurrently between Sessions Judges (Section 439A) and the High Court Division (Section 439). A party cannot file a revision in the HCD if they have already filed and lost one in the Sessions Court (bar on double revision).\n3. Absolute Bar on Conviction (Sec 439(4)): In a revision petition against an acquittal, the court can set aside the acquittal and order a retrial, but it is STRICTLY FORBIDDEN from directly convicting the accused. This is a fundamental procedural distinction from an appeal.\n4. Appeal-Bypassing Bar (Sec 439(5)): If a party has a right of appeal but fails to file it, they are legally barred from bypassing the appeal by filing a revisional application.",
        elements: [
          "Supervisory Nature: Revision is not a right of the litigant but a discretionary power of the Court to correct jurisdictional and legal errors.",
          "Strict Acquittal Limit (Sec 439(4)): Revisional courts can never directly convert an acquittal into a conviction; they can only direct a retrial.",
          "No Appeal Bypass (Sec 439(5)): Litigants who sleep on their appellate rights cannot seek revision as an alternative remedy.",
          "Reference (Sec 432): Allows lower courts to refer complex, undecided questions of law directly to the HCD for binding opinions."
        ]
      },
      {
        sectionNo: "Sections 496 & 497",
        title: "Bail in Bailable and Non-Bailable Offenses",
        statutoryText: "Section 496: When any person other than a person accused of a non-bailable offence is arrested or detained without warrant... or appears or is brought before a Court, and is prepared at any time... to give bail, such person shall be released on bail...\nSection 497: (1) When any person accused of non-bailable offence is arrested or detained without warrant... he may be released on bail, but he shall not be so released if there appear reasonable grounds for believing that he has been guilty of an offence punishable with death or with imprisonment for life or imprisonment for ten years:\nProvided that the Court may direct that any person under the age of sixteen years or any woman or any sick or infirm person accused of such an offence be released on bail...",
        simplifiedExplanation: "Bail involves the release of an arrested person from state custody into the custody of sureties who guarantee their appearance at trial. The CrPC divides offences into two categories for bail purposes:\n1. Bailable Offenses (Section 496): Bail is an absolute, mandatory right of the accused. The police officer or Magistrate is legally bound to grant bail if the accused is ready to provide sureties. Refusing bail in bailable cases is an actionable wrong (wrongful confinement).\n2. Non-Bailable Offenses (Section 497): Bail is a matter of judicial discretion. The court must balance individual liberty with public safety. However, the court is barred from granting bail if there are reasonable grounds of guilt for offenses carrying death, life imprisonment, or 10 years of imprisonment.\n3. Humanitarian Exceptions: Even in serious capital cases, the court holds the power to grant bail if the accused is (a) under 16 years of age, (b) a woman, or (c) sick or infirm.",
        elements: [
          "Bail as a Right (Sec 496): Mandatory release for bailable offences; no judicial discretion is involved.",
          "Discretionary Bail (Sec 497): Appears in non-bailable offenses, guided by flight risk, gravity of crime, and potential witness tampering.",
          "The Capital Rule Bar: No bail is permitted in capital offenses unless the evidence is weak or statutory exceptions apply.",
          "Relaxation Exceptions: Age (<16), gender (woman), and physical condition (sick/infirm) permit bail even in capital indictments.",
          "Cancellation of Bail (Sec 497(5)): Power of the Court of Session or HCD to cancel bail if the accused abuses their liberty."
        ]
      },
      {
        sectionNo: "Section 498",
        title: "Special Powers of High Court / Sessions Court & Anticipatory Bail",
        statutoryText: "Section 498: The amount of every bond executed under this Chapter shall be fixed with due regard to the circumstances of the case, and shall not be excessive; and the High Court Division or Court of Session may, in any case, whether there be an appeal on conviction or not, direct that any person be admitted to bail, or that the bail required by a police-officer or Magistrate be reduced.",
        simplifiedExplanation: "Section 498 grants vast, concurrent, and independent powers to the High Court Division and the Court of Session regarding bail. It serves two distinct statutory functions:\n1. Modification of Bail: The power to reduce excessive, arbitrary, or unreasonable bail amounts set by lower courts or police officers.\n2. Admission to Bail: The power to admit any person to bail in any case, completely bypassing the statutory limitations and bars imposed on lower Magistrates under Section 497.\n3. Anticipatory Bail: Although the phrase 'Anticipatory Bail' (pre-arrest protection) does not appear in the statutory text, the Supreme Court of Bangladesh has interpreted Section 498 as the source of this doctrine. It allows individuals who genuinely apprehend arrest on false, malicious, or politically motivated charges to seek immediate judicial protection. Anticipatory bail is temporary (directing the accused to surrender and apply for regular bail in the trial court) and granted under strict conditions.",
        elements: [
          "Concurrent Powers: Both the Court of Session and the High Court Division hold equal, original jurisdiction under Section 498.",
          "Excessive Bail Relief: Mandates that bail bonds must never be excessive, providing a direct remedy to reduce unreasonable bail requirements.",
          "Pre-Arrest Anticipatory Bail: Formulated judicially under Section 498 to protect citizens from bad-faith, malicious, or politically motivated arrests.",
          "Temporary Surrender Direction: Anticipatory bail acts as a transit shield, usually lasting 4 to 6 weeks, requiring the accused to surrender before the lower trial court."
        ]
      }
    ],
    caseLaws: [
      {
        title: "State v. Zakir Hossain",
        citation: "70 DLR (AD) 332",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The accused had obtained ad-interim anticipatory bail from the High Court Division under Section 498 of the CrPC. The state challenged the order in the Appellate Division, arguing that the HCD was granting anticipatory bail routinely, as a matter of course, without verifying if a genuine, legally cognizable threat of malicious arrest existed.",
        held: "The Appellate Division set aside the bail and laid down 10 comprehensive guidelines for granting anticipatory bail. The AD held that anticipatory bail is an extraordinary and exceptional remedy that cannot be granted as a matter of routine or course. It can only be granted if the applicant demonstrates a concrete, well-founded apprehension of arrest due to political rivalry, personal malice, or bad faith. Furthermore, the court must be satisfied that the accused will not flee the country or tamper with the investigation.",
        significance: "This is the seminal and binding precedent governing the strict criteria, limits, and procedural conditions for granting anticipatory bail in Bangladesh."
      },
      {
        title: "State v. Abdul Kahhar",
        citation: "56 DLR (AD) 203",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The accused was indicted in a serious, non-bailable crime carrying capital punishment. The High Court Division granted bail under Section 498. The State appealed, asserting that the HCD abused its discretion by failing to properly evaluate the gravity of the offense and the strong prima facie evidence linking the accused to the crime.",
        held: "The Appellate Division held that while the High Court Division has concurrent and wide powers under Section 498, such discretion must be exercised in accordance with established judicial principles and not arbitrarily. In non-bailable cases, courts must evaluate: (1) the gravity of the offense, (2) the nature and strength of the evidence, (3) the severity of the potential punishment, (4) the character and standing of the accused, and (5) the likelihood of the accused fleeing or tampering with witnesses.",
        significance: "Establishes the authoritative judicial parameters and checklists that courts must follow when exercising discretionary powers to grant bail in non-bailable offenses."
      },
      {
        title: "Harihar Das v. State",
        citation: "33 DLR (AD) 35",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The complainant had filed a criminal revision petition in the High Court Division challenging an order of acquittal passed by a lower court. Upon hearing the revisional application, the HCD evaluated the evidence, set aside the acquittal, and directly convicted and sentenced the accused, ignoring the bar in Section 439(4) of the CrPC.",
        held: "The Appellate Division set aside the conviction, holding that the revisional jurisdiction of the High Court Division under Section 439 is strictly supervisory. Section 439(4) contains an absolute, mandatory bar prohibiting a revisional court from converting a finding of acquittal into one of conviction. If the revisional court finds that an acquittal is illegal, perverse, or a miscarriage of justice, its only legal option is to set aside the order and send the case back for a retrial.",
        significance: "Strictly enforces the statutory bar of Section 439(4), preventing revisional courts from bypassing full appellate trials to convict acquitted persons."
      }
    ],
    maxims: [
      {
        maxim: "Salus populi suprema lex",
        translation: "The welfare of the people is the supreme law.",
        application: "In bail matters under Section 497, this maxim guides judicial discretion. The court must balance the individual right to personal liberty against the collective safety and welfare of the community (e.g., denying bail to dangerous habitual offenders)."
      },
      {
        maxim: "De minimis non curat lex",
        translation: "The law does not concern itself with trifles.",
        application: "Applies to revisional powers under Section 435. Revisional courts will not exercise their extraordinary discretionary powers to call for records or interfere in lower court proceedings over trivial or harmless procedural irregularities."
      },
      {
        maxim: "Nemo debet bis vexari pro una et eadem causa",
        translation: "No one should be twice vexed for one and the same cause.",
        application: "Justifies the finality of appellate judgments under Section 430. Once a criminal appeal has been resolved on its merits by a competent appellate court, the accused cannot be subjected to a second appeal or subsequent trial for the same cause, protectively cementing their legal status."
      }
    ],
    mcqs: [
      {
        id: "mcq-14-1",
        question: "Under Section 404 of the CrPC, which of the following is true regarding the right to file a criminal appeal in Bangladesh?",
        options: [
          { id: "a", text: "Every citizen has an inherent, natural right of appeal against any judicial order" },
          { id: "b", text: "An appeal lies only when explicitly provided by the CrPC or any other written law" },
          { id: "c", text: "Appeals can only be filed with the written permission of the Attorney General" },
          { id: "d", text: "No appeal can ever be filed against a Magistrate's judgment" }
        ],
        correctOptionId: "b",
        explanation: "Section 404 mandates that no appeal shall lie from any judgment or order of a Criminal Court except as provided for by the Code or by any other law, meaning appeal is strictly a statutory right."
      },
      {
        id: "mcq-14-2",
        question: "Under Section 417(2) of the CrPC, what is the limitation period for a private complainant to file an appeal against an acquittal after obtaining special leave from the High Court Division?",
        options: [
          { id: "a", text: "30 days" },
          { id: "b", text: "60 days" },
          { id: "c", text: "90 days" },
          { id: "d", text: "120 days" }
        ],
        correctOptionId: "b",
        explanation: "In C.R. (complaint-instituted) cases, the complainant must file an appeal against an order of acquittal to the High Court Division within 60 days of the order, after obtaining special leave."
      },
      {
        id: "mcq-14-3",
        question: "Which of the following powers is NOT available to an Appellate Court hearing a conviction appeal under Section 423(1)(b) of the CrPC?",
        options: [
          { id: "a", text: "Reverse the finding and sentence, and acquit or discharge the accused" },
          { id: "b", text: "Order the accused to be retried by a competent court" },
          { id: "c", text: "Directly enhance the sentence of the accused without a specific inadequacy appeal under Section 417A" },
          { id: "d", text: "Alter the finding of guilt while maintaining or reducing the sentence" }
        ],
        correctOptionId: "c",
        explanation: "In a regular conviction appeal under Section 423(1)(b), the court cannot enhance the sentence of the accused; sentence enhancement is only permitted if a separate appeal against inadequacy has been filed under Section 417A."
      },
      {
        id: "mcq-14-4",
        question: "According to Section 439(4) of the CrPC, what is the absolute restriction placed on the High Court Division while exercising revisional jurisdiction over an acquittal?",
        options: [
          { id: "a", text: "It cannot order a retrial under any circumstance" },
          { id: "b", text: "It is strictly prohibited from converting a finding of acquittal into one of conviction" },
          { id: "c", text: "It cannot call for the trial records from the inferior court" },
          { id: "d", text: "It cannot hear oral arguments from the complainant" }
        ],
        correctOptionId: "b",
        explanation: "Section 439(4) explicitly debars a revisional court from converting a finding of acquittal into one of conviction. The revision court can only set aside the acquittal and direct a retrial."
      },
      {
        id: "mcq-14-5",
        question: "Under Section 439(5) of the CrPC, what is the consequence if a party has a right of appeal under the Code but fails to file one and instead applies for criminal revision?",
        options: [
          { id: "a", text: "The court will automatically convert the revision into an appeal" },
          { id: "b", text: "No revisional application shall be entertained at the instance of such a party" },
          { id: "c", text: "The party will be fined for filing a wrong application" },
          { id: "d", text: "The revision is allowed only if the Public Prosecutor consents" }
        ],
        correctOptionId: "b",
        explanation: "Section 439(5) strictly bars revisional applications at the instance of a party who had a right of appeal but slept on their rights and failed to file it."
      },
      {
        id: "mcq-14-6",
        question: "Under Section 496 of the CrPC, which of the following describes the nature of bail in a bailable offense?",
        options: [
          { id: "a", text: "It is a matter of judicial discretion depending on the flight risk of the accused" },
          { id: "b", text: "It is an absolute and mandatory statutory right of the accused" },
          { id: "c", text: "It can only be granted with the prior written permission of the Government" },
          { id: "d", text: "It is prohibited if the accused has been convicted before" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 496, any person accused of a bailable offense has an absolute statutory right to be released on bail once they are prepared to offer sufficient sureties."
      },
      {
        id: "mcq-14-7",
        question: "Under Section 497 of the CrPC, which of the following is NOT a statutory category for which the capital offense bail bar can be relaxed?",
        options: [
          { id: "a", text: "Any person under the age of sixteen years" },
          { id: "b", text: "Any woman accused of such an offense" },
          { id: "c", text: "Any sick or infirm person accused of such an offense" },
          { id: "d", text: "Any person who has no prior criminal record of any kind" }
        ],
        correctOptionId: "d",
        explanation: "Section 497(1) contains a proviso specifying three, and only three, exceptions to the capital offense bail bar: persons under 16, women, or sick/infirm individuals. Lack of prior record is not a statutory exception."
      },
      {
        id: "mcq-14-8",
        question: "Which of the following sections of the CrPC is interpreted by the Supreme Court of Bangladesh as the source of the power to grant 'Anticipatory Bail'?",
        options: [
          { id: "a", text: "Section 496" },
          { id: "b", text: "Section 497" },
          { id: "c", text: "Section 498" },
          { id: "d", text: "Section 439" }
        ],
        correctOptionId: "c",
        explanation: "The Supreme Court of Bangladesh has interpreted the wide and concurrent powers under Section 498 to admit 'any person to bail' as the statutory foundation of the pre-arrest anticipatory bail doctrine."
      },
      {
        id: "mcq-14-9",
        question: "According to the Appellate Division's landmark ruling in State v. Zakir Hossain (70 DLR (AD) 332), what is the core requirement for granting anticipatory bail?",
        options: [
          { id: "a", text: "The applicant must prove their innocence beyond a reasonable doubt" },
          { id: "b", text: "The applicant must demonstrate a genuine, well-founded apprehension of arrest due to personal malice, bad faith, or political rivalry" },
          { id: "c", text: "The applicant must have already spent at least 24 hours in police custody" },
          { id: "d", text: "The applicant must pay a mandatory cash penalty to the national treasury" }
        ],
        correctOptionId: "b",
        explanation: "State v. Zakir Hossain established that anticipatory bail is an exceptional remedy that requires a genuine, concrete, and well-founded apprehension of arrest arising from bad faith or political/personal malice."
      },
      {
        id: "mcq-14-10",
        question: "Which of the following provisions empowers the High Court Division or the Court of Session to cancel bail under the CrPC?",
        options: [
          { id: "a", text: "Section 496" },
          { id: "b", text: "Section 497(5)" },
          { id: "c", text: "Section 432" },
          { id: "d", text: "Section 404" }
        ],
        correctOptionId: "b",
        explanation: "Section 497(5) of the CrPC explicitly empowers the High Court Division or Court of Session to direct that any person who has been released on bail under this section be arrested and committed to custody, effectively cancelling their bail."
      }
    ]
  },
  {
    id: "chapter-15",
    title: "Chapter 15: Penal Code - Joint Liability & Abetment (Sec 34/149)",
    subject: "The Penal Code, 1860",
    isCompleted: true,
    quickSummary: "This chapter explores the essential legal doctrines of joint, constructive, and vicarious criminal liability under the Penal Code, 1860. It comprehensively covers Section 34 (Common Intention), Section 149 (Common Object of Unlawful Assembly), Abetment (Sections 107-114), and Criminal Conspiracy (Sections 120A-120B).",
    studyStrategy: "Master the key statutory and judicial differences between Section 34 and Section 149 (e.g., active participation vs. mere membership, pre-arranged plan vs. situational common object). Study Barendra Kumar Ghosh for constructive participation and Mahbub Shah v. Emperor for 'common intention vs. similar intention'. Ensure you know the three modes of abetment (Section 107) and the rules regarding overt acts in criminal conspiracy (Section 120A).",
    sections: [
      {
        sectionNo: "Sections 34 & 35",
        title: "Acts Done by Several Persons in Furtherance of Common Intention",
        statutoryText: "Section 34: When a criminal act is done by several persons, in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.\nSection 35: Whenever an act, which is criminal only by reason of its being done with a criminal knowledge or intention, is done by several persons, each of such persons who joins in the act with such knowledge or intention is liable for the act in the same manner as if the act were done by him alone with that knowledge or intention.",
        simplifiedExplanation: "Section 34 establishes the cornerstone of joint and constructive liability in criminal law. It states that when multiple individuals commit a criminal act in furtherance of a shared, pre-arranged intention, each person is held fully liable as if they committed the entire crime individually. Crucially, Section 34 is not a substantive offense—it does not create a distinct crime itself, but acts as a rule of evidence and liability. The essential ingredients of Section 34 are:\n1. A criminal act committed by multiple individuals;\n2. A pre-arranged, shared 'common intention' or meeting of minds (prior to the act, though it can develop on the spot);\n3. Execution of the act in furtherance of that common intention; and\n4. Some form of active participation (physical or constructive, such as standing guard).",
        elements: [
          "Constructive Joint Liability: The act of one is deemed the act of all, making all participants equally guilty of the substantive offense.",
          "Rule of Evidence: Section 34 must always be charged in conjunction with a substantive offense (e.g., Section 302 read with Section 34), never on its own.",
          "Pre-Arranged Plan: Requires a prior meeting of minds, establishing a clear line between 'common' and 'similar' intention.",
          "Active or Constructive Presence: Accused must participate in some way (e.g., keeping watch or driving a getaway car) to be held liable for the core offense."
        ]
      },
      {
        sectionNo: "Sections 141 & 149",
        title: "Unlawful Assembly and Constructive Liability (Common Object)",
        statutoryText: "Section 141: An assembly of five or more persons is designated an unlawful assembly, if the common object of the persons composing that assembly is—First.—To overawe by criminal force... the Government...; or Secondly.—To resist the execution of any law...; or Thirdly.—To commit any mischief or criminal trespass...; or Fourthly.—By means of criminal force... to take or obtain possession of any property...; or Fifthly.—By means of criminal force... to compel any person to do what he is not legally bound to do...\nSection 149: If an offence is committed by any member of an unlawful assembly in prosecution of the common object of that assembly, or such as the members of that assembly knew to be likely to be committed in prosecution of that object, every person who, at the time of the committing of that offence, is a member of the same assembly, is guilty of that offence.",
        simplifiedExplanation: "Section 149 imposes constructive, vicarious liability on members of an unlawful assembly. An unlawful assembly (Section 141) requires a minimum of five persons sharing one of the five prohibited 'common objects'. Under Section 149, if any member of this assembly commits a crime in prosecution of that common object (or a crime they knew was highly likely to be committed), every single member of the assembly at that time is held guilty of that crime. Key differences from Section 34:\n1. Substantive Offense: Section 149 is a substantive offense in itself, and a person can be convicted under it directly.\n2. No Pre-Arrangement: It does not require a pre-arranged plan or prior meeting of minds; a common object can develop situationally on the spot.\n3. Mere Membership: Active participation or physical acts are not required; mere membership in the assembly at the time of the crime is enough to attract full liability.",
        elements: [
          "Minimum of 5 Persons: The assembly must consist of at least five persons; if the number drops below five, Section 149 cannot apply.",
          "Substantive Offense: Creates a separate, distinct offense of constructive liability based on collective unlawful action.",
          "Prosecution of Common Object: The offense must be committed to achieve the assembly's shared object, or must be a foreseeable consequence.",
          "Mere Membership Liability: Individuals who simply stand in the assembly without performing any physical criminal act are equally liable."
        ]
      },
      {
        sectionNo: "Sections 107 to 114",
        title: "Abetment (Instigation, Conspiracy, and Intentional Aid)",
        statutoryText: "Section 107: A person abets the doing of a thing, who—First.—Instigates any person to do that thing; or Secondly.—Engages with one or more other person or persons in any conspiracy for the doing of that thing...; or Thirdly.—Intentionally aids, by any act or illegal omission, the doing of that thing.\nSection 108: A person abets an offence, who abets either the commission of an offence, or the commission of an act which would be an offence, if committed by a person capable by law of committing an offence with the same intention or knowledge as that of the abettor.\nSection 114: Whenever any person, who if absent would be liable to be punished as an abettor, is present when the act or offence for which he would be punishable in consequence of the abetment is committed, he shall be deemed to have committed such act or offence.",
        simplifiedExplanation: "Abetment is an inchoate (preliminary) offense that punishes individuals who facilitate, provoke, or plan the commission of a crime by others. Section 107 defines the three exclusive modes of committing abetment:\n1. Instigation: Actively provoking, inciting, commanding, or encouraging a person to commit a crime.\n2. Conspiracy: Plotting with one or more persons to commit a crime, provided that some overt act is performed in pursuance of that conspiracy.\n3. Intentional Aid: Actively assisting the commission of the crime through a positive physical act or an illegal omission.\nUnder Section 108, an abettor is held criminally liable even if the person abetted is legally incapable (e.g., an insane person or a child), or even if the planned offense is never actually committed or fails to achieve its result. Section 114 adds that if an abettor is physically present at the scene of the crime, they are legally deemed to have committed the offense themselves.",
        elements: [
          "Three Strict Modes: Instigation, conspiracy (with an overt act), or intentional aid are the only legally recognized methods of abetment.",
          "Independent Liability: An abettor's guilt does not depend on whether the principal offender holds criminal capacity or is convicted.",
          "Inchoate Nature: Abetment is complete the moment the provocation or aid occurs, even if the main offense is never executed.",
          "Presence Rule (Sec 114): Mere abettors present at the scene of the crime are upgraded to principal offenders in the eyes of the law."
        ]
      },
      {
        sectionNo: "Sections 120A & 120B",
        title: "Criminal Conspiracy",
        statutoryText: "Section 120A: When two or more persons agree to do, or cause to be done,—(1) an illegal act, or (2) an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy: Provided that no agreement except an agreement to commit an offence shall amount to a criminal conspiracy unless some act besides the agreement be done by one or more parties to such agreement in pursuance thereof.\nSection 120B: (1) Whoever is a party to a criminal conspiracy to commit an offence punishable with death, [life imprisonment] or rigorous imprisonment for a term of two years or upwards, shall... be punished in the same manner as if he had abetted such offence...",
        simplifiedExplanation: "Criminal Conspiracy (Section 120A) is a substantive, standalone offense. It is defined as an agreement between two or more persons to perform an illegal act, or a legal act using illegal means. The essence of conspiracy is the agreement (the meeting of minds). The Penal Code establishes a vital distinction regarding the necessity of an 'overt act':\n1. Conspiracy to Commit an Offense: The mere agreement itself is a completed crime; no physical progress, preparation, or overt act is required.\n2. Conspiracy to Commit Other Illegal Acts (e.g., civil wrongs or non-crimes): The agreement does not amount to a conspiracy unless at least one co-conspirator performs an overt physical act in pursuance of the agreement.",
        elements: [
          "Agreement is the Crux: The meeting of minds and agreement between two or more persons is the core element of the crime.",
          "No Overt Act for Crimes: Agreement to commit any criminal offense requires no physical overt act to trigger complete criminal liability.",
          "Overt Act for Non-Crimes: Agreement to commit other illegal actions (not classified as offenses) requires an overt act by at least one party.",
          "Joint Liability and Acquittal Rule: Conspiracy requires at least two persons. If all co-conspirators except one are acquitted, the sole remaining accused cannot be convicted of conspiracy alone."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Barendra Kumar Ghosh v. King Emperor",
        citation: "52 IA 40 / AIR 1925 PC 1",
        court: "Privy Council",
        facts: "The accused, Barendra Kumar Ghosh, along with several others, entered a post office in Shankaritola with the common intention of robbing the postmaster. While his accomplices entered the room and shot the postmaster dead, Barendra stood outside keeping watch. He was arrested with a pistol and claimed he was merely standing outside and did not fire the fatal shot, hence he should not be convicted of murder under Section 302.",
        held: "The Privy Council dismissed the appeal and affirmed his conviction for murder. Lord Sumner famously observed: 'They also serve who only stand and wait.' The court held that under Section 34, if a criminal act is done in furtherance of a common intention, every participant is equally liable. Active physical participation in the final fatal act is not required; standing watch to facilitate the crime constitutes constructive participation in the act.",
        significance: "This is the seminal foundation case for joint and constructive liability under Section 34, establishing that physical presence and auxiliary assistance (like keeping watch) are sufficient to invoke joint liability."
      },
      {
        title: "Mahbub Shah v. Emperor",
        citation: "72 IA 148 / AIR 1945 PC 118",
        court: "Privy Council",
        facts: "Two rival groups of reed-cutters clashed on the Indus River. When one group was attacked, Mahbub Shah and another person arrived with shotguns to rescue them and opened fire, killing one person. The trial court convicted Mahbub Shah of murder under Section 302 read with Section 34, arguing that he shared a common intention with the other shooter.",
        held: "The Privy Council set aside the conviction for murder, holding that there was no prior meeting of minds or pre-arranged plan between Mahbub Shah and the other shooter; they simply acted on the spur of the moment with similar intentions. Sir Madhavan Nair clarified that 'common intention' under Section 34 requires a pre-arranged plan and prior meeting of minds, whereas 'similar intention' without a pre-arranged plan does not attract constructive liability.",
        significance: "Establishes the vital, high-yield legal distinction between 'common intention' (requiring pre-arrangement/prior meeting of minds) and 'similar intention' (mere parallel intent without pre-arrangement)."
      },
      {
        title: "State v. Md. Shafiuddin",
        citation: "50 DLR 142",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "An assembly of more than ten persons armed with lethal weapons attacked a village homestead in prosecution of a dispute over land ownership, resulting in a death. Several members of the assembly argued they should be acquitted because they did not personally inflict any injuries and were merely present in the crowd.",
        held: "The High Court Division held that under Section 149, once an individual is proven to be a member of an unlawful assembly (comprising 5 or more persons with a common object) at the time the offense is committed, they are constructively liable for the offense. It is completely immaterial whether the individual accused personally inflicted any blow, carried a weapon, or took an active part in the assault.",
        significance: "Authoritative Bangladesh precedent confirming that under Section 149, mere membership in an unlawful assembly in prosecution of a common object is sufficient to sustain a conviction for the offences committed by the assembly."
      }
    ],
    maxims: [
      {
        maxim: "Qui facit per alium facit per se",
        translation: "He who acts through another acts himself.",
        application: "Acts as the philosophical basis of Section 34 (Common Intention) and Section 107 (Abetment). When an individual orchestrates, instigates, or collaborates with others to execute a crime, the law attributes the acts of the direct agents to the mastermind."
      },
      {
        maxim: "Actus non facit reum nisi mens sit rea",
        translation: "An act does not make a person guilty unless the mind is also guilty.",
        application: "Under Section 34, a person's physical act (like standing outside a building) is rendered criminal only because of the shared mens rea (common intention) to commit the crime."
      },
      {
        maxim: "Nemo debet pro alio puniri",
        translation: "No one should be punished for the act of another.",
        application: "Highlights the exceptional nature of Section 34, Section 149, and Section 120A. While the general rule is that no one is punished for another's deed, joint and constructive liability create specific statutory exceptions where individual liability is extended to collective actions."
      }
    ],
    mcqs: [
      {
        id: "mcq-15-1",
        question: "Which of the following statements is true regarding Section 34 of the Penal Code, 1860?",
        options: [
          { id: "a", text: "It creates a distinct substantive offense of joint conspiracy" },
          { id: "b", text: "It is a rule of evidence and liability that must be read with a substantive charge" },
          { id: "c", text: "It applies only when five or more persons commit a crime" },
          { id: "d", text: "It does not require any active participation from the accused" }
        ],
        correctOptionId: "b",
        explanation: "Section 34 does not create a distinct substantive offense. It is a rule of evidence and constructive liability that must be read alongside a substantive offense (e.g., Section 302 read with Section 34)."
      },
      {
        id: "mcq-15-2",
        question: "What is the minimum number of persons required to attract joint liability under Section 34 of the Penal Code?",
        options: [
          { id: "a", text: "Two persons" },
          { id: "b", text: "Three persons" },
          { id: "c", text: "Five persons" },
          { id: "d", text: "Ten persons" }
        ],
        correctOptionId: "a",
        explanation: "Section 34 applies to 'several persons', which has been judicially interpreted as requiring at least two or more persons."
      },
      {
        id: "mcq-15-3",
        question: "Under Section 141 of the Penal Code, what is the minimum number of persons required to constitute an 'unlawful assembly'?",
        options: [
          { id: "a", text: "Two" },
          { id: "b", text: "Three" },
          { id: "c", text: "Five" },
          { id: "d", text: "Seven" }
        ],
        correctOptionId: "c",
        explanation: "Section 141 explicitly defines an unlawful assembly as an assembly of 'five or more persons' sharing a common prohibited object."
      },
      {
        id: "mcq-15-4",
        question: "Which of the following is a key legal difference between Section 34 and Section 149 of the Penal Code?",
        options: [
          { id: "a", text: "Section 34 requires five persons, whereas Section 149 requires two persons" },
          { id: "b", text: "Section 34 is a substantive offense, whereas Section 149 is merely a rule of evidence" },
          { id: "c", text: "Section 149 creates a substantive offense, whereas Section 34 is merely a rule of evidence" },
          { id: "d", text: "Section 34 requires no active participation, while Section 149 requires physical participation" }
        ],
        correctOptionId: "c",
        explanation: "Section 149 creates a distinct, substantive offense of constructive/vicarious liability, whereas Section 34 does not create an offense but acts as a rule of evidence and liability."
      },
      {
        id: "mcq-15-5",
        question: "In which landmark Privy Council case did Lord Sumner famously state, 'They also serve who only stand and wait' regarding Section 34 joint liability?",
        options: [
          { id: "a", text: "Mahbub Shah v. Emperor" },
          { id: "b", text: "Barendra Kumar Ghosh v. King Emperor" },
          { id: "c", text: "State v. Md. Shafiuddin" },
          { id: "d", text: "Queen-Empress v. Abdullah" }
        ],
        correctOptionId: "b",
        explanation: "Barendra Kumar Ghosh v. King Emperor (1925) is the landmark 'Shankaritola Post Office Case' where Lord Sumner made this classic observation to justify the joint liability of a lookout standing outside."
      },
      {
        id: "mcq-15-6",
        question: "What did the Privy Council decide in the landmark case of Mahbub Shah v. Emperor (72 IA 148)?",
        options: [
          { id: "a", text: "Common object under Section 149 can be formed by a minimum of three persons" },
          { id: "b", text: "There is a vital distinction between 'common intention' and 'similar intention' under Section 34" },
          { id: "c", text: "Mere presence in an unlawful assembly does not attract liability" },
          { id: "d", text: "An abettor must be present at the scene of the crime to be convicted" }
        ],
        correctOptionId: "b",
        explanation: "Mahbub Shah v. Emperor established that 'common intention' requires a pre-arranged plan and meeting of minds, and must be distinguished from 'similar intention' which lacks pre-arrangement."
      },
      {
        id: "mcq-15-7",
        question: "Under Section 107 of the Penal Code, which of the following is NOT one of the three recognized modes of abetment?",
        options: [
          { id: "a", text: "Instigation" },
          { id: "b", text: "Conspiracy" },
          { id: "c", text: "Intentional Aid" },
          { id: "d", text: "Negligent Omission without intent" }
        ],
        correctOptionId: "d",
        explanation: "Section 107 defines abetment strictly through three modes: (1) Instigation, (2) Conspiracy (accompanied by an overt act), and (3) Intentional Aid (by act or illegal omission with intent)."
      },
      {
        id: "mcq-15-8",
        question: "According to Section 108 of the Penal Code, which of the following statements is true regarding the liability of an abettor?",
        options: [
          { id: "a", text: "The abettor is not liable if the person abetted is a minor or insane and lacks legal capacity" },
          { id: "b", text: "The abettor is fully liable even if the person abetted is legally incapable of committing an offense" },
          { id: "c", text: "The abettor is only liable if the principal offender is convicted first" },
          { id: "d", text: "Abetment of an offense is not an offense in itself" }
        ],
        correctOptionId: "b",
        explanation: "Section 108 (Explanation 3) clarifies that the person abetted need not be capable by law of committing an offense (e.g., child or insane person); the abettor's liability is independent."
      },
      {
        id: "mcq-15-9",
        question: "Under Section 120A of the Penal Code, when is an agreement to commit a criminal offense deemed a completed criminal conspiracy?",
        options: [
          { id: "a", text: "Only when a physical overt act is performed in pursuance of the agreement" },
          { id: "b", text: "The moment the agreement itself is made, with no overt act required" },
          { id: "c", text: "Only if the planned offense is successfully completed" },
          { id: "d", text: "Only when the agreement is reduced to writing" }
        ],
        correctOptionId: "b",
        explanation: "The proviso to Section 120A states that for an agreement to commit a criminal offense, the agreement itself constitutes criminal conspiracy; no overt act besides the agreement is necessary."
      },
      {
        id: "mcq-15-10",
        question: "Four persons are prosecuted for criminal conspiracy under Section 120B. If the trial court acquits three of them and convicts the sole remaining accused, what is the status of the conviction?",
        options: [
          { id: "a", text: "The conviction is perfectly legal" },
          { id: "b", text: "The conviction is illegal because conspiracy requires an agreement between at least two persons" },
          { id: "c", text: "The conviction is legal only if the remaining accused is a public servant" },
          { id: "d", text: "The conviction is legal but the sentence must be reduced by half" }
        ],
        correctOptionId: "b",
        explanation: "By definition under Section 120A, conspiracy requires 'two or more persons'. If all other co-conspirators are acquitted, the sole remaining accused cannot be convicted of conspiracy as they cannot agree with themselves."
      }
    ]
  },
  {
    id: "chapter-16",
    title: "Chapter 16: Penal Code - Right of Private Defence & General Exceptions",
    subject: "The Penal Code, 1860",
    isCompleted: true,
    quickSummary: "This chapter covers the General Exceptions of the Penal Code, 1860 (Sections 76-106), which negate criminal liability. It separates these defenses into excusable acts (mistake of fact, accident, infancy, insanity, intoxication) and justifiable acts (judicial acts, necessity, consent, and the right of private defence of body and property under Sections 96-106).",
    studyStrategy: "Pay close attention to the absolute immunity of infancy under Section 82 (Doli Incapax) up to 9 years of age, and the qualified immunity under Section 83 (9 to 12 years). Understand the legal test of insanity under Section 84 (McNaughten Rules) as distinguished from medical insanity. Master the limits of private defence under Section 99 and the specific circumstances where the right of private defence of the body (Section 100) or property (Section 103) extends to causing death.",
    sections: [
      {
        sectionNo: "Sections 76, 79, 80 & 81",
        title: "Mistake of Fact, Accident, and Necessity",
        statutoryText: "Section 76: Act done by a person bound, or by mistake of fact believing himself bound, by law...\nSection 79: Act done by a person justified, or by mistake of fact believing himself justified, by law...\nSection 80: Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution.\nSection 81: Nothing is an offence merely by reason of its being done with the knowledge that it will cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property.",
        simplifiedExplanation: "These sections govern key excusable defences under the Penal Code:\n1. Mistake of Fact (Sections 76 & 79): Protects a person who commits an act under a genuine, good-faith mistake of fact, believing themselves bound or justified by law. Importantly, mistake of law is never an excuse ('ignorantia juris non excusat'), whereas a mistake of fact can be ('ignorantia facti excusat').\n2. Accident (Section 80): Excludes criminal liability for accidental or unfortunate acts where there is a complete absence of criminal intent/knowledge, the act being done is lawful, and it is executed using lawful means with proper care and caution.\n3. Necessity (Section 81): Protects acts done to prevent a greater harm, even if the person knew their act would cause some harm. It acts as a choice between two evils, provided the act was done without criminal intent and in good faith.",
        elements: [
          "Mistake of Fact vs. Law: Only mistake of fact in good faith acts as an excuse; mistake of law is not excusable.",
          "Accidental Legality: An accident is only a defence if the underlying act, means, and manner are fully lawful and executed with proper care.",
          "Necessity Rule: Necessity requires choosing the lesser of two evils to prevent imminent, greater harm to person or property.",
          "Absence of Criminal Intent: All three defences require a complete lack of criminal intention (mens rea) to cause the ultimate harm."
        ]
      },
      {
        sectionNo: "Sections 82, 83, 84, 85 & 86",
        title: "Infancy, Insanity, and Intoxication",
        statutoryText: "Section 82: Nothing is an offence which is done by a child under nine years of age.\nSection 83: Nothing is an offence which is done by a child above nine years of age and under twelve, who has not attained sufficient maturity of understanding to judge of the nature and consequences of his conduct on that occasion.\nSection 84: Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law.\nSection 85: Nothing is an offence which is done by a person who, at the time of doing it, is, by reason of intoxication, incapable of knowing the nature of the act... provided that the thing which intoxicated him was administered to him without his knowledge or against his will.\nSection 86: [Voluntary Intoxication] ...the person who commits the offence... shall be liable to be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated...",
        simplifiedExplanation: "These sections address mental incapacity which negates criminal mens rea:\n1. Infancy (Sections 82 & 83): Section 82 establishes absolute immunity ('doli incapax') for children under 9 years. Section 83 establishes qualified immunity for children aged 9 to 12, depending on their maturity of understanding at the time of the conduct.\n2. Insanity (Section 84): Codifies the McNaughten Rules. To succeed, the accused must prove 'legal insanity' (the total cognitive inability to understand the nature of the act or that it was wrong/contrary to law at the exact moment of the offense). 'Medical insanity' (mental illness without complete cognitive failure) is not a defence.\n3. Intoxication (Sections 85 & 86): Involuntary intoxication (administered without knowledge/consent) is a complete defense. Voluntary intoxication is not a defense; under Section 86, the law presumes the intoxicated person has the same knowledge as a sober person, though specific intent must still be proven.",
        elements: [
          "Doli Incapax (Sec 82): Children under 9 years have absolute, irrebuttable immunity from criminal prosecution in Bangladesh.",
          "Qualified Infancy (Sec 83): Children aged 9-12 have qualified immunity; the prosecution must prove they had sufficient maturity to understand.",
          "Legal Insanity (Sec 84): Cognitive test focusing on the exact moment of the act; medical mental illness is insufficient on its own.",
          "Involuntary vs. Voluntary Intoxication: Involuntary is a full defence; voluntary intoxication imputes full sober knowledge to the accused."
        ]
      },
      {
        sectionNo: "Sections 87-92 & 95",
        title: "Consent, Duress, and Trivial Acts",
        statutoryText: "Section 87: Act not intended and not known to be likely to cause death or grievous hurt, done by consent...\nSection 94: [Duress] ...except murder, and offences against the State punishable with death, nothing is an offence which is done by a person who is compelled to do it by threats, which, at the time of doing it, reasonably cause the apprehension that instant death to that person will otherwise be the consequence...\nSection 95: Nothing is an offence by reason that it causes, or that it is intended to cause, or that it is known to be likely to cause, any harm, if that harm is so slight that no person of ordinary sense and temper would complain of such harm.",
        simplifiedExplanation: "These sections balance social utility and criminal culpability:\n1. Consent (Sections 87-92): Based on 'volenti non fit injuria'. Acts done with consent are exempted if done in good faith without intent to cause death or grievous hurt (e.g., medical surgeries, sporting events).\n2. Duress/Compulsion (Section 94): Protects individuals forced to commit crimes under threats of instant death. Crucially, Section 94 contains two absolute exceptions: it does not apply to (a) Murder, or (b) Offences against the State punishable with death (e.g., treason).\n3. Trifles (Section 95): Codifies 'De minimis non curat lex'. The law ignores trivial harms that no ordinary person would complain about, preventing frivolous prosecutions.",
        elements: [
          "Sporting/Medical Consent: Consent is a valid defence only for acts not intended or known to cause death or grievous hurt.",
          "Instant Death Threat: Duress requires apprehension of instant, immediate death; threats of future harm or property damage do not qualify.",
          "Duress Exclusions: Duress can never excuse murder or capital offenses against the State under any circumstances.",
          "De Minimis Rule (Sec 95): Protects against prosecution for slight, negligible, or trivial harms (e.g., accidental bumping in a crowd)."
        ]
      },
      {
        sectionNo: "Sections 96 to 106",
        title: "The Right of Private Defence",
        statutoryText: "Section 96: Nothing is an offence which is done in the exercise of the right of private defence.\nSection 97: Every person has a right... to defend: First.—His own body, and the body of any other person... Secondly.—The property... of himself or of any other person...\nSection 99: [Restrictions] ...There is no right of private defence against an act which does not reasonably cause the apprehension of death or of grievous hurt, if done... by a public servant... in good faith... [or] in cases in which there is time to have recourse to the protection of the public authorities... [and] the right... in no case extends to the inflicting of more harm than it is necessary to inflict...\nSection 100: [Death in Body Defence] ...extends... to the voluntary causing of death... if the offence which occasions the exercise of the right be... [1] Apprehension of death, [2] Grievous hurt, [3] Rape, [4] Unnatural lust, [5] Kidnapping/Abduction, [6] Wrongful confinement, [7] Acid throwing/administration.\nSection 103: [Death in Property Defence] ...extends... to causing death... in cases of: First.—Robbery; Secondly.—House-breaking by night; Thirdly.—Mischief by fire...; Fourthly.—Theft, mischief, or house-trespass, under such circumstances as may reasonably cause apprehension that death or grievous hurt will be the consequence.",
        simplifiedExplanation: "The right of private defence is a defensive, not a retributive right. Section 97 grants every person the right to defend their own body (and another's) and property (and another's) against illegal acts. However, this right is governed by strict limitations under Section 99:\n1. Public Servants: No right exists against public servants acting lawfully and in good faith under color of office.\n2. Time to Recourse: No right exists if there is time to contact public authorities.\n3. Proportionality: The harm inflicted must not exceed what is necessary for defense.\nSection 100 lists seven extreme threats where one may lawfully cause the death of the assailant in defense of the body. Section 103 lists four circumstances where one may cause death in defense of property.",
        elements: [
          "Defensive, Not Punitive: Private defence is meant to prevent harm, never to punish, retaliate, or seek revenge.",
          "Section 99 Boundaries: Proportionality, recourse to authorities, and acts of public servants are absolute constraints on the right.",
          "Causing Death (Body): Only allowed under the seven specific categories in Section 100 (e.g., threat of death, grievous hurt, rape, acid attack).",
          "Causing Death (Property): Restricted to robbery, nighttime house-breaking, arson, and aggravated theft/trespass threatening death/grievous hurt."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Safdar Ali v. Crown",
        citation: "1953 PLD FC 93",
        court: "Federal Court",
        facts: "The accused was prosecuted for murder and pleaded that he acted in the right of private defence of his body during a sudden fight. The prosecution argued that under Section 105 of the Evidence Act, the burden of proving an exception lies on the accused, and since the accused failed to fully prove his private defence, he must be convicted of murder.",
        held: "The Federal Court held that under Section 105 of the Evidence Act, the standard of proof required of an accused pleading an exception is not as heavy as the standard on the prosecution (which must prove guilt beyond a reasonable doubt). The accused only needs to establish a preponderance of probability or show a reasonable possibility of the defense. If the court is left in reasonable doubt, the accused must be acquitted.",
        significance: "This is the classic, foundational case defining the standard of proof for general exceptions under Section 105 of the Evidence Act, confirming the accused is entitled to the benefit of doubt."
      },
      {
        title: "State v. Md. Abdul Latif",
        citation: "48 DLR (AD) 141",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A group of armed trespassers entered the land of the accused and attempted to forcibly harvest his standing crops. When the accused protested, the trespassers assaulted him, and in the ensuing violent clash, the accused killed one of the attackers. The trial court convicted him, holding that he exceeded his right of private defence.",
        held: "The Appellate Division set aside the conviction and acquitted the accused. The Court held that a person is not expected to modulate his blows in golden scales when his life or property is in imminent danger. Under Sections 97, 99, and 103, the accused had a complete right of private defence of property and body, and the force used was proportional to the sudden, armed trespass.",
        significance: "Authoritative Bangladesh precedent establishing that the right of private defence does not require mathematical precision ('golden scales') when facing imminent peril."
      },
      {
        title: "State v. Md. Shafi",
        citation: "52 DLR 14",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "The accused killed his father-in-law in a sudden attack. The defense raised the plea of insanity under Section 84 of the Penal Code, showing that the accused had a long psychiatric history, had undergone treatment, and had no apparent motive or recollection of the incident.",
        held: "The High Court Division accepted the plea of insanity. It held that to claim exemption under Section 84, the accused must establish 'legal insanity' (incapacity to know the nature of the act or that it was wrong/contrary to law at the exact time of the act), as opposed to mere 'medical insanity'. However, the absolute lack of motive and erratic post-crime conduct proved complete cognitive impairment at the time of the offense.",
        significance: "Crucial Bangladesh precedent explaining the distinction between 'legal insanity' and 'medical insanity' under Section 84 of the Penal Code."
      }
    ],
    maxims: [
      {
        maxim: "Ignorantia facti excusat, ignorantia juris non excusat",
        translation: "Mistake of fact is an excuse, but mistake of law is not.",
        application: "Forms the legal foundation of Sections 76 and 79. A person acting under a genuine mistake of fact is excused, but a mistake regarding the law provides no defense to criminal prosecution."
      },
      {
        maxim: "De minimis non curat lex",
        translation: "The law does not concern itself with trifles.",
        application: "Underlies Section 95 of the Penal Code, which prevents the criminalization of trivial, slight, or negligible harms that do not warrant judicial intervention."
      },
      {
        maxim: "Volenti non fit injuria",
        translation: "To a willing person, no injury is done.",
        application: "Serves as the theoretical basis of the consent provisions (Sections 87-92), exempting lawful acts done with the victim's voluntary consent in good faith."
      }
    ],
    mcqs: [
      {
        id: "mcq-16-1",
        question: "Under Section 82 of the Penal Code, 1860 (as amended in 2004), what is the age of absolute infancy (doli incapax) under which a child's act is never an offense?",
        options: [
          { id: "a", text: "Under 7 years of age" },
          { id: "b", text: "Under 9 years of age" },
          { id: "c", text: "Under 12 years of age" },
          { id: "d", text: "Under 16 years of age" }
        ],
        correctOptionId: "b",
        explanation: "By the Penal Code (Amendment) Act, 2004, the age of absolute immunity under Section 82 was raised from seven to nine years."
      },
      {
        id: "mcq-16-2",
        question: "Which of the following sections of the Penal Code, 1860 codifies the defense of 'Necessity'?",
        options: [
          { id: "a", text: "Section 80" },
          { id: "b", text: "Section 81" },
          { id: "c", text: "Section 84" },
          { id: "d", text: "Section 95" }
        ],
        correctOptionId: "b",
        explanation: "Section 81 governs the defense of Necessity, allowing acts done without criminal intent in good faith to prevent other, greater harm."
      },
      {
        id: "mcq-16-3",
        question: "Which test or rules form the legal basis for the defense of Insanity under Section 84 of the Penal Code?",
        options: [
          { id: "a", text: "The McNaughten Rules" },
          { id: "b", text: "The Durham Rule" },
          { id: "c", text: "The Barendra Kumar Test" },
          { id: "d", text: "The Golden Scales Rule" }
        ],
        correctOptionId: "a",
        explanation: "Section 84 codifies the principles of the landmark English McNaughten Rules (1843) focusing on cognitive capacity at the time of the act."
      },
      {
        id: "mcq-16-4",
        question: "What is the critical distinction between legal insanity and medical insanity in Bangladesh criminal jurisprudence?",
        options: [
          { id: "a", text: "Medical insanity is a full defense, while legal insanity is a partial defense" },
          { id: "b", text: "Legal insanity focuses on the cognitive capacity at the time of the act, whereas medical insanity refers to mental illness generally" },
          { id: "c", text: "Medical insanity is determined by the police, legal insanity by doctors" },
          { id: "d", text: "There is no difference between them under Bangladesh law" }
        ],
        correctOptionId: "b",
        explanation: "Legal insanity (Section 84) requires proof that the accused was cognitively incapable of knowing the nature or wrongness of their act at the exact time of the offense. Medical insanity refers to mental illness, which does not automatically negate criminal liability."
      },
      {
        id: "mcq-16-5",
        question: "According to Section 94 of the Penal Code, the defense of duress or compulsion is NOT available for which of the following crimes?",
        options: [
          { id: "a", text: "Theft and criminal trespass" },
          { id: "b", text: "Murder and offenses against the State punishable with death" },
          { id: "c", text: "Grievous hurt and kidnapping" },
          { id: "d", text: "Arson and house-breaking" }
        ],
        correctOptionId: "b",
        explanation: "Section 94 explicitly excludes murder and capital offenses against the State from the defense of compulsion, meaning threats of instant death can never excuse these crimes."
      },
      {
        id: "mcq-16-6",
        question: "Which of the following is NOT an absolute restriction on the right of private defence under Section 99 of the Penal Code?",
        options: [
          { id: "a", text: "No right against acts of a public servant acting in good faith under color of office" },
          { id: "b", text: "No right when there is time to have recourse to public authorities" },
          { id: "c", text: "No right if the assailant is unarmed" },
          { id: "d", text: "No right extends to inflicting more harm than is necessary to defend" }
        ],
        correctOptionId: "c",
        explanation: "The status of being unarmed is not an absolute bar under Section 99; an unarmed assailant can still pose a deadly threat. The actual restrictions are: actions of public servants, time to recourse, and proportionality of harm."
      },
      {
        id: "mcq-16-7",
        question: "Under Section 100, the right of private defence of the body extends to the voluntary causing of death in which of the following situations?",
        options: [
          { id: "a", text: "Assault with the apprehension of simple hurt" },
          { id: "b", text: "Assault with the intention of committing theft" },
          { id: "c", text: "Assault with the intention of committing rape or kidnapping" },
          { id: "d", text: "Assault to recover a minor debt" }
        ],
        correctOptionId: "c",
        explanation: "Section 100 lists seven extreme threats, including rape, kidnapping/abduction, unnatural lust, and acid attacks, which justify causing the death of the assailant."
      },
      {
        id: "mcq-16-8",
        question: "Under Section 103, the right of private defence of property extends to causing death in which of the following offenses?",
        options: [
          { id: "a", text: "Robbery" },
          { id: "b", text: "Simple theft of agricultural produce" },
          { id: "c", text: "Criminal trespass during daytime" },
          { id: "d", text: "Defamation" }
        ],
        correctOptionId: "a",
        explanation: "Section 103 extends the right to cause death in defense of property only for four crimes: robbery, house-breaking by night, mischief by fire (arson), and theft/trespass threatening death or grievous hurt."
      },
      {
        id: "mcq-16-9",
        question: "Which of the following legal maxims matches Section 95 of the Penal Code, 1860 regarding trivial acts?",
        options: [
          { id: "a", text: "Ignorantia facti excusat" },
          { id: "b", text: "De minimis non curat lex" },
          { id: "c", text: "Volenti non fit injuria" },
          { id: "d", text: "Qui facit per alium facit per se" }
        ],
        correctOptionId: "b",
        explanation: "The maxim 'De minimis non curat lex' (the law does not concern itself with trifles) is the direct foundation for Section 95."
      },
      {
        id: "mcq-16-10",
        question: "Under Section 105 of the Evidence Act, 1872, what is the standard of proof required of an accused to establish a plea of private defence in Bangladesh?",
        options: [
          { id: "a", text: "Proof beyond a reasonable doubt" },
          { id: "b", text: "Preponderance of probability or creating a reasonable doubt" },
          { id: "c", text: "Absolute scientific proof" },
          { id: "d", text: "No proof is required; the court must always assume the exception" }
        ],
        correctOptionId: "b",
        explanation: "As laid down in Safdar Ali v. Crown, the accused does not need to prove their plea beyond a reasonable doubt. They only need to show a preponderance of probability or raise a reasonable doubt to be entitled to acquittal."
      }
    ]
  },
  {
    id: "chapter-17",
    title: "Chapter 17: Penal Code - Offences Affecting the Human Body",
    subject: "The Penal Code, 1860",
    isCompleted: true,
    quickSummary: "This chapter covers crucial offenses affecting the human body (Sections 299-377), focusing on homicide (culpable homicide and murder), rash and negligent acts, simple and grievous hurt (including acid attacks under Section 326A), and crimes against personal liberty (wrongful restraint/confinement and kidnapping/abduction).",
    studyStrategy: "Master the classic distinction between Culpable Homicide (Section 299) and Murder (Section 300) in terms of degrees of probability as laid down in Reg. v. Govinda. Memorize the 5 Exceptions to Section 300 which reduce murder to culpable homicide not amounting to murder. Pay attention to the 8 designated categories of Grievous Hurt under Section 320, especially the 20-day rule. Carefully contrast Kidnapping (Section 361 - strictly based on guardianship and age limits) with Abduction (Section 362 - based on force or deceit).",
    sections: [
      {
        sectionNo: "Sections 299, 300, 302 & 304",
        title: "Culpable Homicide vs. Murder",
        statutoryText: "Section 299: Whoever causes death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that he is likely by such act to cause death, commits the offence of culpable homicide.\nSection 300: Except in the cases hereinafter excepted, culpable homicide is murder, if the act by which the death is caused is done with the intention of causing death, or [2ndly] with the intention of causing such bodily injury as the offender knows to be likely to cause the death of the person to whom the harm is caused, or [3rdly] with the intention of causing bodily injury to any person and the bodily injury intended to be inflicted is sufficient in the ordinary course of nature to cause death, or [4thly] if the person committing the act knows that it is so imminently dangerous that it must, in all probability, cause death...\nSection 302: Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.\nSection 304: Punishment for culpable homicide not amounting to murder [imprisonment for life or up to 10 years, and fine].",
        simplifiedExplanation: "All murders are culpable homicides, but not all culpable homicides are murders ('Culpable Homicide is the genus, Murder is the species'). The distinction lies in the degree of probability of death. \n1. Intention: If death is a 'likely' consequence of the intended injury, it is Culpable Homicide (Sec 299). If death is 'sufficiently certain in the ordinary course of nature' to occur from the intended injury, it is Murder (Sec 300).\n2. Exceptions: Culpable homicide is reduced from murder if it falls under one of the five exceptions in Section 300:\n- Exception 1: Grave and sudden provocation.\n- Exception 2: Exceeding the right of private defence in good faith without premeditation.\n- Exception 3: Public servant exceeding powers in good faith for public justice.\n- Exception 4: Sudden fight in heat of passion upon a sudden quarrel and without premeditation.\n- Exception 5: Consent (when the deceased is above 18 years of age and consents to suffer death).",
        elements: [
          "Genus vs. Species: Murder is a more aggravated, high-probability form of culpable homicide.",
          "Ordinary Course of Nature: The legal test for Murder (Sec 300 clause 3) requires the injury to be objectively 'sufficient to cause death' in normal medical circumstances.",
          "The Five Exceptions: If any of the five exceptions of Section 300 are proven, the offence is reduced to culpable homicide not amounting to murder, carrying lesser penalties under Section 304.",
          "Punishment Contrast: Section 302 prescribes mandatory capital punishment (death) or life imprisonment for murder. Section 304 permits life imprisonment or a 10-year term depending on whether there was intention or merely knowledge."
        ]
      },
      {
        sectionNo: "Sections 304A & 279",
        title: "Rash/Negligent Act Causing Death & Rash Driving",
        statutoryText: "Section 304A: Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide, shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.\nSection 279: Whoever drives any vehicle, or rides, on any public way in a manner so rash or negligent as to endanger human life, or to be likely to cause hurt or injury to any other person, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine which may extend to [three thousand taka], or with both.",
        simplifiedExplanation: "These sections punish conduct where there is a complete absence of criminal intention (mens rea) to cause death or injury, but the conduct is extremely reckless:\n1. Causing Death by Negligence (Section 304A): Applies when a person's rash or negligent act directly causes another's death. The act must not amount to culpable homicide (meaning there was no intent to cause bodily injury or knowledge that death was likely). Classic examples include medical malpractice or negligence in operating machinery.\n2. Rash Driving (Section 279): Criminalizes driving any vehicle on a public way in a rash or negligent manner that endangers human life, regardless of whether death or hurt actually occurs. If death does occur due to such driving, the accused is prosecuted under both sections or specifically Section 304A.",
        elements: [
          "Absence of Intention/Knowledge: The death must not be intended or known to be likely; otherwise, Section 299/300 applies.",
          "Direct Causation: The rash or negligent act must be the direct, immediate, and proximate cause of the victim's death.",
          "Gross Negligence Standard: Criminal negligence requires a much higher degree of recklessness ('gross negligence') than civil negligence.",
          "Public Road (Sec 279): Section 279 is strictly limited to acts committed on a public roadway."
        ]
      },
      {
        sectionNo: "Sections 319, 320 & 326A",
        title: "Hurt, Grievous Hurt, and Acid Throwing",
        statutoryText: "Section 319: Whoever causes bodily pain, disease or infirmity to any person is said to cause hurt.\nSection 320: Only the following kinds of hurt are designated as 'grievous':\nFirst.—Emasculation.\nSecondly.—Permanent privation of the sight of either eye.\nThirdly.—Permanent privation of the hearing of either ear.\nFourthly.—Privation of any member or joint.\nFifthly.—Destruction or permanent impairing of the powers of any member or joint.\nSixthly.—Permanent disfiguration of the head or face.\nSeventhly.—Fracture or dislocation of a bone or tooth.\nEighthly.—Any hurt which endangers life or which causes the sufferer to be during the space of twenty days in severe bodily pain, or unable to follow his ordinary pursuits.\nSection 326A: [Acid Attacks] ...whoever causes grievous hurt by use of acid... shall be punished with death, or with imprisonment for life, and also with fine...",
        simplifiedExplanation: "The Penal Code separates bodily harm into two distinct tiers:\n1. Simple Hurt (Section 319): Broadly defined as causing bodily pain, disease, or infirmity. No visible external wound is legally required.\n2. Grievous Hurt (Section 320): Strictly confined to eight specific categories. If a serious injury does not fit into one of these eight categories, it is not legally 'grievous hurt' (though it may be 'hurt endangering life' under the eighth clause). Under the 20-day rule, the victim must suffer severe pain or be unable to follow their daily routine for at least 20 days.\n3. Acid Attacks (Section 326A): In Bangladesh, causing grievous hurt by acid carries extreme, non-discretionary penalties—either death or life imprisonment—reflecting state policy to eradicate acid violence.",
        elements: [
          "Hurt Criteria: Bodily pain, physical disease, or mental/bodily infirmity are sufficient to constitute simple hurt.",
          "Exhaustive Grievous List: Grievous hurt is limited exclusively to the 8 clauses of Section 320.",
          "The 20-Day Limit: Proof of 20 days of severe pain or inability to work is essential to trigger the eighth clause of Section 320.",
          "Acid Throwing (Sec 326A): Specific intent or knowledge to cause grievous hurt via acid, punishable with death or life imprisonment."
        ]
      },
      {
        sectionNo: "Sections 339 & 340",
        title: "Wrongful Restraint vs. Wrongful Confinement",
        statutoryText: "Section 339: Whoever voluntarily obstructs any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed, is said wrongfully to restrain that person. Exception: The obstruction of a private way over land or water which a person in good faith believes himself to have a lawful right to obstruct, is not an offence...\nSection 340: Whoever voluntarily obstructs any person so as to prevent that person from proceeding beyond certain circumscribing limits, is said wrongfully to confine that person.",
        simplifiedExplanation: "These sections protect the fundamental right to liberty of movement, distinguishing by the degree of restriction:\n1. Wrongful Restraint (Section 339): A partial restriction. It prevents a person from moving in one specific direction where they have a lawful right to go, while leaving other directions of movement open (e.g., blocking a pathway).\n2. Wrongful Confinement (Section 340): A total restriction. It prevents a person from moving beyond a circumscribed, bounded limit in any direction (e.g., locking someone in a room, or surrounding them with armed guards so they cannot leave). Confinement is an aggravated form of restraint.",
        elements: [
          "Partial Restriction: Restraint blocks only a single direction of movement.",
          "Total Restriction: Confinement blocks all directions, keeping the person within designated spatial boundaries.",
          "Right to Proceed: The victim must have an actual, lawful right to proceed in the direction that was blocked.",
          "Good Faith Exception: Obstructing a private path under a honest, good-faith belief of legal right is exempt from Section 339."
        ]
      },
      {
        sectionNo: "Sections 359, 361 & 362",
        title: "Kidnapping vs. Abduction",
        statutoryText: "Section 361: [Kidnapping from lawful guardianship] Whoever takes or entices any minor under fourteen years of age if a male, or under sixteen years of age if a female, or any person of unsound mind, out of the keeping of the lawful guardian... without the consent of such guardian, is said to kidnap...\nSection 362: [Abduction] Whoever by force compels, or by deceitful means induces, any person to go from any place, is said to abduct...",
        simplifiedExplanation: "Kidnapping and Abduction have highly distinct legal boundaries:\n1. Kidnapping from Guardianship (Section 361): Strictly applies to minor boys under 14, minor girls under 16, or persons of unsound mind. The offense consists of taking or enticing them out of their guardian's custody without the guardian's consent. Crucially, the victim's consent is completely irrelevant, and no force or deceit is required.\n2. Abduction (Section 362): Applies to any person of any age. It requires the use of actual force (compulsion) or fraud/deceit (inducement) to move a person. Unlike kidnapping, abduction is not a substantive punishable offense on its own; it is an auxiliary definition that qualifies other serious crimes (e.g., abduction for ransom under Section 364A, or abduction for murder under Section 364).",
        elements: [
          "Age Thresholds: Kidnapping (guardianship) requires a minor (male < 14, female < 16). Abduction applies to any person.",
          "Force and Fraud: Essential to Abduction; completely immaterial in Kidnapping.",
          "Guardian's Consent: Lack of the guardian's consent is the core of Kidnapping; the victim's own consent does not excuse the act.",
          "Continuing Nature: Kidnapping is completed immediately when the minor is removed from custody; Abduction is a continuous offense as long as the victim is transported from place to place."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Reg. v. Govinda",
        citation: "(1876) ILR 1 Bom 147",
        court: "Bombay High Court (Foundational Precedent)",
        facts: "The accused knocked his wife down, placed his knee on her chest, and struck her several violent blows on the face with his closed fist, causing her death due to brain hemorrhage. He was prosecuted for murder.",
        held: "Justice Melvill laid down the classic comparative analysis between Section 299 (Culpable Homicide) and Section 300 (Murder) based on the degrees of probability of death. If the intended injury is 'likely to cause death', it is culpable homicide. If the intended injury is 'sufficient in the ordinary course of nature to cause death', it is murder. Because fists were used, the court held that death was a likely outcome but not objectively certain in the ordinary course of nature. The offense was reduced to culpable homicide not amounting to murder under Section 304.",
        significance: "This is the primary authority followed by courts in Bangladesh to distinguish culpable homicide from murder."
      },
      {
        title: "Nalu v. The State",
        citation: "31 DLR (AD) 314",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A sudden, heated dispute erupted over boundary lines, and both village factions engaged in a sudden clash without premeditation, leading to the death of one participant. The defense pleaded the 'Sudden Fight' exception.",
        held: "The Appellate Division accepted the defense under Exception 4 to Section 300. The Court held that for an offense of murder to be reduced to culpable homicide under this exception, the defense must establish: (1) a sudden fight, (2) absence of premeditation, (3) heat of passion upon a sudden quarrel, and (4) that the offender did not take undue advantage or act in a cruel or unusual manner. In such circumstances, the accused is guilty of culpable homicide not amounting to murder, punishable under Section 304.",
        significance: "The leading Bangladesh Appellate Division case outlining the strict requirements of the 'Sudden Fight' exception to murder."
      },
      {
        title: "State v. Jahangir Alam",
        citation: "56 DLR 1",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "The accused drove a passenger bus on a busy public highway at a reckless, highly excessive speed, colliding with pedestrian crowds and causing multiple fatalities. He was prosecuted for causing death by negligence under Section 304A.",
        held: "The High Court Division affirmed the conviction. It held that to establish criminal negligence under Section 304A, the negligence must be gross, rash, or reckless, showing an utter disregard for human life and safety. Simple civil negligence is insufficient. Driving heavy passenger vehicles at excessive speeds in crowded public areas is a rash and negligent act, directly causing the deaths.",
        significance: "Authoritative Bangladesh ruling establishing the standard of 'gross negligence' required for criminal convictions under Section 304A."
      }
    ],
    maxims: [
      {
        maxim: "Actus non facit reum nisi mens sit rea",
        translation: "An act does not make a person guilty unless there is a guilty mind.",
        application: "Applies to bodily offenses. Murder and culpable homicide require a specific level of criminal intention or knowledge. In contrast, Section 304A (negligent death) replaces standard intent with gross negligence, creating a unique statutory exception."
      },
      {
        maxim: "Volenti non fit injuria",
        translation: "To a willing person, no injury is done.",
        application: "Directly underlies Exception 5 to Section 300, which reduces murder to culpable homicide if the deceased, being above 18 years of age, voluntarily consents to take the risk of death or suffer death."
      }
    ],
    mcqs: [
      {
        id: "mcq-17-1",
        question: "Under the Penal Code, 1860, what is the conceptual relationship between 'Culpable Homicide' and 'Murder'?",
        options: [
          { id: "a", text: "They are completely unrelated offenses with different elements" },
          { id: "b", text: "Culpable Homicide is the genus, and Murder is the species" },
          { id: "c", text: "Murder is the genus, and Culpable Homicide is the species" },
          { id: "d", text: "Culpable Homicide is a minor civil wrong, while Murder is criminal" }
        ],
        correctOptionId: "b",
        explanation: "As established in landmark jurisprudence (e.g. Reg. v. Govinda), all murders are culpable homicides, but not all culpable homicides are murders. Hence, Culpable Homicide is the genus, and Murder is the species."
      },
      {
        id: "mcq-17-2",
        question: "Which of the following is NOT one of the five exceptions listed under Section 300 of the Penal Code which reduces murder to culpable homicide not amounting to murder?",
        options: [
          { id: "a", text: "Grave and sudden provocation" },
          { id: "b", text: "Sudden fight in the heat of passion upon a sudden quarrel" },
          { id: "c", text: "Extreme poverty or economic distress of the accused" },
          { id: "d", text: "The right of private defence exceeded in good faith" }
        ],
        correctOptionId: "c",
        explanation: "The five exceptions under Section 300 are: Grave and sudden provocation, exceeding private defence in good faith, public servant exceeding power, sudden fight, and consent of a victim above 18. Economic distress or poverty is not an exception."
      },
      {
        id: "mcq-17-3",
        question: "In Reg. v. Govinda (1876), what was the key legal distinction laid down by Justice Melvill between Section 299(2) and Section 300(3)?",
        options: [
          { id: "a", text: "Whether the weapon used was licensed" },
          { id: "b", text: "Whether the act was committed during the daytime or night" },
          { id: "c", text: "The degree of probability of death: 'likely to cause death' (Sec 299) vs. 'sufficient in the ordinary course of nature to cause death' (Sec 300)" },
          { id: "d", text: "The age of the accused person" }
        ],
        correctOptionId: "c",
        explanation: "Justice Melvill distinguished the two based on the degree of probability: if the bodily injury intended is only 'likely to cause death', it is culpable homicide; if the intended injury is 'sufficient in the ordinary course of nature to cause death' (high degree of probability), it is murder."
      },
      {
        id: "mcq-17-4",
        question: "What is the maximum term of imprisonment prescribed for causing death by doing a rash or negligent act under Section 304A of the Penal Code?",
        options: [
          { id: "a", text: "Up to 3 years" },
          { id: "b", text: "Up to 5 years" },
          { id: "c", text: "Up to 10 years" },
          { id: "d", text: "Imprisonment for life" }
        ],
        correctOptionId: "b",
        explanation: "Section 304A of the Penal Code, 1860 prescribes a maximum punishment of imprisonment of either description for a term which may extend to five (5) years, or with fine, or with both."
      },
      {
        id: "mcq-17-5",
        question: "Under Section 319 of the Penal Code, simple 'hurt' is defined as causing which of the following to any person?",
        options: [
          { id: "a", text: "Bodily pain, disease or infirmity" },
          { id: "b", text: "Only permanent fractures or bone dislocations" },
          { id: "c", text: "Financial loss or property damage" },
          { id: "d", text: "Mental distress or anxiety alone" }
        ],
        correctOptionId: "a",
        explanation: "Section 319 defines simple hurt as causing 'bodily pain, disease or infirmity to any person'. No visible external laceration or wound is required."
      },
      {
        id: "mcq-17-6",
        question: "How many specific categories of hurt are designated as 'Grievous Hurt' under Section 320 of the Penal Code, 1860?",
        options: [
          { id: "a", text: "Five (5) categories" },
          { id: "b", text: "Seven (7) categories" },
          { id: "c", text: "Eight (8) categories" },
          { id: "d", text: "Ten (10) categories" }
        ],
        correctOptionId: "c",
        explanation: "Section 320 explicitly designates only eight (8) specific kinds of hurt as 'grievous hurt'. Any injury not falling within these eight clauses is legally classified as simple hurt."
      },
      {
        id: "mcq-17-7",
        question: "Under the eighth clause of Section 320, a hurt is designated as grievous if it causes the sufferer to be in severe bodily pain or unable to follow his ordinary pursuits for a minimum of how many days?",
        options: [
          { id: "a", text: "Seven (7) days" },
          { id: "b", text: "Fourteen (14) days" },
          { id: "c", text: "Twenty (20) days" },
          { id: "d", text: "Thirty (30) days" }
        ],
        correctOptionId: "c",
        explanation: "The eighth clause of Section 320 requires the sufferer to be in severe bodily pain, or unable to follow his ordinary pursuits, during the space of twenty (20) days."
      },
      {
        id: "mcq-17-8",
        question: "What is the mandatory punishment prescribed in Bangladesh for causing grievous hurt by the use of acid under Section 326A of the Penal Code?",
        options: [
          { id: "a", text: "Imprisonment for up to 10 years and fine" },
          { id: "b", text: "Death, or imprisonment for life, and fine" },
          { id: "c", text: "Imprisonment for up to 7 years only" },
          { id: "d", text: "A fine of fifty thousand Taka with no imprisonment" }
        ],
        correctOptionId: "b",
        explanation: "Section 326A prescribes that whoever causes grievous hurt by the use of acid shall be punished with death, or with imprisonment for life, and also with fine."
      },
      {
        id: "mcq-17-9",
        question: "What is the key legal distinction between Wrongful Restraint (Section 339) and Wrongful Confinement (Section 340)?",
        options: [
          { id: "a", text: "Restraint is a civil wrong, while Confinement is a criminal offense" },
          { id: "b", text: "Restraint is a partial restriction (preventing movement in a specific direction), whereas Confinement is a total restriction (preventing movement beyond circumscribed limits)" },
          { id: "c", text: "Confinement requires the use of iron chains, while Restraint does not" },
          { id: "d", text: "There is no distinction; they are identical under Bangladesh law" }
        ],
        correctOptionId: "b",
        explanation: "Wrongful restraint is a partial restriction of liberty (blocking one direction in which a person has a right to proceed), whereas wrongful confinement is a total restriction of liberty (obstructing a person from proceeding beyond circumscribed, bounded limits in any direction)."
      },
      {
        id: "mcq-17-10",
        question: "Under Section 361 of the Penal Code, what are the age limits for minor males and minor females to constitute 'Kidnapping from lawful guardianship'?",
        options: [
          { id: "a", text: "Under 12 years for males, and under 14 years for females" },
          { id: "b", text: "Under 14 years for males, and under 16 years for females" },
          { id: "c", text: "Under 16 years for males, and under 18 years for females" },
          { id: "d", text: "Under 18 years for both males and females" }
        ],
        correctOptionId: "b",
        explanation: "Section 361 defines minor age limits for kidnapping from lawful guardianship as under fourteen (14) years of age for males, and under sixteen (16) years of age for females."
      }
    ]
  },
  {
    id: "chapter-18",
    title: "Chapter 18: Penal Code - Offences Against Property & Documents",
    subject: "The Penal Code, 1860",
    isCompleted: true,
    quickSummary: "This chapter covers key property offences (Theft, Extortion, Robbery, Dacoity, Criminal Misappropriation, Criminal Breach of Trust, Cheating, Mischief, and Criminal Trespass) under Sections 378-462, alongside Document Offences (Forgery, Making a False Document, and Falsification of Accounts) under Sections 463-477A.",
    studyStrategy: "Focus on the subtle differences between property crimes: (1) Theft vs. Extortion vs. Robbery vs. Dacoity, emphasizing consent, fear of injury, and the minimum of 5 persons required for Dacoity. (2) Criminal Misappropriation (initially lawful possession) vs. Criminal Breach of Trust (express entrustment). (3) Cheating vs. Simple Breach of Contract, analyzing when intent must exist. (4) Forgery, highlighting the elements of 'making a false document' under Section 464.",
    sections: [
      {
        sectionNo: "Sections 378, 383, 390 & 391",
        title: "Theft, Extortion, Robbery, and Dacoity",
        statutoryText: "Section 378: Whoever, intending to take dishonestly any moveable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.\nSection 383: Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security... commits extortion.\nSection 390: In all robbery there is either theft or extortion. [Theft is robbery if the offender causes or attempts to cause death, hurt, or wrongful restraint, or fear of instant death, hurt, or wrongful restraint to commit the theft].\nSection 391: When five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing... amount to five or more, every person so committing... is said to commit dacoity.",
        simplifiedExplanation: "These sections define the graduated scale of property crimes by force and consent:\n1. Theft (Section 378): Non-consensual taking of moveable property from someone's possession. There must be 5 ingredients: (a) dishonest intent, (b) moveable property, (c) out of possession, (d) without consent, and (e) moving of the property.\n2. Extortion (Section 383): Property is delivered by the victim because they were put in fear of injury. Consent is obtained wrongfully by coercion.\n3. Robbery (Section 390): An aggravated form of either theft or extortion. Theft becomes robbery if instant death, hurt, or wrongful restraint is used or threatened. Extortion becomes robbery if the offender is in the victim's presence and puts them in fear of instant death, hurt, or wrongful restraint.\n4. Dacoity (Section 391): Simply robbery committed or attempted conjointly by five or more persons. Dacoity is treated as a grave threat to public order and carries severe penalties.",
        elements: [
          "Theft Ingredients: Moveable property, taken out of another's possession, without consent, accompanied by a dishonest intent and actual movement.",
          "Extortion Coercion: Delivery of property induced by fear of injury. Consent is present but vitiated by fear.",
          "Robbery Threshold: Requires actual or threatened imminent death, hurt, or wrongful restraint during the commission of theft or extortion.",
          "Dacoity Count: A strict mathematical requirement of five or more conjoint participants. If fewer than five, it remains robbery."
        ]
      },
      {
        sectionNo: "Sections 403 & 405",
        title: "Criminal Misappropriation vs. Criminal Breach of Trust",
        statutoryText: "Section 403: Whoever dishonestly misappropriates or converts to his own use any moveable property, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.\nSection 405: Whoever, being in any manner entrusted with property, or with any dominion over property, dishonestly misappropriates or converts to his own use that property, or dishonestly uses or disposes of that property in violation of any direction of law prescribing the mode in which such trust is to be discharged... commits criminal breach of trust.",
        simplifiedExplanation: "These two offenses deal with dishonest conversion, distinguished by how possession began:\n1. Dishonest Misappropriation (Section 403): The accused comes into possession of the property innocently or lawfully (e.g., finding a lost wallet on the street), but subsequently develops a dishonest intent and converts it to their own use instead of returning it.\n2. Criminal Breach of Trust (Section 405): The property is explicitly entrusted to the accused (e.g., as a bailee, agent, clerk, or partner), giving them lawful dominion over it. The accused then dishonestly misappropriates, converts, or uses it in violation of the legal terms of the trust.",
        elements: [
          "Misappropriation Entry: Possession is acquired lawfully/neutrally at first; dishonest intent arises subsequently.",
          "CBT Entrustment: Requires a pre-existing fiduciary relationship or 'entrustment' of property or dominion over it.",
          "Breach of Law/Contract: CBT involves violating a legal direction of law or express/implied contractual trust.",
          "Punishment Contrast: CBT under Section 406/409 carries much higher penalties (up to life imprisonment for public servants under Section 409) than simple misappropriation (up to 2 years)."
        ]
      },
      {
        sectionNo: "Sections 415, 425 & 441",
        title: "Cheating, Mischief, and Criminal Trespass",
        statutoryText: "Section 415: Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property to any person... or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person... is said to cheat.\nSection 425: Whoever, with intent to cause, or knowing that he is likely to cause, wrongful loss or damage to the public or to any person, causes the destruction of any property, or any such change in any property... as destroys or diminishes its value or utility, or affects it injuriously, commits mischief.\nSection 441: Whoever enters into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy any person in possession of such property... is said to commit criminal trespass.",
        simplifiedExplanation: "These sections protect possession, integrity of transactions, and property values:\n1. Cheating (Section 415 / 420): Involves active deception at the inception of a transaction, leading a person to deliver property or do something to their detriment.\n2. Mischief (Section 425): Criminalizes the intentional destruction or alteration of property to cause wrongful loss or diminish its value. No profit motive is required; the focus is purely on the harm caused.\n3. Criminal Trespass (Section 441): Entering another's property with specific unlawful intent (to commit an offence, or to intimidate, insult, or annoy). It graduates to House-trespass (Section 442) if committed in a human dwelling, and House-breaking (Section 445) if entry is forced.",
        elements: [
          "Deception Requirement: Cheating requires a fraudulent or dishonest inducement at the beginning of the interaction.",
          "Mischief Harm: Focused on causing wrongful loss or damage by reducing the value, utility, or structure of property.",
          "Trespass Intent: Simple entry is not enough; there must be intent to commit an offence, or to intimidate, insult, or annoy the possessor.",
          "Aggravated Trespass: House-breaking by night (Section 446) is a severely punished form of trespass due to the threat to domestic security."
        ]
      },
      {
        sectionNo: "Sections 463 & 464",
        title: "Forgery and Making a False Document",
        statutoryText: "Section 463: Whoever makes any false document or part of a document with intent to cause damage or injury to the public or to any person, or to support any claim or title, or to cause any person to part with property... commits forgery.\nSection 464: A person is said to make a false document—First, who dishonestly or fraudulently makes, signs, seals or executes a document... with the intention of causing it to be believed that such document... was made, signed, sealed or executed by or by the authority of a person by whom or by whose authority he knows that it was not made, signed, sealed or executed...",
        simplifiedExplanation: "Forgery protects the authenticity of documents and transactions:\n1. Forgery (Section 463): The substantive offense of creating a false document with intent to defraud, cause injury, support a claim, or cause someone to part with property.\n2. Making a False Document (Section 464): Explains the mechanics of forgery. A false document is made by (a) signing, sealing, or executing a document pretending to be someone else, (b) altering an existing document without authority, or (c) procuring a document from a person of unsound mind or under deception.",
        elements: [
          "False Creation: The document must be made to appear as though it was executed by or with the authority of someone who did not authorize it.",
          "Intent to Defraud: Forgery requires a specific intent to cause injury, support a claim, or execute fraud.",
          "Valuable Security: Forging a valuable security or will carries a maximum penalty of life imprisonment under Section 467.",
          "Falsification of Accounts (Sec 477A): Specific offence for employees who alter company ledger books with intent to defraud."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Alimuddin v. The State",
        citation: "37 DLR (AD) 203",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The complainant entered into a commercial agreement with the accused and paid a substantial advance. The accused subsequently failed to deliver the promised goods or refund the money. The complainant filed a criminal case for Cheating under Section 420.",
        held: "The Appellate Division held that every breach of contract does not amount to cheating. To hold a person guilty under Section 415/420, the prosecution must prove that there was a dishonest or fraudulent intention at the very inception of the transaction. A subsequent failure to perform a contract, without proof of initial dishonest intent, is a civil dispute and cannot be prosecuted criminally.",
        significance: "The landmark Bangladesh ruling distinguishing civil breach of contract from the criminal offence of Cheating."
      },
      {
        title: "Abdul Khaleque v. The State",
        citation: "35 DLR 222",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "The accused, a bank cashier, was entrusted with cash balances and ledger records. A audit revealed a shortfall of cash. The cashier argued that simple failure to account for cash does not automatically establish dishonest intent under Section 405.",
        held: "The Court held that once entrustment of property is proved, the failure of the accused to account for the property or giving a false explanation creates a strong presumption of dishonest misappropriation, constituting Criminal Breach of Trust under Section 405/409. The operational burden shifts to the accused to explain how the entrusted property was dealt with.",
        significance: "Leading precedent on proof of entrustment and shift of operational burden in Criminal Breach of Trust cases."
      },
      {
        title: "State v. Enamul Hoque & Others",
        citation: "48 DLR 124",
        court: "Supreme Court of Bangladesh (High Court Division)",
        facts: "Six accused persons conjointly raided a village household, threatened the residents with weapons, and stole valuables. During the trial, two accused were acquitted on the benefit of the doubt, leaving only four accused convicted of Dacoity.",
        held: "The High Court Division held that the essential element of Dacoity under Section 391 is the conjoint participation of five or more persons. When the number of participants is found to be fewer than five due to acquittals, a conviction for dacoity cannot be sustained. However, the remaining four accused could still be convicted of Robbery under Section 392 if the ingredients of robbery are established.",
        significance: "Highlights the strict numerical threshold of five persons required to sustain a conviction for Dacoity."
      }
    ],
    maxims: [
      {
        maxim: "Nemo dat quod non habet",
        translation: "No one can give what they do not have.",
        application: "Relevant in property offences, particularly cheating, theft, and forgery, where an offender attempts to fraudulently transfer a title or property right that they do not lawfully possess."
      },
      {
        maxim: "Caveat emptor",
        translation: "Let the buyer beware.",
        application: "While a civil doctrine, in criminal cheating (Section 415), the prosecution must prove active deception or active concealment of facts by the accused, rather than a mere failure of the victim to exercise prudence."
      }
    ],
    mcqs: [
      {
        id: "mcq-18-1",
        question: "Under Section 378 of the Penal Code, 1860, which of the following is NOT an essential ingredient of the offense of theft?",
        options: [
          { id: "a", text: "Dishonest intention to take the property" },
          { id: "b", text: "The property must be moveable" },
          { id: "c", text: "The property must be taken out of the possession of any person" },
          { id: "d", text: "The property must be taken from a locked building or closed receptacle" }
        ],
        correctOptionId: "d",
        explanation: "The five ingredients of theft under Section 378 are: dishonest intention, moveable property, taken out of possession, without consent, and movement of the property. Taking from a locked building is an aggravated form of theft (Section 380) but not an essential ingredient of simple theft."
      },
      {
        id: "mcq-18-2",
        question: "How does Extortion (Section 383) primarily differ from Theft (Section 378) under the Penal Code?",
        options: [
          { id: "a", text: "Extortion can only be committed by a public servant" },
          { id: "b", text: "Extortion requires the consent of the victim to be obtained by putting them in fear of injury" },
          { id: "c", text: "Theft applies to both moveable and immoveable property" },
          { id: "d", text: "Extortion does not require any dishonest intention" }
        ],
        correctOptionId: "b",
        explanation: "In theft, the property is taken without the victim's consent. In extortion, the victim's consent is obtained wrongfully by putting them in fear of injury to deliver the property."
      },
      {
        id: "mcq-18-3",
        question: "Under Section 390 of the Penal Code, when does theft become robbery?",
        options: [
          { id: "a", text: "When the value of the stolen property exceeds ten thousand Taka" },
          { id: "b", text: "When the theft is committed by more than ten persons" },
          { id: "c", text: "When the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint to commit the theft" },
          { id: "d", text: "When the theft is committed during a natural disaster" }
        ],
        correctOptionId: "c",
        explanation: "Theft becomes robbery under Section 390 if the offender, in order to commit the theft, or in committing the theft, or in carrying away the property, voluntarily causes or attempts to cause death, hurt, or wrongful restraint, or fear of instant death, hurt, or wrongful restraint."
      },
      {
        id: "mcq-18-4",
        question: "What is the minimum number of persons required to conjointly commit or attempt to commit robbery to constitute 'Dacoity' under Section 391?",
        options: [
          { id: "a", text: "Three (3) persons" },
          { id: "b", text: "Five (5) persons" },
          { id: "c", text: "Seven (7) persons" },
          { id: "d", text: "Ten (10) persons" }
        ],
        correctOptionId: "b",
        explanation: "Section 391 states that when five (5) or more persons conjointly commit or attempt to commit a robbery, or are present and aiding, the offense is classified as Dacoity."
      },
      {
        id: "mcq-18-5",
        question: "Under Section 403, what is the defining feature of 'Dishonest Misappropriation of Property'?",
        options: [
          { id: "a", text: "The property is initially obtained by force" },
          { id: "b", text: "The initial possession of the property is innocent or lawful, but subsequent retention or conversion is dishonest" },
          { id: "c", text: "The property must be immoveable property like land" },
          { id: "d", text: "The victim must be a public servant" }
        ],
        correctOptionId: "b",
        explanation: "In dishonest misappropriation (Section 403), the property is initially acquired lawfully or innocently (e.g. finding lost property), but the subsequent conversion or misappropriation is done with dishonest intention."
      },
      {
        id: "mcq-18-6",
        question: "What is the key distinction between Dishonest Misappropriation (Section 403) and Criminal Breach of Trust (Section 405)?",
        options: [
          { id: "a", text: "Misappropriation requires a written contract, while Criminal Breach of Trust does not" },
          { id: "b", text: "Criminal Breach of Trust requires that the property was initially 'entrusted' to the accused person" },
          { id: "c", text: "Misappropriation carries a much higher punishment than Criminal Breach of Trust" },
          { id: "d", text: "Criminal Breach of Trust only applies to public property" }
        ],
        correctOptionId: "b",
        explanation: "The distinguishing feature is 'entrustment'. Section 405 (Criminal Breach of Trust) requires that the accused was entrusted with the property or dominion over it, creating a fiduciary relationship, whereas Section 403 does not require entrustment."
      },
      {
        id: "mcq-18-7",
        question: "According to the Supreme Court of Bangladesh in Alimuddin v. State (37 DLR (AD) 203), to constitute Cheating (Section 415), when must the dishonest intention exist?",
        options: [
          { id: "a", text: "Only after the contract is fully performed" },
          { id: "b", text: "At the very inception of the transaction" },
          { id: "c", text: "When the final payment is demanded" },
          { id: "d", text: "Intention is irrelevant if financial loss has occurred" }
        ],
        correctOptionId: "b",
        explanation: "In Alimuddin v. State, the Appellate Division ruled that for an offense of cheating, dishonest or fraudulent intention must exist at the time of the inception of the transaction. A mere breach of contract does not constitute cheating."
      },
      {
        id: "mcq-18-8",
        question: "Under Section 425 of the Penal Code, 'Mischief' requires which of the following elements?",
        options: [
          { id: "a", text: "The dishonest misappropriation of trust funds" },
          { id: "b", text: "Entering into property to intimidate or annoy another" },
          { id: "c", text: "Intent to cause, or knowledge that the act is likely to cause, wrongful loss or damage by destroying or diminishing the value of property" },
          { id: "d", text: "Making a false document to claim land ownership" }
        ],
        correctOptionId: "c",
        explanation: "Section 425 defines mischief as doing an act with intent to cause, or knowing that it is likely to cause, wrongful loss or damage by destroying or diminishing the value, utility, or structure of any property."
      },
      {
        id: "mcq-18-9",
        question: "Which of the following is defined under Section 441 as entering into property in possession of another with intent to commit an offence, or to intimidate, insult, or annoy?",
        options: [
          { id: "a", text: "Criminal Breach of Trust" },
          { id: "b", text: "Criminal Trespass" },
          { id: "c", text: "Forgery" },
          { id: "d", text: "Extortion" }
        ],
        correctOptionId: "b",
        explanation: "Section 441 defines Criminal Trespass as entering into or upon property in possession of another with intent to commit an offence, or to intimidate, insult, or annoy any person in possession."
      },
      {
        id: "mcq-18-10",
        question: "Under Section 464 of the Penal Code, what constitutes 'making a false document' for the purpose of Forgery?",
        options: [
          { id: "a", text: "Simply losing a legal document in a public place" },
          { id: "b", text: "Dishonestly or fraudulently signing, sealing, or executing a document to make it appear as if it was executed by or with the authority of another person" },
          { id: "c", text: "Writing an opinion article in a newspaper under a pseudonym" },
          { id: "d", text: "Accidentally damaging an official certificate" }
        ],
        correctOptionId: "b",
        explanation: "Section 464 states that a person makes a false document if they dishonestly or fraudulently sign, seal, or execute a document with the intent of causing it to be believed that it was made or executed by or by authority of someone who did not authorize it."
      }
    ]
  },
  {
    id: "chapter-19",
    title: "Chapter 19: Evidence Act - Admissions, Confessions & Statements",
    subject: "The Evidence Act, 1872",
    isCompleted: true,
    quickSummary: "This chapter covers key areas of the Evidence Act, 1872 (Sections 17-32), focusing on the nature and admissibility of Admissions (civil vs. criminal), Confessions (judicial, extra-judicial, and confessions to police under Section 25, custody exception under Section 26, discovery exception under Section 27, and co-accused confessions under Section 30), and Dying Declarations under Section 32(1).",
    studyStrategy: "Differentiate clearly between an Admission (civil or criminal) and a Confession (exclusively criminal). Pay close attention to the absolute bar of confessions made to police (Section 25) and how Section 27 acts as a partial proviso/exception to Sections 25 and 26. Study the evidentiary weight of co-accused confessions under Section 30, which are only corroborative and never substantive. Memorize the conditions for Dying Declarations under Section 32(1) and the rule that they can form the sole basis of conviction if deemed voluntary and true.",
    sections: [
      {
        sectionNo: "Sections 17, 18, 21 & 23",
        title: "Admissions: Definition, Persons, and Civil Exceptions",
        statutoryText: "Section 17: An admission is a statement, oral or documentary, which suggests any inference as to any fact in issue or relevant fact, and which is made by any of the persons, and under the circumstances, hereinafter mentioned.\nSection 18: Statements made by a party to the proceeding, or by an agent to any such party... are admissions...\nSection 21: Admissions are relevant and may be proved as against the person who makes them, or his representative in interest; but they cannot be proved by or on behalf of the person who makes them or by his representative in interest, except [in certain specified exceptions]...\nSection 23: In civil cases no admission is relevant, if it is made either upon an express condition that evidence of it is not to be given, or under circumstances from which the Court can infer that the parties agreed together that evidence of it should not be given.",
        simplifiedExplanation: "An admission is a voluntary acknowledgment of the existence of certain facts. It can be oral or documentary:\n1. Maker: Admissions must be made by designated persons (e.g., parties, agents, partners, representatives, or third parties with proprietary/pecuniary interest under Section 18).\n2. Admissibility Rule (Section 21): As a general rule, a person can only prove admissions made *against* them by their opponent. An admission cannot be proved *by or on behalf of* the person who made it (preventing self-serving statements), subject to exceptions (e.g., if it falls under Section 32 as a dying declaration or statement against interest).\n3. Civil Exception (Section 23): Known as 'without prejudice' communication. To encourage out-of-court settlement, any admissions made during settlement negotiations are irrelevant and protected from disclosure.",
        elements: [
          "Definition (Sec 17): Oral or documentary statements suggesting an inference as to any fact in issue or relevant fact.",
          "Authorized Makers (Sec 18): Limited strictly to parties to the suit, authorized agents, predecessors-in-interest, or persons with proprietary or pecuniary interests.",
          "Self-Harm Principle (Sec 21): Admissions are highly relevant when proved against the maker (confessions against interest are considered reliable), but generally excluded if self-serving.",
          "Without Prejudice (Sec 23): Protects confidential compromise negotiations in civil proceedings to foster mutual dispute resolution."
        ]
      },
      {
        sectionNo: "Sections 24, 25, 26 & 27",
        title: "Confessions: Involuntariness, Police Bar, and the Discovery Proviso",
        statutoryText: "Section 24: A confession made by an accused person is irrelevant in a criminal proceeding, if the making of the confession appears to the Court to have been caused by any inducement, threat or promise, having reference to the charge against the accused person, proceeding from a person in authority...\nSection 25: No confession made to a police-officer, shall be proved as against a person accused of any offence.\nSection 26: No confession made by any person whilst he is in the custody of a police-officer, unless it be made in the immediate presence of a Magistrate, shall be proved as against such person.\nSection 27: Provided that, when any fact is deposed to as discovered in consequence of information received from a person accused of any offence, in the custody of a police-officer, so much of such information, whether it amounts to a confession or not, as relates distinctly to the fact thereby discovered, may be proved.",
        simplifiedExplanation: "Confessions are a sub-species of admissions made by an accused in a criminal case acknowledging their guilt:\n1. Involuntary Confessions (Section 24): Irrelevant if induced by any threat, promise, or hope held out by a person in authority (e.g., police, magistrate, employer).\n2. Police Confession Bar (Section 25): Confessions made to any police officer (regardless of rank) are completely inadmissible. This is a strict policy to prevent police torture and forced confessions.\n3. Police Custody Bar (Section 26): Confessions made while in police custody (even if made to a doctor, visitor, or cellmate) are inadmissible unless made in the immediate, physical presence of a Magistrate.\n4. Discovery Exception (Section 27): A vital exception/proviso to Sections 25 and 26. If an accused in custody gives information that leads to the discovery of a physical fact (e.g., 'I hid the gun behind the bush'), only that specific portion of the statement which *distinctly relates* to the discovery of the physical object (the location and weapon) is admissible. The confession of guilt ('I killed him with the gun') remains excluded.",
        elements: [
          "Involuntariness Criteria: Any confession induced by threat or promise relating to the charge from a person in authority is legally void.",
          "Absolute Police Bar (Sec 25): Strict statutory exclusion of any confession made direct to a police officer, ensuring protection of human rights.",
          "Magisterial Exception (Sec 26): Custodial confessions are excluded unless a Magistrate is physically present during the confession.",
          "Strict Discovery Rule (Sec 27): Admissibility is strictly limited to the information that directly led to the discovery of the physical object; confessions of guilt are severed and excluded."
        ]
      },
      {
        sectionNo: "Section 30",
        title: "Confession of a Co-Accused",
        statutoryText: "Section 30: When more persons than one are being tried jointly for the same offence, and a confession made by one of such persons affecting himself and some other of such persons is proved, the Court may take into consideration such confession as against such other person as well as against the person who makes such confession.",
        simplifiedExplanation: "Under Section 30, the confession of one co-accused can be used against another co-accused, but only under highly strict legal conditions:\n1. Joint Trial: The accused persons must be undergoing a joint trial for the *same* offence. If they are tried separately, Section 30 cannot be invoked.\n2. Affecting Himself: The maker of the confession must fully implicate themselves. A self-exculpating statement that blames only the co-accused is not a confession and cannot be used under Section 30.\n3. Court's Discretion ('May take into consideration'): The court is not bound to use it.\n4. Evidentiary Weight: A co-accused's confession is not 'substantive evidence'. It is a very weak piece of evidence (not on oath, not subject to cross-examination). It cannot be used to start a conviction; the court must first look at other evidence, and if that evidence is almost sufficient, it can use the co-accused's confession to 'lend assurance' to the prosecution's case.",
        elements: [
          "Joint Trial Imperative: The confession is only admissible if both accused are being jointly tried in the same court for the same offence.",
          "Self-Implication Required: The maker must deeply implicate themselves in the crime alongside the co-accused.",
          "Non-Substantive Nature: It cannot serve as the sole or primary basis of a conviction; it only serves as corroboration or assurance.",
          "Weak Evidence: Lacks the safeguards of an oath or cross-examination, making it a highly scrutinized evidentiary item."
        ]
      },
      {
        sectionNo: "Section 32(1)",
        title: "Dying Declarations",
        statutoryText: "Section 32: Statements, written or verbal, of relevant facts made by a person who is dead, or who cannot be found, or who has become incapable of giving evidence... are themselves relevant facts in the following cases:\n(1) When the statement is made by a person as to the cause of his death, or as to any of the circumstances of the transaction which resulted in his death, in cases in which the cause of that person's death comes into question.",
        simplifiedExplanation: "Section 32(1) governs what is popularly known as a 'Dying Declaration'—statements made by a deceased person regarding the cause or circumstances of their death:\n1. Scope: Admissible in both civil and criminal proceedings where the cause of the person's death is in question. The declarant does not need to have been in expectation of death at the time of making the statement (unlike English law).\n2. Format: Can be written, oral, or even made by signs and gestures (e.g., nodding or pointing if unable to speak).\n3. Evidentiary Weight: A dying declaration is a highly valuable piece of evidence. If the court finds it to be true, voluntary, and free from tutoring, it can form the *sole* basis of conviction without any independent corroboration. However, as a rule of prudence, courts look for surrounding corroborative facts and analyze if the victim was in a fit mental and physical state to make the declaration.",
        elements: [
          "No Expectation of Death: Unlike English common law, a dying declaration in Bangladesh is admissible even if the deceased did not expect to die immediately when they said it.",
          "Gestures and Signs: Admissible in any clear communicative format, including non-verbal gestures (such as pointing or hand movements).",
          "Sole Basis of Conviction: If verified as entirely voluntary and true, it can support a murder conviction on its own without corroboration.",
          "Cause of Death Question: The declaration is only relevant if the cause of that specific person's death is the central issue under trial."
        ]
      }
    ],
    caseLaws: [
      {
        title: "State v. Mofizuddin",
        citation: "45 DLR (AD) 165",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The victim, prior to her death from severe burn injuries, made a detailed verbal statement to her neighbors and family members identifying her husband (the accused) as the person who set her on fire. She was in a conscious state during the declaration. The defense challenged the conviction on the ground that the dying declaration was not corroborated by any independent eyewitness.",
        held: "The Appellate Division held that a dying declaration, if found by the court to be true, voluntary, and free from any tutoring or external promptings, can form the sole basis of conviction. No corroboration of a reliable dying declaration is required as a matter of law. However, the court must exercise great caution and satisfy itself that the declarant was in a fit physical and mental condition to make the statement.",
        significance: "The foundational Bangladesh Supreme Court authority on the absolute reliability and independent value of a Dying Declaration."
      },
      {
        title: "Babul v. The State",
        citation: "52 DLR (AD) 54",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The accused made a confession before a Magistrate under Section 164 of the CrPC, but subsequently retracted it during trial, claiming it was obtained under police coercion. The trial court convicted him solely based on this retracted confession.",
        held: "The Appellate Division ruled that a retracted confession, if found voluntary and true, can legally form the basis of a conviction. However, as a rule of prudence and practice, courts should not ordinarily act upon a retracted confession without some material corroboration from independent sources. The court must first determine if the confession was voluntary, and secondly, if it is true.",
        significance: "Leading Appellate Division case setting the dual-test of 'voluntariness' and 'truthfulness' for retracted confessions."
      },
      {
        title: "State v. Abul Hashem",
        citation: "49 DLR (AD) 132",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "While in police custody, the accused confessed to committing a murder and stated that he had buried the victim's blood-stained clothes and weapon in a specific trench behind his house. Led by the accused, the police discovered those exact items. The defense argued that the entire statement was inadmissible under Section 25 and 26 of the Evidence Act.",
        held: "The Appellate Division clarified the scope of Section 27. It held that Section 27 is a proviso to Sections 25 and 26. Only that portion of the information which distinctly and directly relates to the discovery of the physical facts (the clothes and weapon) is admissible in evidence. The portion of the statement where the accused confessed to the murder itself must be strictly excluded. The discovery of the items corroborates the truth of the statement regarding their location.",
        significance: "Authoritative Bangladesh ruling explaining the split-admissibility rule of Section 27 discovery statements."
      }
    ],
    maxims: [
      {
        maxim: "Nemo moriturus praesumitur mentiri",
        translation: "A man will not meet his Maker with a lie in his mouth.",
        application: "The moral and philosophical foundation of Section 32(1) (Dying Declaration). It assumes that a person facing imminent death is highly unlikely to tell a falsehood, replacing the standard requirement of a judicial oath."
      },
      {
        maxim: "Confessio facta in judicio est plena probatio",
        translation: "A confession made in court is full proof.",
        application: "Applies to judicial confessions recorded under proper procedural safeguards (e.g. Section 164 CrPC) before a Magistrate, which carry the highest evidentiary value, unlike extra-judicial or police confessions."
      }
    ],
    mcqs: [
      {
        id: "mcq-19-1",
        question: "What is the primary distinction between an admission and a confession under the Evidence Act, 1872?",
        options: [
          { id: "a", text: "Admissions are always verbal, whereas confessions must be in writing" },
          { id: "b", text: "Admissions can be made in both civil and criminal proceedings by various parties, whereas confessions are statements by an accused in a criminal proceeding admitting guilt" },
          { id: "c", text: "Admissions are only admissible in civil suits, while confessions are only admissible in military courts" },
          { id: "d", text: "There is no legal distinction; both are identical in terms of definition and makers" }
        ],
        correctOptionId: "b",
        explanation: "An admission is the genus and covers both civil and criminal proceedings. A confession is a species of admission made by a person accused of an offence stating or suggesting the inference that he committed that offence."
      },
      {
        id: "mcq-19-2",
        question: "Under Section 21 of the Evidence Act, as a general rule, admissions are relevant and can be proved:",
        options: [
          { id: "a", text: "Only by or on behalf of the person who makes them" },
          { id: "b", text: "Against the person who makes them, or their representative-in-interest" },
          { id: "c", text: "Only by a third-party eye witness in a civil dispute" },
          { id: "d", text: "Only with the written permission of the Attorney General" }
        ],
        correctOptionId: "b",
        explanation: "Section 21 lays down that admissions are relevant and can be proved against the person who makes them, or his representative-in-interest. They cannot generally be proved by or on behalf of the maker to avoid self-serving fabrications."
      },
      {
        id: "mcq-19-3",
        question: "Under Section 23 of the Evidence Act, in civil cases, an admission is NOT relevant if:",
        options: [
          { id: "a", text: "It is made in a foreign language" },
          { id: "b", text: "It is made on an express condition that evidence of it is not to be given (without prejudice)" },
          { id: "c", text: "It is made by a woman or minor" },
          { id: "d", text: "It is made in the presence of a notary public" }
        ],
        correctOptionId: "b",
        explanation: "Section 23 protects 'without prejudice' communication in civil cases. Admissions made under express agreement or circumstances where parties agreed that evidence of it should not be given are completely irrelevant."
      },
      {
        id: "mcq-19-4",
        question: "A confession made to a police officer under Section 25 of the Evidence Act is:",
        options: [
          { id: "a", text: "Admissible if the police officer is of the rank of Inspector or above" },
          { id: "b", text: "Admissible if verified by two independent witnesses" },
          { id: "c", text: "Completely inadmissible and cannot be proved against the accused" },
          { id: "d", text: "Admissible with the special permission of the Magistrate" }
        ],
        correctOptionId: "c",
        explanation: "Section 25 imposes an absolute bar: 'No confession made to a police-officer shall be proved as against a person accused of any offence.' Rank or surrounding witnesses cannot make it admissible."
      },
      {
        id: "mcq-19-5",
        question: "Under Section 26 of the Evidence Act, a confession made by an accused while in police custody is inadmissible UNLESS:",
        options: [
          { id: "a", text: "It is recorded on video" },
          { id: "b", text: "It is made in the immediate presence of a Magistrate" },
          { id: "c", text: "It is made in the presence of a defense lawyer" },
          { id: "d", text: "It is made in a public hospital" }
        ],
        correctOptionId: "b",
        explanation: "Section 26 states that no confession made in police custody is provable unless it is made in the immediate presence of a Magistrate."
      },
      {
        id: "mcq-19-6",
        question: "Under Section 27 of the Evidence Act, what portion of information received from an accused in police custody is admissible?",
        options: [
          { id: "a", text: "The entire confession including the acknowledgment of guilt" },
          { id: "b", text: "Only that part which relates distinctly to the physical fact discovered in consequence of the information" },
          { id: "c", text: "None of the information, as police custody bars everything" },
          { id: "d", text: "Only the part where the accused names his accomplices" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 27, only so much of the information as relates *distinctly* to the fact discovered (such as location of hidden weapon/money) can be proved. The confession of guilt is strictly excluded."
      },
      {
        id: "mcq-19-7",
        question: "Under Section 30 of the Evidence Act, the confession of a co-accused can be taken into consideration ONLY if:",
        options: [
          { id: "a", text: "They are tried jointly for the same offence, and the confession affects the maker as well as the other person" },
          { id: "b", text: "The co-accused consents to the use of the confession against him" },
          { id: "c", text: "The maker of the confession is deceased before the trial starts" },
          { id: "d", text: "The confession was made to a police officer" }
        ],
        correctOptionId: "a",
        explanation: "Section 30 requires: (1) a joint trial, (2) for the same offence, and (3) the confession must affect the maker (self-implicating) as well as the other co-accused."
      },
      {
        id: "mcq-19-8",
        question: "What is the evidentiary status of a co-accused's confession under Section 30 of the Evidence Act?",
        options: [
          { id: "a", text: "It is substantive evidence that can form the sole basis of conviction" },
          { id: "b", text: "It is not substantive evidence; it is weak evidence that can only lend assurance to other existing evidence" },
          { id: "c", text: "It is conclusive proof of guilt and cannot be rebutted" },
          { id: "d", text: "It is completely irrelevant and inadmissible in Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "As established in landmark cases, a co-accused's confession is not substantive evidence because it is not given on oath and cannot be cross-examined. It can only be used to lend assurance to other independent evidence."
      },
      {
        id: "mcq-19-9",
        question: "According to the landmark Appellate Division judgment in State v. Mofizuddin (45 DLR (AD) 165), a dying declaration:",
        options: [
          { id: "a", text: "Must always be corroborated by independent eye witnesses to sustain a conviction" },
          { id: "b", text: "Can form the sole basis of a conviction without corroboration if found true, voluntary, and free from tutoring" },
          { id: "c", text: "Is only admissible if recorded in a hospital by a certified medical doctor" },
          { id: "d", text: "Is completely inadmissible if the deceased made it using gestures or signs" }
        ],
        correctOptionId: "b",
        explanation: "In State v. Mofizuddin, the Appellate Division ruled that a dying declaration, if found true and voluntary, can form the sole basis of a conviction without any corroboration."
      },
      {
        id: "mcq-19-10",
        question: "Under Section 32(1) of the Evidence Act, 1872, is it necessary for the dying declaration to be made in expectation of death?",
        options: [
          { id: "a", text: "Yes, the declarant must be in actual danger of immediate death and have given up all hope of life" },
          { id: "b", text: "No, unlike English law, there is no requirement that the statement be made under expectation of death" },
          { id: "c", text: "Yes, but only in civil proceedings" },
          { id: "d", text: "Yes, and it must be witnessed by a public notary" }
        ],
        correctOptionId: "b",
        explanation: "Unlike English law, under Section 32(1) of the Evidence Act, 1872 of Bangladesh, the statement is admissible whether the person who made it was or was not at the time in expectation of death."
      }
    ]
  },
  {
    id: "chapter-20",
    title: "Chapter 20: Evidence Act - Burden of Proof, Estoppel & Witnesses",
    subject: "The Evidence Act, 1872",
    isCompleted: true,
    quickSummary: "This chapter covers essential principles regarding the Burden of Proof (Sections 101-114A), the doctrine of Estoppel (Sections 115-117), and the rules surrounding Witness Competency, Privileges, and Examinations (Sections 118-134, 135-166).",
    studyStrategy: "1. Clarify the distinction between 'Burden of Proof' (never shifts in criminal trials, rests on prosecution) and 'Onus of Proof' (shifting of evidence-burden). 2. Learn the statutory exceptions to standard burdens of proof, especially Section 105 (burden of proving general exceptions rests on the accused). 3. Examine the interaction between Section 114 illustration (b) (accomplice requires corroboration) and Section 133 (accomplice is competent; uncorroborated testimony is legal to convict), resolving it with Bangladesh Supreme Court precedents. 4. Master the three types of Estoppel under Section 115 and the strict limits of tenant-landlord estoppel (Section 116).",
    sections: [
      {
        sectionNo: "Sections 101 to 105 & 112",
        title: "Burden of Proof, Shifting of Burden, and Legitimacy",
        statutoryText: "Section 101: Whoever desires any Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts, must prove that those facts exist...\nSection 102: The burden of proof in a suit or proceeding lies on that person who would fail if no evidence at all were given on either side.\nSection 103: The burden of proof as to any particular fact lies on that person who wishes the Court to believe in its existence...\nSection 105: When a person is accused of any offence, the burden of proving the existence of circumstances bringing the case within any of the General Exceptions in the Penal Code... is upon him, and the Court shall presume the absence of such circumstances.\nSection 112: The fact that any person was born during the continuance of a valid marriage between his mother and any man... shall be conclusive proof that he is the legitimate son of that man, unless it can be shown that the parties to the marriage had no access to each other at any time when he could have been begotten.",
        simplifiedExplanation: "An understanding of the 'Burden of Proof' requires separating two concepts:\n1. Legal Burden of Proof (Section 101): This is the obligation on a party to establish their entire case to the legal standard. In criminal cases, this is strictly on the prosecution to prove guilt 'beyond reasonable doubt' (BARD). This burden never shifts.\n2. Onus of Proof (Section 102): This is the evidentiary burden of introducing evidence to support or rebut a claim. It is dynamic and shifts constantly during trial depending on who would lose if no further evidence was presented.\n3. Defenses & General Exceptions (Section 105): When an accused claims a general defense (e.g., insanity, private defense, or accident under the Penal Code), the law presumes the absence of those facts, placing the burden of proof on the accused. However, the accused's burden is lighter: they only need to prove their defense on a 'preponderance of probabilities' (the civil standard) rather than beyond reasonable doubt.\n4. Legitimacy Presumption (Section 112): A child born during a valid marriage, or within 280 days after its dissolution (the mother remaining unmarried), is conclusively deemed the legitimate child of the husband. Rebutting this extremely strong presumption requires proving that the parties had 'no access' to each other (no physical opportunity of cohabitation/sexual contact) at any time when the child could have been conceived. Biological tests like DNA paternity are only considered if non-access is first established or as part of proving non-access.",
        elements: [
          "Static Legal Burden (Sec 101): Lies on the party asserting an affirmative legal claim; never shifts during the trial.",
          "Dynamic Evidentiary Onus (Sec 102): Shifts from party to party as evidence is produced; rests on whoever would fail if no more evidence were given.",
          "Exculpatory Burden (Sec 105): Accused must prove general exceptions, though to a lower civil standard (probabilities).",
          "Conclusive Presumption of Legitimacy (Sec 112): Protects status of children; rebuttable only by proving absolute 'non-access'."
        ]
      },
      {
        sectionNo: "Section 114",
        title: "Presumptions of Fact and Judicial Common-Sense",
        statutoryText: "Section 114: The Court may presume the existence of any fact which it thinks likely to have happened, regard being had to the common course of natural events, human conduct and public and private business, in their relation to the facts of the particular case...\nIllustration (a): A man who is in possession of stolen goods soon after the theft is either the thief or has received the goods knowing them to be stolen, unless he can account for his possession;\nIllustration (b): An accomplice is unworthy of credit, unless he is corroborated in material particulars;",
        simplifiedExplanation: "Section 114 grants courts the discretionary power of drawing logical common-sense presumptions ('may presume'):\n1. Basis of Presumption: Presumptions are drawn based on natural developments, regular business routines, and standard human conduct in relation to the case facts. These are rebuttable presumptions of fact, meaning they can easily be disproved with evidence.\n2. Possession of Stolen Goods (Illustration a): If someone is caught with stolen items shortly after a theft, the court can assume they are either the thief or a knowing receiver, unless they can account for their possession with a credible, lawful explanation.\n3. Accomplice Untrustworthiness (Illustration b): Recognizes that an accomplice (someone who participated in the crime) is naturally inclined to minimize their role or lie, making their uncorroborated testimony untrustworthy under normal prudence.",
        elements: [
          "Discretionary Inference: The court 'may presume' facts but is not legally bound to do so.",
          "Common Course: Guided strictly by common-sense, natural events, human conduct, and standard business practices.",
          "Recent Possession: Possession of stolen property shortly after a crime creates an inference of guilt, shifting onus to the holder.",
          "Prudential Safeguard: Warns the court that an accomplice is unsafe to believe unless corroborated by independent material evidence."
        ]
      },
      {
        sectionNo: "Sections 115 to 117",
        title: "The Doctrine of Estoppel",
        statutoryText: "Section 115: When one person has, by his declaration, act or omission, intentionally caused or permitted another person to believe a thing to be true and to act upon such belief, neither he nor his representative shall be allowed, in any suit or proceeding between himself and such person or his representative, to deny the truth of that thing.\nSection 116: No tenant of immovable property, or person claiming through such tenant, shall, during the continuance of the tenancy, be permitted to deny that the landlord of such tenant had, at the beginning of the tenancy, a title to such immovable property...",
        simplifiedExplanation: "Estoppel is a fundamental rule of equity and evidence:\n1. Core Rule (Section 115): If a person, by their words, actions, or silence, leads another to believe a fact is true and that second person acts on it to their detriment, the first person cannot later deny that fact in court. It is a 'shield' (defense) rather than a 'sword' (it does not create a new cause of action).\n2. No Estoppel Against Statute: A critical limitation. If a statute declares an action void or illegal (e.g., a contract signed by a minor or a land transfer violating public law), estoppel cannot be used to bypass the law or make an illegal act valid.\n3. Tenant Estoppel (Section 116): A tenant who has taken possession of property from a landlord is legally barred from disputing that landlord's title at the start of the tenancy as long as the tenancy continues. This prevents a tenant from withholding rent or claiming ownership by challenging the landlord's original right.",
        elements: [
          "Tripartite Foundation: Requires (1) representation by declaration/act/omission, (2) reliance on that representation, and (3) change of position or detriment.",
          "Rule of Exclusion: Prevents the representing party from giving evidence to contradict their previous representation.",
          "Statutory Precedence: Estoppel can never be pleaded against a positive statutory provision or public law.",
          "Tenant and Licensee Estoppel (Sec 116): Establishes a strict bar protecting landlords and property owners from tenants who challenge their title during tenancy."
        ]
      },
      {
        sectionNo: "Sections 118, 120, 133 & 134",
        title: "Witness Competency, Child Testimony, and the Accomplice Paradox",
        statutoryText: "Section 118: All persons shall be competent to testify unless the Court considers that they are prevented from understanding the questions put to them, or from giving rational answers to those questions, by tender years, extreme old age, disease, whether of body or mind, or any other cause of the same kind.\nSection 133: An accomplice shall be a competent witness against an accused person; and a conviction is not illegal merely because it proceeds upon the uncorroborated testimony of an accomplice.\nSection 134: No particular number of witnesses shall in any case be required for the proof of any fact.",
        simplifiedExplanation: "These sections outline who can testify and the weight given to their testimony:\n1. Competency General Rule (Section 118): Anyone is competent to testify if they can comprehend questions and give rational answers. Age is no bar. A child is competent if they understand the obligation to tell the truth. The court tests this through a preliminary examination called 'voir dire'.\n2. The Accomplice Paradox (Section 133 vs. Section 114 illus b): This is a classic conflict. Section 133 states a rule of law: an accomplice is competent and a conviction based on their uncorroborated testimony is technically legal. However, Section 114 illustration (b) states a rule of prudence: an accomplice is unworthy of credit without corroboration. Precedents resolve this: while a conviction based solely on an accomplice is not *illegal*, as a mandatory rule of practice and prudence, courts will not convict unless there is independent corroboration in material details connecting the accused to the crime.\n3. Quality Over Quantity (Section 134): No minimum number of witnesses is required. The court can convict based on the sole, uncorroborated testimony of a single reliable eyewitness if they are completely credible. Evidence is weighed, not counted.",
        elements: [
          "Rationality Test (Sec 118): Competency is decided solely by the capacity to comprehend questions and formulate rational responses.",
          "Voir Dire Check: Preliminary inquiry by the judge to evaluate the cognitive maturity and moral understanding of child or elderly witnesses.",
          "Accomplice Reconciliation: Combining Section 133 (strict legality of conviction) with Section 114(b) (prudent requirement for material corroboration).",
          "Numerical Irrelevance (Sec 134): Eradicates the requirement of multiple witnesses; a single highly reliable witness is sufficient in any trial."
        ]
      }
    ],
    caseLaws: [
      {
        title: "State v. Abdul Latif",
        citation: "50 DLR (AD) 12",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The accused was convicted of murder based largely on the testimony of an accomplice who turned state's witness (approver) under a promise of pardon. The defense appealed, arguing that under Section 114 illustration (b), an accomplice is unworthy of credit without independent material corroboration, making the conviction unsafe.",
        held: "The Appellate Division reconciled the statutory conflict between Section 133 and Section 114 illustration (b). The court held that while Section 133 makes an accomplice competent and a conviction on uncorroborated testimony legal, Section 114 illustration (b) lays down a rule of practice and prudence that has acquired the force of law. Therefore, as a matter of safety and practice, courts should not convict an accused solely on accomplice testimony unless it is corroborated in material particulars by independent evidence connecting the accused with the crime.",
        significance: "The definitive authority on the reconciliation of Section 133 and Section 114 illustration (b) regarding accomplice corroboration."
      },
      {
        title: "Government of Bangladesh v. Standard Chartered Bank",
        citation: "57 DLR (AD) 148",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The government had issued regulatory clearances and permitted certain complex financial transactions, but later attempted to challenge the validity of those clearances, claiming its officers acted outside administrative rules. The bank pleaded the doctrine of Estoppel under Section 115.",
        held: "The Appellate Division held that while Estoppel under Section 115 is a powerful rule of equity preventing a party from denying their own representations, there can be 'no estoppel against a statute or the law'. If a representation or act is fundamentally contrary to a statutory provision or public law, estoppel cannot be used to validate an illegal act or prevent the government from enforcing the statute.",
        significance: "Establishes the supreme exception to the doctrine of Estoppel—that it cannot be used to defeat or bypass a statutory command."
      },
      {
        title: "Siddique Ali v. Sakhina Bibi",
        citation: "41 DLR (AD) 84",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A husband disputed the legitimacy of a child born during a valid marriage, claiming they were living separately for a period. He demanded a DNA paternity test to disprove legitimacy under Section 112. The mother argued that birth during a valid marriage is conclusive proof of legitimacy.",
        held: "The Appellate Division ruled that Section 112 creates an extremely strong presumption of 'conclusive proof' of legitimacy. This presumption can be disproved *only* by establishing that the husband and wife had 'no access' to each other at any time when the child could have been begotten. If 'access' (the opportunity of physical contact) existed, the court must presume legitimacy, and scientific or other tests cannot override this statutory conclusive proof unless non-access is proved first.",
        significance: "Precedent explaining the strictness of Section 112's presumption of legitimacy and the single available defense of proving 'non-access'."
      }
    ],
    maxims: [
      {
        maxim: "Allegans contraria non est audiendus",
        translation: "He who alleges contradictory things is not to be heard.",
        application: "The foundational maxim of the Doctrine of Estoppel under Section 115. It prevents a litigant from asserting a fact in court that directly contradicts their previous statements or actions upon which another party relied."
      },
      {
        maxim: "Ei incumbit probatio qui dicit, non qui negat",
        translation: "The burden of proof lies upon him who affirms, not on him who denies.",
        application: "Reflects the core principle of Section 101 of the Evidence Act, requiring the party who brings an allegation or asserts a claim to carry the legal burden of proving those facts to the court."
      }
    ],
    mcqs: [
      {
        id: "mcq-20-1",
        question: "Under Section 101 of the Evidence Act, 1872, who carries the 'legal burden of proof' in a trial?",
        options: [
          { id: "a", text: "The party who asserts the affirmative of a fact in issue or legal claim" },
          { id: "b", text: "The court itself through its investigating magistrate" },
          { id: "c", text: "The defendant or accused in all criminal proceedings" },
          { id: "d", text: "The witness who was first summoned to testify" }
        ],
        correctOptionId: "a",
        explanation: "Section 101 states that whoever desires any court to give judgment as to any legal right or liability dependent on facts which he asserts must prove that those facts exist. The legal burden remains on the asserting party."
      },
      {
        id: "mcq-20-2",
        question: "What is the primary difference between the 'Burden of Proof' (Section 101) and 'Onus of Proof' (Section 102)?",
        options: [
          { id: "a", text: "The burden of proof shifts constantly, while the onus of proof never shifts" },
          { id: "b", text: "The burden of proof is the permanent legal obligation to prove a case, which never shifts, while the onus of proof is the shifting evidentiary burden that moves between parties during trial" },
          { id: "c", text: "The burden of proof applies only in civil cases, whereas the onus of proof applies only in criminal cases" },
          { id: "d", text: "There is no difference; they are legally and procedurally identical" }
        ],
        correctOptionId: "b",
        explanation: "The legal burden of proof is fixed by pleadings (or charges) and never shifts. The onus of proof is the evidentiary burden (Section 102) which shifts back and forth depending on who would fail if no more evidence were presented."
      },
      {
        id: "mcq-20-3",
        question: "Under Section 105 of the Evidence Act, if an accused claims the defense of 'Insanity' under the Penal Code, the burden of proving insanity lies on:",
        options: [
          { id: "a", text: "The prosecution, who must prove the accused was sane beyond reasonable doubt" },
          { id: "b", text: "The accused person themselves" },
          { id: "c", text: "The medical board appointed by the jail authority" },
          { id: "d", text: "The court, which must investigate on its own motion" }
        ],
        correctOptionId: "b",
        explanation: "Section 105 explicitly states that when a person is accused of any offence, the burden of proving circumstances bringing the case within any of the General Exceptions in the Penal Code (which includes Insanity under Section 84) is upon the accused."
      },
      {
        id: "mcq-20-4",
        question: "Under Section 112 of the Evidence Act, the legitimacy of a child born during a valid marriage can be rebutted ONLY by proving:",
        options: [
          { id: "a", text: "A blood group or DNA test showing a mismatch" },
          { id: "b", text: "That the parties to the marriage had 'no access' to each other at any time when the child could have been begotten" },
          { id: "c", text: "That the mother committed adultery with another man" },
          { id: "d", text: "That the marriage was registered in an incorrect format" }
        ],
        correctOptionId: "b",
        explanation: "Section 112 declares that birth during a valid marriage is conclusive proof of legitimacy, unless it can be shown that the parties had 'no access' to each other at any time when the child could have been begotten. Non-access is the sole statutory rebuttal."
      },
      {
        id: "mcq-20-5",
        question: "Under Section 114 of the Evidence Act, what is the nature of the presumptions drawn by the court?",
        options: [
          { id: "a", text: "They are Conclusive Proof and cannot be disproved under any circumstances" },
          { id: "b", text: "They are discretionary presumptions of fact ('may presume') that the court can draw or refuse to draw based on common sense, natural events, and human conduct" },
          { id: "c", text: "They are mandatory presumptions of law ('shall presume') that the court must draw unless rebutted" },
          { id: "d", text: "They are absolute bar on further evidence" }
        ],
        correctOptionId: "b",
        explanation: "Section 114 uses the phrase 'The Court may presume', which gives the court discretion to presume facts based on natural events, human conduct, and business affairs. These are rebuttable presumptions of fact."
      },
      {
        id: "mcq-20-6",
        question: "The Doctrine of Estoppel as defined under Section 115 is a rule of:",
        options: [
          { id: "a", text: "Criminal procedure that allows the state to seize illegal property" },
          { id: "b", text: "Substantive law that creates a new cause of action or lawsuit" },
          { id: "c", text: "Evidence and equity that prevents a person from denying a statement of fact they previously induced another to act upon" },
          { id: "d", text: "Constitutional law governing treaties with foreign nations" }
        ],
        correctOptionId: "c",
        explanation: "Estoppel is a rule of evidence and equity. It does not create a new cause of action (not a sword), but prevents a party from denying a representation of fact that they previously asserted (a shield) if another party acted on it to their detriment."
      },
      {
        id: "mcq-20-7",
        question: "Is there any estoppel against a statute or positive law in Bangladesh?",
        options: [
          { id: "a", text: "Yes, estoppel is a constitutional rule and always overrides any statute" },
          { id: "b", text: "No, there can be no estoppel against a statute; the law of the land must always prevail over individual representations" },
          { id: "c", text: "Yes, but only in commercial contracts involving multinational banks" },
          { id: "d", text: "Yes, if the representation was made by a cabinet minister" }
        ],
        correctOptionId: "b",
        explanation: "As established in landmark cases like Government of Bangladesh v. Standard Chartered Bank, there is no estoppel against a statute. No representation can make a legally void or illegal act valid."
      },
      {
        id: "mcq-20-8",
        question: "Under Section 118, what is the sole test of competency of a witness?",
        options: [
          { id: "a", text: "The witness must be at least 14 years of age and hold a national ID card" },
          { id: "b", text: "The witness must be literate and able to sign their name" },
          { id: "c", text: "The witness must be able to understand the questions put to them and give rational answers" },
          { id: "d", text: "The witness must believe in God or a higher power" }
        ],
        correctOptionId: "c",
        explanation: "Section 118 specifies that all persons are competent to testify unless the court considers they are prevented from understanding the questions or giving rational answers due to tender years, extreme age, disease, or similar cause."
      },
      {
        id: "mcq-20-9",
        question: "How does the Supreme Court of Bangladesh reconcile Section 133 (accomplice is competent; conviction not illegal on uncorroborated testimony) with Section 114 illustration (b) (accomplice unworthy of credit without corroboration)?",
        options: [
          { id: "a", text: "Section 133 is completely struck down as unconstitutional" },
          { id: "b", text: "Section 133 is a rule of strict law, while Section 114(b) is a rule of prudence; as a rule of practice, courts will not convict an accused solely on accomplice testimony without material corroboration" },
          { id: "c", text: "Section 114(b) applies only to minor offences, while Section 133 applies to murder" },
          { id: "d", text: "They are treated as identical, meaning accomplices never need corroboration" }
        ],
        correctOptionId: "b",
        explanation: "In State v. Abdul Latif (50 DLR (AD) 12), the court clarified that while a conviction is not illegal under Section 133 if uncorroborated, as a rule of practice and prudence, the court will demand material corroboration under Section 114(b) to ensure justice."
      },
      {
        id: "mcq-20-10",
        question: "Under Section 134 of the Evidence Act, how many witnesses are required by law to prove any fact?",
        options: [
          { id: "a", text: "At least two eye witnesses in civil cases, and three in criminal cases" },
          { id: "b", text: "No particular number of witnesses is required; the court evaluates quality and credibility, not quantity" },
          { id: "c", text: "Exactly one eye witness and one corroborative witness" },
          { id: "d", text: "A minimum of five witnesses in cases of dacoity or murder" }
        ],
        correctOptionId: "b",
        explanation: "Section 134 states: 'No particular number of witnesses shall in any case be required for the proof of any fact.' The law of evidence values quality of testimony, not the count of witnesses."
      }
    ]
  },
  {
    id: "chapter-21",
    title: "Chapter 21: Limitation Act - Bar, Extensions & Legal Disabilities",
    subject: "The Limitation Act, 1908",
    isCompleted: true,
    quickSummary: "This chapter covers the crucial concepts of the Limitation Act, 1908, detailing the absolute bar of limitation (Section 3), condonation of delay for appeals and applications (Section 5), legal disabilities and their scope (Sections 6-8), the continuous running of time (Section 9), exclusion of time spent in wrong forums (Section 14), and the effects of written acknowledgment (Section 19) and payment (Section 20).",
    studyStrategy: "Focus heavily on the structural boundaries of key sections: (1) Section 3 is mandatory and must be applied by the court even if not pleaded. (2) Section 5 applies strictly to appeals, review, revision, and specific applications, but never to suits or execution petitions. (3) Section 6 only protects minors, insane, and idiots, and Section 8 limits any post-disability extension to a maximum of 3 years. (4) Section 9 emphasizes that once limitation begins, subsequent disabilities do not halt it. (5) Section 14 requires bona fide action, and Section 19 demands a signed acknowledgment of debt before the expiry of the original limitation period.",
    sections: [
      {
        sectionNo: "Section 3",
        title: "The Mandatory Bar of Limitation",
        statutoryText: "Section 3: Subject to the provisions contained in sections 4 to 25 (inclusive), every suit instituted, appeal preferred, and application made after the period of limitation prescribed therefor by the first schedule shall be dismissed, although limitation has not been set up as a defence.",
        simplifiedExplanation: "Section 3 forms the bedrock of limitation law. It is a mandatory rule of public policy. Even if the defendant does not raise the plea of limitation, or explicitly waives it, the court has an absolute statutory duty to dismiss any suit, appeal, or application if it is filed even one day after the prescribed limitation period. Limitation bars the judicial remedy but does not extinguish the underlying right itself (except in Section 28 regarding adverse possession of property).",
        elements: [
          "Mandatory Duty: Courts must dismiss time-barred proceedings on their own motion.",
          "No Waiver: Parties cannot waive the statute of limitation by contract or agreement.",
          "Remedy vs. Right: Only the remedy in court is barred; the substantive legal right itself remains intact (e.g., a time-barred debt still exists as a valid moral obligation).",
          "Exception: Pre-requisites in Sections 4 to 25 can extend or exclude certain periods."
        ]
      },
      {
        sectionNo: "Section 5",
        title: "Condonation of Delay and the 'Sufficient Cause' Test",
        statutoryText: "Section 5: Any appeal or any application for a revision or a review of a judgment or for leave to appeal or any other application to which this section may be made applicable by or under any enactment for the time being in force may be admitted after the period of limitation prescribed therefor, when the appellant or applicant satisfies the Court that he had sufficient cause for not preferring the appeal or making the application within such period.",
        simplifiedExplanation: "Section 5 provides a mechanism of equity to excuse delay, but with extremely strict limits:\n1. Application: It applies strictly to appeals, reviews, revisions, leave to appeal, or applications specifically authorized by other laws. It does NOT apply to original civil suits or execution petitions.\n2. Discretionary Nature: Condoning delay is a discretionary power of the court, not a matter of right for the litigant.\n3. Sufficient Cause: The applicant must show 'sufficient cause' that prevented them from acting in time. Negligence, deliberate inaction, or lack of bona fides are never sufficient. The rule of practice requires explaining 'every day's delay' in a detailed condonation petition.",
        elements: [
          "Strict Application: Applicable only to appeals and applications; completely excluded from suits and execution petitions.",
          "Sufficient Cause Standard: Requires demonstrating a bona fide, uncontrollable obstacle (e.g., serious illness, sudden confinement, or mistake of counsel).",
          "Every Day's Delay: The petitioner must meticulously explain each day of the delay between the expiry of limitation and the actual filing.",
          "No Right: Even if sufficient cause is shown, the court retains the ultimate equitable discretion to grant or refuse condonation."
        ]
      },
      {
        sectionNo: "Sections 6, 7, 8 & 9",
        title: "Legal Disabilities and Continuous Time",
        statutoryText: "Section 6: Where a person entitled to institute a suit or make an application for the execution of a decree is, at the time from which the period of limitation is to be reckoned, a minor, or insane, or an idiot, he may institute the suit or make the application within the same period after his disability has ceased, as would otherwise have been allowed...\nSection 8: Nothing in section 6 or in section 7... shall be deemed to extend, for more than three years from the cessation of the disability or the death of the person affected thereby, the period within which any suit must be instituted or application made.\nSection 9: Where once time has begun to run, no subsequent disability or inability to sue stops it...",
        simplifiedExplanation: "These sections govern how the law handles individuals who are legally incapable of managing their affairs at the time their cause of action arises:\n1. Three Recognized Disabilities (Section 6): Only minority, insanity, and idiocy are recognized as legal disabilities. Physical illness or imprisonment are not legal disabilities under the Act.\n2. Reckoning: The disability must exist at the time the limitation begins. If the person is healthy when the right to sue arises, and becomes insane the next day, Section 6 does not apply.\n3. The Three-Year Cap (Section 8): Section 8 acts as a proviso to Section 6. After the disability ends (e.g., a minor turns 18), the maximum extension they can get is three years. If the remaining standard limitation period is longer than 3 years, they get that standard period, but they never get more than 3 years extra from the date of cessation of disability.\n4. Continuous Running (Section 9): Once limitation starts running, no subsequent event, disability (such as sudden mental breakdown), or inability (such as being in a foreign land) can halt or pause the clock.",
        elements: [
          "Exclusive Disabilities: Limited strictly to Minority (under 18), Insanity, and Idiocy.",
          "Temporal Requirement: The disability must exist at the very inception when the cause of action first accrues.",
          "The Three-Year Limit (Sec 8): Limits any post-disability extension to a maximum of 3 years from the date the disability ceases or the person dies.",
          "Uninterruptible Clock (Sec 9): Once limitation commences, subsequent disabilities or inabilities are legally powerless to pause it."
        ]
      },
      {
        sectionNo: "Section 14",
        title: "Bona Fide Proceedings in Wrong Courts",
        statutoryText: "Section 14: In computing the period of limitation prescribed for any suit, the time during which the plaintiff has been prosecuting with due diligence another civil proceeding, whether in a Court of first instance or in a Court of appeal, against the defendant, shall be excluded, where the proceeding is founded upon the same cause of action and is prosecuted in good faith in a Court which, from defect of jurisdiction, or other cause of a like nature, is unable to entertain it.",
        simplifiedExplanation: "Section 14 protects litigants who actively pursue their rights but mistakenly file their suit in the wrong court. The time spent in the incorrect forum is excluded, provided:\n1. Due Diligence & Good Faith: The plaintiff acted honestly and carefully.\n2. Same Parties & Cause of Action: The dispute must be identical.\n3. Defect of Jurisdiction: The incorrect court was legally unable to decide the case due to a defect like territorial, pecuniary, or subject-matter jurisdiction.",
        elements: [
          "Time Exclusion: Subtracts the exact duration spent prosecuting in the incorrect court from the limitation calculation.",
          "Good Faith Requirement: The error must be honest and not a product of gross negligence or deliberate delay.",
          "Jurisdictional Defect: The incorrect court must have lacked the legal authority to hear the case.",
          "Same Cause: The active dispute and parties in both courts must be identical."
        ]
      },
      {
        sectionNo: "Sections 19 & 20",
        title: "Written Acknowledgments and Part Payments",
        statutoryText: "Section 19: Where, before the expiration of the period prescribed for a suit or application in respect of any property or right, an acknowledgment of liability in respect of such property or right has been made in writing signed by the party against whom such property or right is claimed... a fresh period of limitation shall be computed from the time when the acknowledgment was so signed.\nSection 20: Where payment on account of a debt or of interest on a legacy is, before the expiration of the prescribed period, paid by the person liable to pay the debt or legacy... a fresh period of limitation shall be computed from the time when the payment was made...",
        simplifiedExplanation: "Sections 19 and 20 provide methods where a debtor or defendant can reset the limitation clock:\n1. Acknowledgment of Debt (Section 19): If the debtor acknowledges the debt in a written, signed statement *before* the 3-year limitation expires, a brand new 3-year limitation period starts running from the date of that signature. If the acknowledgment is made *after* the period expired, it cannot revive the dead claim under Section 19.\n2. Part Payment (Section 20): A physical payment of a portion of the debt or interest resets the clock to a fresh full limitation period, provided there is a written record of the payment signed by the debtor.",
        elements: [
          "Temporal Boundary: The acknowledgment or payment must occur strictly before the original limitation period has run out.",
          "Written & Signed: Must be in writing and signed by the party liable or their authorized agent.",
          "Limitation Reset: Computes a fresh, full limitation period starting from the exact date of acknowledgment or payment.",
          "Revival Bar: An acknowledgment made after the expiry of the limitation period is legally ineffective to revive the remedy."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Province of East Pakistan v. Abdul Hamid Darji",
        citation: "16 DLR (SC) 18",
        court: "Supreme Court of Pakistan (Pre-independence precedent applied in Bangladesh)",
        facts: "The government sought to file a civil appeal after the expiration of the prescribed period of limitation, citing bureaucratic files moving through multiple departments as 'sufficient cause' for condonation under Section 5.",
        held: "The Supreme Court held that Section 5 condonation is a matter of judicial discretion and not administrative convenience. The petitioner must account for and explain 'every day's delay' with precise, credible facts showing how they were prevented from filing. Routine administrative red-tape or standard file-routing does not constitute 'sufficient cause'.",
        significance: "The foundational authority on the strict 'each day's delay' explanation requirement for Section 5 condonation petitions."
      },
      {
        title: "Bangladesh v. Sreegopal Bhandari",
        citation: "57 DLR (AD) 148",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "A plaintiff filed a title suit in a Munsif (Assistant Judge) court. After several years of litigation, the court returned the plaint because the valuation of the suit exceeded the court's pecuniary jurisdiction. When filed in the correct Subordinate Judge court, the defendant claimed the suit was barred by limitation.",
        held: "The Appellate Division held that the time spent actively prosecuting the suit in the first court must be completely excluded under Section 14. The plaintiff acted in good faith and with due diligence, and the first court was unable to entertain it solely due to a 'defect of jurisdiction'.",
        significance: "Leading Bangladesh Supreme Court decision outlining the application and strict requirements of Section 14 for time exclusion."
      },
      {
        title: "Sonali Bank v. Haji Abdul Khaleque",
        citation: "42 DLR (AD) 124",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "The bank sued a borrower for loan recovery. The borrower had signed a balance confirmation and acknowledgment of liability letter exactly 2 years and 11 months after taking the loan. The borrower argued that since the suit was filed 5 years after the initial loan, it was barred by the 3-year limitation.",
        held: "The Appellate Division ruled that the signed balance confirmation constituted a valid acknowledgment of liability under Section 19 of the Limitation Act. Since it was signed *before* the original 3-year limitation had expired, it successfully reset the limitation clock, starting a fresh 3-year period from the date of the signature. Thus, the suit was within time.",
        significance: "Authoritative case establishing that bank balance confirmations signed within the limitation period act as Section 19 acknowledgments resetting the clock."
      }
    ],
    maxims: [
      {
        maxim: "Vigilantibus non dormientibus jura subveniunt",
        translation: "The laws assist the vigilant, not those who sleep over their rights.",
        application: "The primary policy rationale behind the Limitation Act. It seeks to prevent stale claims, protect defendants from endless legal threats, and ensure that litigation is brought while evidence and memories are fresh."
      },
      {
        maxim: "Interest reipublicae ut sit finis litium",
        translation: "It is in the interest of the state that there be an end to litigation.",
        application: "Underpins Section 3 and the entire Limitation Act, emphasizing that public interest demands a temporal limit on disputes to maintain social peace and legal certainty."
      }
    ],
    mcqs: [
      {
        id: "mcq-21-1",
        question: "Under Section 3 of the Limitation Act, 1908, if a suit is filed after the prescribed period of limitation, the court:",
        options: [
          { id: "a", text: "Must dismiss the suit, even if the defendant has not raised limitation as a defense" },
          { id: "b", text: "Can only dismiss the suit if the defendant files a formal written objection" },
          { id: "c", text: "Has discretion to hear the case if the plaintiff pays a special court fee" },
          { id: "d", text: "Must refer the matter to the Attorney General for mediation" }
        ],
        correctOptionId: "a",
        explanation: "Section 3 is mandatory. It states that every suit instituted after the period of limitation shall be dismissed, 'although limitation has not been set up as a defence.' The court has a statutory duty to apply it."
      },
      {
        id: "mcq-21-2",
        question: "Section 5 of the Limitation Act (Condonation of Delay) is strictly NOT applicable to:",
        options: [
          { id: "a", text: "Appeals in civil matters" },
          { id: "b", text: "Civil suits and applications for execution of decrees" },
          { id: "c", text: "Applications for review of judgments" },
          { id: "d", text: "Applications for revision of orders" }
        ],
        correctOptionId: "b",
        explanation: "By its express terms, Section 5 applies to appeals, applications for review, revision, leave to appeal, etc., but it is completely inapplicable to original suits and execution petitions."
      },
      {
        id: "mcq-21-3",
        question: "Under the Limitation Act, which of the following is recognized as a 'Legal Disability' under Section 6?",
        options: [
          { id: "a", text: "Severe physical illness or temporary hospitalization" },
          { id: "b", text: "Minority, Insanity, or Idiocy" },
          { id: "c", text: "Imprisonment or being detained in police custody" },
          { id: "d", text: "Being absent from Bangladesh on business" }
        ],
        correctOptionId: "b",
        explanation: "Section 6 recognizes only three specific legal disabilities: minority, insanity, and idiocy. Other situations like illness, incarceration, or absence from the country do not qualify."
      },
      {
        id: "mcq-21-4",
        question: "Once limitation has begun to run, under Section 9 of the Limitation Act:",
        options: [
          { id: "a", text: "It can be paused if the plaintiff becomes temporarily insane" },
          { id: "b", text: "No subsequent disability or inability to sue stops it" },
          { id: "c", text: "The court can suspend it for up to six months for administrative ease" },
          { id: "d", text: "It is automatically doubled if the defendant moves to another district" }
        ],
        correctOptionId: "b",
        explanation: "Section 9 states the absolute rule of continuous running of time: 'Where once time has begun to run, no subsequent disability or inability to sue stops it.'"
      },
      {
        id: "mcq-21-5",
        question: "According to Section 8 of the Limitation Act, what is the maximum extra time allowed to institute a suit after the cessation of a legal disability?",
        options: [
          { id: "a", text: "A maximum of one year" },
          { id: "b", text: "A maximum of three years" },
          { id: "c", text: "A maximum of five years" },
          { id: "d", text: "There is no maximum limit; it matches the original limitation period entirely" }
        ],
        correctOptionId: "b",
        explanation: "Section 8 acts as a cap on Section 6. It states that nothing in Section 6 or 7 shall extend the period within which any suit must be instituted for more than three years from the cessation of the disability."
      },
      {
        id: "mcq-21-6",
        question: "To claim the benefit of Section 14 (exclusion of time spent in wrong court), the plaintiff must prove they prosecuted the former suit in:",
        options: [
          { id: "a", text: "The Supreme Court of Bangladesh only" },
          { id: "b", text: "Good faith and with due diligence" },
          { id: "c", text: "The presence of a registered Notary Public" },
          { id: "d", text: "Under a signed written agreement with the defendant" }
        ],
        correctOptionId: "b",
        explanation: "Section 14 requires that the plaintiff must have been prosecuting the former civil proceeding with 'due diligence' and in 'good faith' in a court that could not entertain it due to defect of jurisdiction."
      },
      {
        id: "mcq-21-7",
        question: "Under Section 19 of the Limitation Act, a written acknowledgment of liability:",
        options: [
          { id: "a", text: "Can be signed at any time, even years after the limitation period has expired" },
          { id: "b", text: "Must be signed strictly before the expiration of the prescribed limitation period" },
          { id: "c", text: "Must be verified by a Magistrate of the First Class" },
          { id: "d", text: "Only applies to suits relating to immovable family property" }
        ],
        correctOptionId: "b",
        explanation: "For a written acknowledgment to reset the clock under Section 19, it must be made 'before the expiration of the period prescribed for a suit or application.'"
      },
      {
        id: "mcq-21-8",
        question: "In the landmark case Province of East Pakistan v. Abdul Hamid Darji (16 DLR (SC) 18), the court held that:",
        options: [
          { id: "a", text: "The government is completely exempt from the law of limitation" },
          { id: "b", text: "Under Section 5, the applicant must account for and explain 'every day's delay' with precise facts" },
          { id: "c", text: "Minors can sue at any time within thirty years of turning eighteen" },
          { id: "d", text: "A written acknowledgment does not need to be signed by the debtor" }
        ],
        correctOptionId: "b",
        explanation: "This case is the leading authority on the rule that under Section 5, a petitioner has the burden of explaining 'every day's delay'—mere routine administrative slow-movement is not sufficient cause."
      },
      {
        id: "mcq-21-9",
        question: "If a debtor makes a part-payment of interest on a debt before the expiry of the limitation period:",
        options: [
          { id: "a", text: "The entire debt is legally wiped out and cannot be recovered" },
          { id: "b", text: "A fresh period of limitation is computed from the time when the payment was made, provided it is recorded in writing" },
          { id: "c", text: "The limitation period is extended by exactly six months from the date of payment" },
          { id: "d", text: "The creditor must file a new suit within ten days of the payment" }
        ],
        correctOptionId: "b",
        explanation: "Under Section 20, a part-payment of debt or interest resets the limitation clock, creating a fresh period of limitation from the date of payment, provided there is a signed written record."
      },
      {
        id: "mcq-21-10",
        question: "Which legal maxim represents the philosophical foundation that 'the laws assist the vigilant, not those who sleep over their rights'?",
        options: [
          { id: "a", text: "Nemo moriturus praesumitur mentiri" },
          { id: "b", text: "Allegans contraria non est audiendus" },
          { id: "c", text: "Vigilantibus non dormientibus jura subveniunt" },
          { id: "d", text: "Interest reipublicae ut sit finis litium" }
        ],
        correctOptionId: "c",
        explanation: "Vigilantibus non dormientibus jura subveniunt directly translates to 'the laws assist the vigilant, not those who sleep over their rights,' which is the core maxim behind limitation statutes."
      }
    ]
  },
  {
    id: "chapter-22",
    title: "Chapter 22: Ethics & Bar Council Rules and Etiquette",
    subject: "Professional Ethics & Bar Council Order",
    isCompleted: true,
    quickSummary: "This chapter covers the professional ethics, codes of conduct, and disciplinary frameworks governing advocates in Bangladesh. It details the composition and functions of the Bangladesh Bar Council under the 1972 Order, the four chapters of the Canons of Professional Conduct and Etiquette (detailing duties to other advocates, clients, court, and the public), and the constitution and powers of Bar Council Disciplinary Tribunals to try professional misconduct.",
    studyStrategy: "Focus on the numbers and structures: (1) The Bar Council consists of 15 members (including the Attorney General as ex-officio Chairman) serving a 3-year term. (2) The 14 elected members are split equally (7 General Seats, 7 Group Seats). (3) The Canons of Professional Conduct have four chapters. Memorize key rules like the ban on advertising and soliciting, conflict of interest, and separate accounts for client funds. (4) The Disciplinary Tribunal consists of 3 members (2 Bar Council members, 1 advocate from the roll) and can reprimand, suspend, or remove advocates from the roll.",
    sections: [
      {
        sectionNo: "Articles 3-11",
        title: "Constitution and Functions of the Bangladesh Bar Council",
        statutoryText: "Article 3: There shall be constituted in accordance with the provisions of this Order a Bar Council to be called the Bangladesh Bar Council.\nArticle 5: The Bar Council shall consist of fifteen members, of whom—(a) the Attorney-General for Bangladesh shall ex-officio be one, and (b) fourteen shall be elected in the prescribed manner...\nArticle 6: The Attorney-General for Bangladesh shall be the Chairman ex-officio of the Bar Council...\nArticle 11: The term of office of the elected members of the Bar Council shall be three years...",
        simplifiedExplanation: "The Bangladesh Bar Council is a statutory autonomous body created under President's Order No. 46 of 1972. It is governed by a body of 15 members:\n1. Chairman: The Attorney-General for Bangladesh serves as the ex-officio Chairman.\n2. Vice-Chairman: Elected by the Bar Council members from among themselves.\n3. Elected Members: 14 advocates are elected for a 3-year term. They are divided into 7 General Seats (elected on a nationwide general ballot) and 7 Group Seats (elected from local bar association groups).\n4. Committees: The Bar Council forms essential committees such as the Executive Committee, Enrollment Committee (headed by an Appellate/High Court Judge nominated by the Chief Justice), Finance Committee, and Legal Education Committee to manage its vast regulatory duties.",
        elements: [
          "Statutory Entity: Established under President's Order No. 46 of 1972 as an autonomous regulatory body.",
          "Composition: 15 members total—the Attorney-General (ex-officio Chairman) and 14 elected advocates.",
          "Electoral Divide: 14 elected seats are split into 7 General (countrywide) and 7 Group (regional) seats.",
          "Three-Year Term: Elected members hold their seats for a fixed statutory term of three years."
        ]
      },
      {
        sectionNo: "Chapters I-IV",
        title: "Canons of Professional Conduct and Etiquette",
        statutoryText: "Chapter I: Conduct with regard to other Advocates...\nChapter II: Conduct with regard to Clients...\nChapter III: Duty to the Court...\nChapter IV: Conduct with regard to the Public generally...",
        simplifiedExplanation: "The Canons of Professional Conduct and Etiquette govern the professional behavior of advocates across four distinct dimensions:\n1. Conduct with regard to other Advocates (Chapter I): Advocates are officers of the court, not commercial traders. They must not advertise or solicit work directly or indirectly. Encroaching on another's business or offering lower fees to capture a client is prohibited. Professional courtesy must be shown to colleagues.\n2. Conduct with regard to Clients (Chapter II): An advocate owes a high fiduciary duty to their client. They must disclose all conflicting personal interests in the dispute, keep client funds in a separate client bank account, never purchase an interest in the litigation, and maintain absolute, lifelong attorney-client privilege.\n3. Duty to the Court (Chapter III): Advocates must maintain respect, dignity, and high decorum. They must act with absolute candor, never mislead the court with false precedents or facts, and be punctual. Personal familiarity with judges must be avoided.\n4. Conduct with regard to the Public generally (Chapter IV): Advocates must not accept cases intended solely to harass, abuse, or delay justice. They must champion legal aid, support public causes, and never instigate or encourage speculative litigation.",
        elements: [
          "Colleague Integrity (Ch I): Bans all professional advertising, soliciting, and unethical business poaching.",
          "Client Fiduciary Trust (Ch II): Requires separate trust accounts, bars purchasing litigation interests, and mandates complete confidentiality.",
          "Court Candor & Decorum (Ch III): Demands punctuality, absolute honesty (candor), and prohibits misleading the judge or using improper influence.",
          "Public Responsibility (Ch IV): Encourages legal aid representation, bars frivolous or harassing lawsuits, and promotes public interest."
        ]
      },
      {
        sectionNo: "Articles 34, 37, 38 & 40",
        title: "Bar Council Tribunals and Disciplinary Framework",
        statutoryText: "Article 34: No person shall be entitled to practise the profession of law unless he is an advocate on the roll...\nArticle 37: The Bar Council may constitute one or more Tribunals, each consisting of three persons of whom two shall be elected members of the Bar Council and one shall be an advocate on the roll nominated by the Bar Council...\nArticle 38: The Tribunal may, after giving the advocate an opportunity of being heard... make an order—(a) reprimanding the advocate, (b) suspending the advocate from practice, or (c) removing the advocate from the roll...\nArticle 40: A Tribunal shall have the same powers as are vested in a Civil Court under the Code of Civil Procedure, 1908...",
        simplifiedExplanation: "The Bar Council maintains absolute disciplinary control over all enrolled advocates in Bangladesh through a specialized tribunal system:\n1. Right to Practice (Article 34): Practice is a statutory privilege restricted solely to enrolled advocates.\n2. Disciplinary Tribunal (Article 37): To hear allegations of professional misconduct, the Bar Council constitutes a 3-member Tribunal. It consists of 2 elected Bar Council members and 1 advocate from the roll. The senior-most member is the Chairman.\n3. Statutory Sanctions (Article 38): After a fair hearing, if guilty of misconduct, the Tribunal can order: (a) Reprimand, (b) Suspension of practice for a specified period, or (c) Permanent removal from the Roll of Advocates.\n4. CPC Powers (Article 40): The Tribunal acts with the powers of a Civil Court—it can summon witnesses, administer oaths, require document discovery, and issue commissions. Decisions can be appealed directly to the High Court Division.",
        elements: [
          "Tribunal Structure: 3 members (2 Bar Council members and 1 enrolled advocate nominated by the Council).",
          "Tribunal Chairman: Presided over by the senior-most member among the three.",
          "Misconduct Sanctions: Authorized to issue reprimands, suspensions, or permanent disbarment (removal from roll).",
          "Civil Enforcement Powers: Vested with CPC powers for summoning witnesses and compelling document production."
        ]
      }
    ],
    caseLaws: [
      {
        title: "Advocate Md. Abdul Hamid v. Bangladesh Bar Council",
        citation: "49 DLR (AD) 84",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "An advocate accepted a litigation fee and original documents from a client but subsequently neglected the case, failed to file the suit, refused to return the original documents, and misappropriated the client's money. The client filed a complaint. The Bar Council Disciplinary Tribunal found the advocate guilty of gross professional misconduct and suspended him from practice for a term of five years.",
        held: "The Appellate Division dismissed the advocate's appeal and upheld the 5-year suspension. The Court ruled that the relationship between an advocate and a client is strictly fiduciary and built on absolute trust. Acting dishonestly, misappropriating client funds, or intentionally withholding files constitutes grave professional misconduct that degrades the moral status of the legal profession.",
        significance: "Establishes that financial dishonesty and breach of fiduciary trust toward a client are treated as severe professional misconduct resulting in suspension or disbarment."
      },
      {
        title: "Bangladesh Bar Council v. Md. Abdul Jalil",
        citation: "54 DLR (AD) 162",
        court: "Supreme Court of Bangladesh (Appellate Division)",
        facts: "Disciplinary proceedings were initiated by the Bar Council against an advocate for professional misconduct. The advocate directly filed a writ petition in the High Court Division, seeking an interlocutory order to stay the Tribunal's proceedings on grounds of procedural bias in the initial committee inquiry.",
        held: "The Appellate Division held that the Bangladesh Bar Council Order, 1972 is a self-contained, special statutory code. The Bar Council Disciplinary Tribunal possesses exclusive original jurisdiction to hear and decide complaints of professional misconduct against advocates. The High Court Division should not interfere under Article 102 of the Constitution at an interlocutory stage unless there is a patent lack of jurisdiction or a flagrant, irremediable violation of natural justice.",
        significance: "Affirms the autonomous, exclusive, and self-contained nature of the Bar Council's disciplinary system and protects it from premature constitutional interference."
      }
    ],
    maxims: [
      {
        maxim: "Nemo debet esse judex in propria causa",
        translation: "No one should be a judge in their own cause.",
        application: "Directly governs Bar Council Tribunal proceedings. No member of the Bar Council or Tribunal can sit on a disciplinary panel if they have any personal interest, conflict of interest, or professional relationship with either the complainant or the accused advocate."
      },
      {
        maxim: "Salus populi est suprema lex",
        translation: "The welfare of the people is the supreme law.",
        application: "Forms the philosophical foundation of the Canons of Professional Conduct. An advocate's commercial or private interests must always yield to the broader public interest, legal aid duties, and the administration of justice."
      }
    ],
    mcqs: [
      {
        id: "mcq-22-1",
        question: "Under Article 5 of the Bangladesh Bar Council Order, 1972, how many members constitute the Bar Council?",
        options: [
          { id: "a", text: "11 members" },
          { id: "b", text: "15 members" },
          { id: "c", text: "21 members" },
          { id: "d", text: "25 members" }
        ],
        correctOptionId: "b",
        explanation: "Article 5 of the Order specifies that the Bar Council shall consist of exactly fifteen members: one ex-officio Chairman (the Attorney-General) and fourteen elected advocates."
      },
      {
        id: "mcq-22-2",
        question: "Who serves as the ex-officio Chairman of the Bangladesh Bar Council under Article 6?",
        options: [
          { id: "a", text: "The Chief Justice of Bangladesh" },
          { id: "b", text: "The Minister of Law, Justice and Parliamentary Affairs" },
          { id: "c", text: "The Attorney-General for Bangladesh" },
          { id: "d", text: "The senior-most advocate of the Supreme Court" }
        ],
        correctOptionId: "c",
        explanation: "Article 6 of the Bar Council Order explicitly declares that the Attorney-General for Bangladesh shall be the Chairman ex-officio of the Bar Council."
      },
      {
        id: "mcq-22-3",
        question: "What is the statutory term of office for the elected members of the Bangladesh Bar Council under Article 11?",
        options: [
          { id: "a", text: "Two years" },
          { id: "b", text: "Three years" },
          { id: "c", text: "Five years" },
          { id: "d", text: "One year" }
        ],
        correctOptionId: "b",
        explanation: "Article 11 states that the term of office of the elected members of the Bar Council shall be three years."
      },
      {
        id: "mcq-22-4",
        question: "Under the Bar Council Order, the fourteen elected advocates of the Bar Council are composed of:",
        options: [
          { id: "a", text: "10 general members and 4 nominated members" },
          { id: "b", text: "7 members elected on a nationwide general ballot and 7 members elected from local bar association groups" },
          { id: "c", text: "14 members all nominated by the Chief Justice" },
          { id: "d", text: "14 members elected strictly by Supreme Court Bar Association members" }
        ],
        correctOptionId: "b",
        explanation: "Under Article 5, the fourteen elected advocates are split equally: seven are elected by advocates on a general ballot (General Seats) and seven are elected from advocates representing designated local bar association groups (Group Seats)."
      },
      {
        id: "mcq-22-5",
        question: "Under Article 37 of the Bar Council Order, 1972, a Bar Council Disciplinary Tribunal is comprised of:",
        options: [
          { id: "a", text: "Three members, of whom two are elected Bar Council members and one is an advocate on the roll" },
          { id: "b", text: "Five members, including a High Court Judge and four advocates" },
          { id: "c", text: "A single judicial magistrate appointed by the government" },
          { id: "d", text: "Two members elected by the Parliament" }
        ],
        correctOptionId: "a",
        explanation: "Article 37 of the Order states that a Tribunal shall consist of three persons, of whom two shall be elected members of the Bar Council and one shall be an advocate on the roll nominated by the Bar Council."
      },
      {
        id: "mcq-22-6",
        question: "Which of the following disciplinary punishments is NOT authorized under Article 38 for professional misconduct?",
        options: [
          { id: "a", text: "Reprimand" },
          { id: "b", text: "Suspension of practice for a specified period" },
          { id: "c", text: "Rigorous imprisonment for up to six months" },
          { id: "d", text: "Removal of the advocate's name from the Roll of Advocates" }
        ],
        correctOptionId: "c",
        explanation: "Article 38 authorizes the Tribunal to reprimand an advocate, suspend them from practice, or remove them from the roll. Imprisonment is a criminal sentence, which can only be passed by a criminal court, not a disciplinary tribunal."
      },
      {
        id: "mcq-22-7",
        question: "Under Chapter II of the Canons of Professional Conduct and Etiquette, is an advocate permitted to acquire an interest in a client's litigation?",
        options: [
          { id: "a", text: "Yes, with the prior written consent of the presiding judge" },
          { id: "b", text: "Yes, if the client is extremely poor and unable to pay standard fees" },
          { id: "c", text: "No, an advocate is strictly prohibited from purchasing or acquiring an interest in the client's litigation" },
          { id: "d", text: "Yes, up to a maximum of 50% of the disputed property value" }
        ],
        correctOptionId: "c",
        explanation: "Chapter II, Rule 9 of the Canons strictly prohibits an advocate from purchasing or acquiring any interest in the subject-matter of the client's litigation, maintaining absolute fiduciary detachment."
      },
      {
        id: "mcq-22-8",
        question: "Under Chapter I of the Canons of Professional Conduct and Etiquette, which of the following practices is strictly forbidden?",
        options: [
          { id: "a", text: "Publishing academic treatises on complex legal doctrines" },
          { id: "b", text: "Soliciting professional work or advertising legal services, directly or indirectly" },
          { id: "c", text: "Charging professional fees lower than standard market rates" },
          { id: "d", text: "Serving as a volunteer in a non-profit human rights organization" }
        ],
        correctOptionId: "b",
        explanation: "Chapter I, Rule 1 strictly forbids advocates from soliciting professional employment or advertising their services, directly or indirectly, to protect the non-commercial dignity of the bar."
      },
      {
        id: "mcq-22-9",
        question: "In the landmark case Bangladesh Bar Council v. Md. Abdul Jalil (54 DLR (AD) 162), the Appellate Division held that:",
        options: [
          { id: "a", text: "The High Court Division has concurrent power to suspend advocates without a Tribunal hearing" },
          { id: "b", text: "The Bar Council Order is a self-contained special law, and the Tribunal has exclusive original jurisdiction over misconduct" },
          { id: "c", text: "Any citizen can practice the profession of law without enrollment" },
          { id: "d", text: "Disciplinary orders must be approved by the President of Bangladesh" }
        ],
        correctOptionId: "b",
        explanation: "The court established that the Bangladesh Bar Council Order, 1972 is a self-contained, special statutory law and its Disciplinary Tribunals possess exclusive original jurisdiction to hear and decide professional misconduct complaints."
      },
      {
        id: "mcq-22-10",
        question: "Under Chapter III of the Canons of Professional Conduct and Etiquette, which of the following defines an advocate's duty to the Court?",
        options: [
          { id: "a", text: "Winning the client's case at all costs, even if it requires fabricating evidence" },
          { id: "b", text: "Maintaining a respectful, dignified attitude while acting with absolute candor and never misleading the court" },
          { id: "c", text: "Cultivating private familiarity with presiding judges to benefit the client" },
          { id: "d", text: "Instigating a public boycott of court sessions whenever an adverse decision is rendered" }
        ],
        correctOptionId: "b",
        explanation: "Chapter III of the Canons dictates that an advocate must maintain respect and high decorum towards the court, acting with absolute candor and fairness, and avoiding any personal or improper familiarity with judges."
      }
    ]
  }
];
