// Mock MDS AI Answer Data
// This will be replaced with actual API calls later
//
// MDS Item Code Structure:
// - Section code + 4 digits + optional letter suffix
// - Examples: B0100, C0200, O0110A, GG0130A
// - Columns represent lookback periods: A=On Admission, B=While Resident, C=At Discharge
// - PCC wrapper IDs: {mdsItem}{column}_wrapper (e.g., O0110AB_wrapper = item O0110A, column B)

const MOCK_MDS_DATA = {
  patientId: "patient-123",
  assessmentId: "assessment-456",
  assessmentType: "5-day",
  solvedAt: "2025-08-31T12:00:00.000Z",
  items: [
    // ============================================
    // SECTION B - Hearing, Speech, and Vision
    // ============================================
    {
      mdsItem: "B0100",
      description: "Comatose",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient is alert and responsive. No evidence of persistent vegetative state or comatose condition.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-neuro-001",
              quote: "Patient alert and oriented x3, follows commands appropriately"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B0200",
      description: "Hearing",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient has minimal difficulty hearing. Requires slightly raised voice for communication.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-hearing-001",
              quote: "Patient responds to normal speech volume, occasional need to repeat questions"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B0300",
      description: "Hearing Aid",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No hearing aid or hearing appliance used during assessment.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "B0600",
      description: "Speech Clarity",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient has clear speech pattern. Words are distinct and understandable.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-speech-001",
              quote: "Speech clear and coherent, no slurring or difficulty noted"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B0700",
      description: "Makes Self Understood",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient expresses ideas and wants clearly. Understood without difficulty.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-comm-001",
              quote: "Communicates needs effectively, no difficulty understanding patient"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B0800",
      description: "Ability To Understand Others",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient understands verbal content without difficulty.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-comp-001",
              quote: "Follows verbal instructions appropriately, comprehends questions"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B1000",
      description: "Vision",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient has mildly impaired vision, wears corrective lenses.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-vision-001",
              quote: "Uses reading glasses, able to see large print and faces clearly"
            }
          ]
        }
      }
    },
    {
      mdsItem: "B1200",
      description: "Corrective Lenses",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient uses corrective lenses (glasses) for vision.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-glasses-001",
              quote: "Wears prescription glasses for reading and distance"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION C - Cognitive Patterns
    // ============================================
    {
      mdsItem: "C0100",
      description: "Should Brief Interview for Mental Status be Conducted?",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient is able to participate in BIMS interview. Alert and communicative.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0200",
      description: "Repetition of Three Words",
      columns: {
        A: {
          answer: "3",
          confidence: "high",
          rationale: "Patient correctly repeated all three words (sock, blue, bed) after first attempt.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-rep-001",
              quote: "BIMS C0200: Repeated sock, blue, bed correctly on first attempt - 3/3"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0300A",
      description: "Temporal Orientation - Able to report correct year",
      columns: {
        A: {
          answer: "3",
          confidence: "high",
          rationale: "Patient correctly stated the current year.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-year-001",
              quote: "Asked current year, patient responded '2025' - correct"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0300B",
      description: "Temporal Orientation - Able to report correct month",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient correctly identified the current month.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-month-001",
              quote: "Asked current month, patient responded correctly"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0300C",
      description: "Temporal Orientation - Able to report correct day of week",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient correctly identified the day of the week.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-day-001",
              quote: "Asked day of week, patient responded correctly"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0400A",
      description: "Recall - Able to recall 'sock'",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient recalled 'sock' without cueing.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-recall-001",
              quote: "Recall: 'sock' - recalled without cue"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0400B",
      description: "Recall - Able to recall 'blue'",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient recalled 'blue' without cueing.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-recall-002",
              quote: "Recall: 'blue' - recalled without cue"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0400C",
      description: "Recall - Able to recall 'bed'",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient recalled 'bed' without cueing.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-recall-003",
              quote: "Recall: 'bed' - recalled without cue"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0500",
      description: "BIMS Summary Score",
      columns: {
        A: {
          answer: "15",
          confidence: "high",
          rationale: "BIMS score of 15 indicates cognitively intact status. Patient scored perfectly on all components.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bims-001",
              quote: "BIMS administered: Repetition 3/3, Year 3, Month 2, Day 1, Recall 6/6. Total: 15"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C0600",
      description: "Should the Staff Assessment for Mental Status be Conducted?",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Staff assessment not needed - BIMS was successfully completed with score of 15.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0700",
      description: "Short-term Memory OK",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Short-term memory appears intact based on BIMS performance.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0800",
      description: "Long-term Memory OK",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Long-term memory appears intact. Patient recalls personal history appropriately.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0900A",
      description: "Memory/Recall Ability - Current season",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Patient correctly identified current season.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0900B",
      description: "Memory/Recall Ability - Location of own room",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Patient knows location of own room.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0900C",
      description: "Memory/Recall Ability - Staff names and faces",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Patient recognizes staff members.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C0900D",
      description: "Memory/Recall Ability - That in nursing home",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Patient aware they are in a nursing facility.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C1000",
      description: "Cognitive Skills for Daily Decision Making",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient demonstrates independent decision-making ability for daily tasks.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-cog-001",
              quote: "Patient makes own decisions regarding care, meals, and activities independently"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C1310A",
      description: "Signs and Symptoms of Delirium - Acute Onset Mental Status Change",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No evidence of acute change in mental status from baseline.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-delirium-001",
              quote: "Mental status stable, consistent with baseline"
            }
          ]
        }
      }
    },
    {
      mdsItem: "C1310B",
      description: "Signs and Symptoms of Delirium - Inattention",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No difficulty focusing attention observed.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C1310C",
      description: "Signs and Symptoms of Delirium - Disorganized Thinking",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Thinking is organized and coherent.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "C1310D",
      description: "Signs and Symptoms of Delirium - Altered Level of Consciousness",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Level of consciousness normal - alert and responsive.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION D - Mood
    // ============================================
    {
      mdsItem: "D0100",
      description: "Should Resident Mood Interview be Conducted?",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient is able to participate in PHQ-9 mood interview.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "D0200A",
      description: "Little interest or pleasure in doing things",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient reports no loss of interest in activities.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-mood-001",
              quote: "PHQ-9: Denies anhedonia, enjoys watching TV and visits from family"
            }
          ]
        }
      }
    },
    {
      mdsItem: "D0200B",
      description: "Feeling down, depressed, or hopeless",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient denies feeling depressed or hopeless.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-mood-002",
              quote: "PHQ-9: Denies depressed mood, reports feeling 'okay'"
            }
          ]
        }
      }
    },
    {
      mdsItem: "D0200C",
      description: "Trouble falling or staying asleep, or sleeping too much",
      columns: {
        A: {
          answer: "1",
          confidence: "medium",
          rationale: "Patient reports occasional difficulty sleeping.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-sleep-001",
              quote: "Patient reports waking 1-2 times at night, some difficulty returning to sleep"
            }
          ]
        }
      }
    },
    {
      mdsItem: "D0200D",
      description: "Feeling tired or having little energy",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient reports mild fatigue.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-energy-001",
              quote: "Patient notes some fatigue, attributes to medical condition"
            }
          ]
        }
      }
    },
    {
      mdsItem: "D0200E",
      description: "Poor appetite or overeating",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Appetite is normal.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "D0200F",
      description: "Feeling bad about yourself",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No negative self-perception reported.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "D0200G",
      description: "Trouble concentrating",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No difficulty with concentration.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "D0200H",
      description: "Moving or speaking slowly, or being fidgety/restless",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No psychomotor changes observed.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "D0200I",
      description: "Thoughts of self-harm",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient denies any thoughts of self-harm or suicide.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-safety-001",
              quote: "PHQ-9 Item 9: Denies suicidal ideation"
            }
          ]
        }
      }
    },
    {
      mdsItem: "D0300",
      description: "PHQ-9 Total Severity Score",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "PHQ-9 score of 2 indicates minimal depression symptoms.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-phq-001",
              quote: "PHQ-9 Total: 2 (sleep 1, energy 1) - minimal symptoms"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION E - Behavior
    // ============================================
    {
      mdsItem: "E0100A",
      description: "Hallucinations",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No hallucinations observed or reported.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0100B",
      description: "Delusions",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No delusions observed or reported.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0200A",
      description: "Physical behavioral symptoms - Wandering",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No wandering behavior observed.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0200B",
      description: "Physical behavioral symptoms - Verbal behavior",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No verbal behavioral symptoms.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0200C",
      description: "Physical behavioral symptoms - Physical behavior directed toward others",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No physical aggression toward others.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0300",
      description: "Overall Presence of Behavioral Symptoms",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No behavioral symptoms present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0500A",
      description: "Rejection of Care - Presence",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient accepts care without resistance.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-care-001",
              quote: "Patient cooperative with all care activities"
            }
          ]
        }
      }
    },
    {
      mdsItem: "E0600",
      description: "Impact on Resident",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No behavioral impact on resident's function.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0700",
      description: "Impact on Others",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No behavioral impact on others.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "E0800",
      description: "Rejection of Evaluation",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient did not reject evaluation.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION G - Functional Status
    // ============================================
    {
      mdsItem: "G0110A",
      description: "ADL Self-Performance - Bed Mobility",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient requires limited assistance with bed mobility.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-adl-001",
              quote: "Requires 1 person assist for repositioning in bed"
            }
          ]
        }
      }
    },
    {
      mdsItem: "G0110B",
      description: "ADL Self-Performance - Transfer",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient requires limited assistance with transfers.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-adl-002",
              quote: "Requires standby assist for bed-to-chair transfers"
            }
          ]
        }
      }
    },
    {
      mdsItem: "G0110C",
      description: "ADL Self-Performance - Walk in Room",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient walks with limited assistance.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-gait-001",
              quote: "Ambulates with rolling walker, contact guard assist"
            }
          ]
        }
      }
    },
    {
      mdsItem: "G0110D",
      description: "ADL Self-Performance - Walk in Corridor",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient walks in corridor with limited assistance.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0110E",
      description: "ADL Self-Performance - Locomotion on Unit",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient requires supervision for locomotion.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0110F",
      description: "ADL Self-Performance - Locomotion off Unit",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Requires limited assistance for locomotion off unit.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0110G",
      description: "ADL Self-Performance - Dressing",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient requires limited assistance with dressing.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-dress-001",
              quote: "Can dress upper body, needs assist with lower extremities"
            }
          ]
        }
      }
    },
    {
      mdsItem: "G0110H",
      description: "ADL Self-Performance - Eating",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient is independent with eating.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0110I",
      description: "ADL Self-Performance - Toilet Use",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Requires limited assistance with toileting.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0110J",
      description: "ADL Self-Performance - Personal Hygiene",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Requires supervision with personal hygiene.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "G0120A",
      description: "Bathing Self-Performance",
      columns: {
        A: {
          answer: "3",
          confidence: "high",
          rationale: "Requires extensive assistance with bathing.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-bath-001",
              quote: "Requires 2-person assist for shower, can wash face and hands"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION GG - Functional Abilities and Goals
    // ============================================
    {
      mdsItem: "GG0130A",
      description: "Self-Care - Eating",
      columns: {
        A: {
          answer: "06",
          confidence: "high",
          rationale: "Patient is independent with eating.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-func-001",
              quote: "OT assessment: Independent with self-feeding, no adaptive equipment needed"
            }
          ]
        }
      }
    },
    {
      mdsItem: "GG0130B",
      description: "Self-Care - Oral Hygiene",
      columns: {
        A: {
          answer: "05",
          confidence: "high",
          rationale: "Patient requires setup/cleanup assistance for oral hygiene.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-func-002",
              quote: "Patient can brush teeth once supplies set up, needs cleanup assistance"
            }
          ]
        }
      }
    },
    {
      mdsItem: "GG0130C",
      description: "Self-Care - Toileting Hygiene",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Requires minimal assistance with toileting hygiene.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0130E",
      description: "Self-Care - Shower/Bathe Self",
      columns: {
        A: {
          answer: "02",
          confidence: "high",
          rationale: "Requires substantial assistance with bathing.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0130F",
      description: "Self-Care - Upper Body Dressing",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Requires minimal assistance with upper body dressing.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0130G",
      description: "Self-Care - Lower Body Dressing",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance with lower body dressing.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0130H",
      description: "Self-Care - Putting on/Taking off Footwear",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance with footwear.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170A",
      description: "Mobility - Roll left and right",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Patient requires minimal assistance with bed mobility.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-mob-001",
              quote: "PT assessment: Requires min A for rolling due to weakness"
            }
          ]
        }
      }
    },
    {
      mdsItem: "GG0170B",
      description: "Mobility - Sit to lying",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Requires minimal assistance to transition from sitting to lying.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170C",
      description: "Mobility - Lying to sitting on side of bed",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Requires minimal assistance to sit up on edge of bed.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170D",
      description: "Mobility - Sit to stand",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance to stand from sitting.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170E",
      description: "Mobility - Chair/bed-to-chair transfer",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance for transfers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170F",
      description: "Mobility - Toilet transfer",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance for toilet transfers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170I",
      description: "Mobility - Walk 10 feet",
      columns: {
        A: {
          answer: "04",
          confidence: "high",
          rationale: "Walks 10 feet with minimal assistance.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170J",
      description: "Mobility - Walk 50 feet with two turns",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Walks 50 feet with moderate assistance.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170K",
      description: "Mobility - Walk 150 feet",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Walks 150 feet with moderate assistance.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170M",
      description: "Mobility - 1 step (curb)",
      columns: {
        A: {
          answer: "02",
          confidence: "high",
          rationale: "Requires substantial assistance for curb/step.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170N",
      description: "Mobility - 4 steps",
      columns: {
        A: {
          answer: "02",
          confidence: "high",
          rationale: "Requires substantial assistance for 4 steps.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170O",
      description: "Mobility - 12 steps",
      columns: {
        A: {
          answer: "01",
          confidence: "high",
          rationale: "Requires dependent assistance or not attempted for 12 steps.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170P",
      description: "Mobility - Picking up object",
      columns: {
        A: {
          answer: "03",
          confidence: "high",
          rationale: "Requires moderate assistance to pick up object from floor.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170R",
      description: "Mobility - Wheel 50 feet with two turns",
      columns: {
        A: {
          answer: "06",
          confidence: "high",
          rationale: "Patient does not use wheelchair - ambulates.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "GG0170S",
      description: "Mobility - Wheel 150 feet",
      columns: {
        A: {
          answer: "06",
          confidence: "high",
          rationale: "Patient does not use wheelchair - ambulates.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION H - Bladder and Bowel
    // ============================================
    {
      mdsItem: "H0100",
      description: "Urinary Toileting Program",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No scheduled toileting program in place. Patient manages bladder independently.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "H0200A",
      description: "Urinary Continence - Indwelling catheter",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No indwelling urinary catheter present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "H0200B",
      description: "Urinary Continence - External catheter",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No external catheter in use.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "H0200C",
      description: "Urinary Continence - Ostomy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No urinary ostomy present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "H0300",
      description: "Urinary Continence",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient is always continent of urine.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-bladder-001",
              quote: "No incontinence episodes. Patient toilets independently."
            }
          ]
        }
      }
    },
    {
      mdsItem: "H0400",
      description: "Bowel Continence",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Patient is always continent of bowel.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-bowel-001",
              quote: "Regular bowel movements, no incontinence episodes."
            }
          ]
        }
      }
    },
    {
      mdsItem: "H0500",
      description: "Bowel Toileting Program",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No bowel toileting program required.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "H0600",
      description: "Bowel Patterns",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Normal bowel patterns.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION I - Active Diagnoses
    // ============================================
    {
      mdsItem: "I0020",
      description: "Primary Medical Condition Category",
      columns: {
        A: {
          answer: "06",
          confidence: "high",
          rationale: "Progressive Neurological Condition (Multiple Sclerosis).",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-dx-primary-001",
              quote: "Primary admission diagnosis: Multiple Sclerosis"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I0100",
      description: "Cancer (with or without metastasis)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No cancer diagnosis documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I0200",
      description: "Anemia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No anemia diagnosis. Recent labs show normal hemoglobin.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I0400",
      description: "Coronary artery disease (CAD)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No CAD diagnosis documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I0600",
      description: "Heart failure",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No heart failure diagnosis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I0700",
      description: "Hypertension",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Hypertension documented as active diagnosis with current medication management.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-htn-001",
              quote: "Lisinopril 10mg PO daily for hypertension"
            },
            {
              sourceType: "progress-note",
              sourceId: "note-dx-001",
              quote: "Active diagnoses: Essential hypertension, well controlled"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I0800",
      description: "Orthostatic hypotension",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No orthostatic hypotension documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I0900",
      description: "Peripheral vascular disease (PVD) or PAD",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No PVD/PAD diagnosis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I1300",
      description: "Ulcerative Colitis, Crohn's, Inflammatory Bowel Disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No IBD diagnosis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I1500",
      description: "Renal insufficiency, renal failure, ESRD",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No renal disease documented. Kidney function normal.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I1550",
      description: "Neurogenic bladder",
      columns: {
        A: {
          answer: "yes",
          confidence: "medium",
          rationale: "Neurogenic bladder documented secondary to MS.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-bladder-dx-001",
              quote: "Neurogenic bladder secondary to multiple sclerosis"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I1650",
      description: "Obstructive uropathy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No obstructive uropathy.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I1700",
      description: "Multidrug-Resistant Organism (MDRO)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No MDRO infection documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2000",
      description: "Pneumonia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No pneumonia.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2100",
      description: "Septicemia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No septicemia.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2200",
      description: "Tuberculosis",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No tuberculosis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2300",
      description: "Urinary tract infection (UTI) (LAST 30 DAYS)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No UTI in last 30 days.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2400",
      description: "Viral hepatitis",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No viral hepatitis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2500",
      description: "Wound infection (other than foot)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No wound infections.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I2900",
      description: "Diabetes mellitus (DM)",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Type 2 diabetes mellitus documented with active insulin orders.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-dm-001",
              quote: "HumaLOG sliding scale insulin per protocol for diabetes management"
            },
            {
              sourceType: "lab-result",
              sourceId: "lab-a1c-001",
              quote: "HbA1c: 7.8% (08/01/2025)"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I3100",
      description: "Hyponatremia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No hyponatremia. Sodium levels normal.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I3200",
      description: "Hyperkalemia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No hyperkalemia. Potassium levels normal.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I3300",
      description: "Hyperlipidemia",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Hyperlipidemia on medication management.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-lipid-001",
              quote: "Atorvastatin 20mg PO daily for hyperlipidemia"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I3900",
      description: "Hip fracture",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No hip fracture.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4000",
      description: "Other fracture",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No other fractures.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4200",
      description: "Alzheimer's disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No Alzheimer's disease.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4300",
      description: "Aphasia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No aphasia. Speech and language intact.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4400",
      description: "Cerebral palsy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No cerebral palsy.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4500",
      description: "Cerebrovascular accident (CVA), TIA, or stroke",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No stroke history.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4800",
      description: "Non-Alzheimer's Dementia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No dementia diagnosed.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I4900",
      description: "Hemiplegia or hemiparesis",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No hemiplegia or hemiparesis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5000",
      description: "Paraplegia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No paraplegia.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5100",
      description: "Quadriplegia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No quadriplegia.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5200",
      description: "Multiple sclerosis",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Multiple sclerosis documented as primary diagnosis.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-ms-001",
              quote: "Primary Diagnosis: G35 Multiple Sclerosis, Unspecified"
            }
          ]
        }
      }
    },
    {
      mdsItem: "I5250",
      description: "Huntington's disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No Huntington's disease.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5300",
      description: "Parkinson's disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No Parkinson's disease.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5350",
      description: "Tourette's syndrome",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No Tourette's syndrome.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5400",
      description: "Seizure disorder or epilepsy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No seizure disorder.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5500",
      description: "Traumatic brain injury (TBI)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No TBI.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5600",
      description: "Malnutrition or risk of malnutrition",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No malnutrition. Nutritional status adequate.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5700",
      description: "Anxiety disorder",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No anxiety disorder documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5800",
      description: "Depression (other than bipolar)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No depression diagnosis. PHQ-9 score minimal.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5900",
      description: "Bipolar Disorder",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No bipolar disorder.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I5950",
      description: "Psychotic disorder (other than schizophrenia)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No psychotic disorder.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I6000",
      description: "Schizophrenia",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No schizophrenia.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I6100",
      description: "Post Traumatic Stress Disorder (PTSD)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No PTSD.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I6200",
      description: "Asthma (COPD) or chronic lung disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No pulmonary disease.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I6300",
      description: "Respiratory failure",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No respiratory failure.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "I7900",
      description: "None of above active diagnoses",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "Patient has active diagnoses documented above.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION J - Health Conditions
    // ============================================
    {
      mdsItem: "J0100",
      description: "Pain Management - Is pain assessment interview to be conducted?",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient able to participate in pain assessment interview.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0200",
      description: "Pain Presence - Frequency",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient reports pain frequently but not almost constantly.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0300",
      description: "Pain Presence - Intensity",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient reports mild pain.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-pain-001",
              quote: "Patient reports lower back pain 4/10, worse with movement"
            }
          ]
        }
      }
    },
    {
      mdsItem: "J0400",
      description: "Pain Effect on Function",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Pain limits but does not prevent function.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0500A",
      description: "Pain - Frequency of Pain Interference with Sleep",
      columns: {
        A: {
          answer: "1",
          confidence: "medium",
          rationale: "Pain occasionally interferes with sleep.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0500B",
      description: "Pain - Frequency Pain Limited Day Activities",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Pain occasionally limits activities.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0600",
      description: "Pain Management - Non-Medication Interventions",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Non-pharmacological pain interventions used.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-pain-int-001",
              quote: "Position changes and heating pad used for pain management"
            }
          ]
        }
      }
    },
    {
      mdsItem: "J0700",
      description: "Should Pain Management Interview be Conducted?",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Pain interview already completed with patient.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J0850",
      description: "Indicator of Pain or Possible Pain",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Non-verbal pain indicators observed occasionally.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1100A",
      description: "Shortness of Breath with Exertion",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No shortness of breath with exertion.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1100B",
      description: "Shortness of Breath at Rest",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No shortness of breath at rest.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1100C",
      description: "Shortness of Breath when Lying Flat",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No orthopnea.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1400",
      description: "Prognosis - Life expectancy less than 6 months",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No indication of terminal prognosis.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1550A",
      description: "Problem Conditions - Fever",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No fever documented.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1550B",
      description: "Problem Conditions - Vomiting",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No vomiting.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1550C",
      description: "Problem Conditions - Dehydration",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No dehydration. Hydration status adequate.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1550D",
      description: "Problem Conditions - Internal Bleeding",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No internal bleeding.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1700A",
      description: "Fall History on Admission",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls in 30 days prior to admission.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1700B",
      description: "Fall History Since Admission",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls since admission.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-falls-001",
              quote: "No falls during this stay. Fall precautions in place."
            }
          ]
        }
      }
    },
    {
      mdsItem: "J1700C",
      description: "Fall History - Any Fracture",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No fall-related fractures.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1800",
      description: "Any Falls Since Admission or Prior Assessment",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls since admission.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1900A",
      description: "Number of Falls with No Injury",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1900B",
      description: "Number of Falls with Injury",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls with injury.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "J1900C",
      description: "Number of Falls with Major Injury",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No falls with major injury.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION K - Swallowing/Nutritional Status
    // ============================================
    {
      mdsItem: "K0100",
      description: "Swallowing Disorder",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No swallowing disorder documented. Patient tolerates regular diet.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-diet-001",
              quote: "Regular diet, no texture modifications"
            }
          ]
        }
      }
    },
    {
      mdsItem: "K0200A",
      description: "Height",
      columns: {
        A: {
          answer: "70",
          confidence: "high",
          rationale: "Patient height 70 inches.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0200B",
      description: "Weight",
      columns: {
        A: {
          answer: "185",
          confidence: "high",
          rationale: "Patient weight 185 lbs.",
          evidence: [
            {
              sourceType: "vital-signs",
              sourceId: "vitals-wt-001",
              quote: "Weight: 185 lbs on admission"
            }
          ]
        }
      }
    },
    {
      mdsItem: "K0300",
      description: "Weight Loss",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No significant weight loss.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0310",
      description: "Weight Gain",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No significant weight gain.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0500A",
      description: "Nutritional Approach - Parenteral/IV Feeding",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No parenteral nutrition.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0500B",
      description: "Nutritional Approach - Feeding Tube",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No feeding tube.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0500C",
      description: "Nutritional Approach - Mechanically Altered Diet",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "Regular texture diet.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "K0500D",
      description: "Nutritional Approach - Therapeutic Diet",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Diabetic diet for diabetes management.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-diet-dm-001",
              quote: "Consistent carbohydrate diabetic diet"
            }
          ]
        }
      }
    },
    {
      mdsItem: "K0700",
      description: "Percent of Meals Eaten",
      columns: {
        A: {
          answer: "2",
          confidence: "high",
          rationale: "Patient eats 75-100% of meals.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-intake-001",
              quote: "Good appetite, consuming 75-100% of meals"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION L - Oral/Dental Status
    // ============================================
    {
      mdsItem: "L0200A",
      description: "Dental - Broken/Loose/Carious Teeth",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No broken, loose, or carious teeth noted.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "L0200B",
      description: "Dental - Abnormal Mouth Tissue",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No abnormal mouth tissue.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "L0200C",
      description: "Dental - Obvious Dental/Oral Pain",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No dental or oral pain reported.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION M - Skin Conditions
    // ============================================
    {
      mdsItem: "M0100",
      description: "Determination of Pressure Ulcer Risk",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient at risk for pressure ulcers based on mobility limitations.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-skin-001",
              quote: "Braden Scale: 16 - Moderate risk. Turning schedule implemented."
            }
          ]
        }
      }
    },
    {
      mdsItem: "M0150",
      description: "Is Skin Ulcer Current?",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No current skin ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0210",
      description: "Unhealed Pressure Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No unhealed pressure ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300A",
      description: "Number of Stage 1 Pressure Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No Stage 1 pressure ulcers.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-wound-001",
              quote: "Skin assessment: Intact, no pressure injuries noted"
            }
          ]
        }
      }
    },
    {
      mdsItem: "M0300B1",
      description: "Number of Stage 2 Pressure Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No Stage 2 pressure ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300C1",
      description: "Number of Stage 3 Pressure Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No Stage 3 pressure ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300D1",
      description: "Number of Stage 4 Pressure Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No Stage 4 pressure ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300E1",
      description: "Number of Unstageable Pressure Ulcers - Deep Tissue",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No deep tissue injuries.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300F1",
      description: "Number of Unstageable Pressure Ulcers - Slough/Eschar",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No unstageable ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0300G1",
      description: "Number of Unstageable Pressure Ulcers - Non-removable Device",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No device-related pressure ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0610A",
      description: "Dimensions of Unhealed Stage 3 or 4 Pressure Ulcer - Length",
      columns: {
        A: {
          answer: "-",
          confidence: "high",
          rationale: "Not applicable - no Stage 3 or 4 ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0700",
      description: "Most Severe Tissue Type for Any Pressure Ulcer",
      columns: {
        A: {
          answer: "-",
          confidence: "high",
          rationale: "Not applicable - no pressure ulcers present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0800",
      description: "Worsening in Pressure Ulcer Status Since Prior Assessment",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No worsening - no ulcers present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M0900A",
      description: "Healed Pressure Ulcers - Stage 2",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No healed Stage 2 ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M1030",
      description: "Number of Venous and Arterial Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No venous or arterial ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M1040",
      description: "Number of Diabetic Foot Ulcers",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No diabetic foot ulcers.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M1200A",
      description: "Skin and Ulcer Treatments - Pressure Reducing Device for Chair",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Pressure reducing cushion used in wheelchair.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "M1200B",
      description: "Skin and Ulcer Treatments - Pressure Reducing Device for Bed",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Pressure reducing mattress in use.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-mattress-001",
              quote: "Pressure redistribution mattress ordered for fall risk"
            }
          ]
        }
      }
    },
    {
      mdsItem: "M1200C",
      description: "Skin and Ulcer Treatments - Turning/Repositioning",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Turning and repositioning schedule in place.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-turn-001",
              quote: "Turn Q2H and PRN per care plan"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION N - Medications
    // ============================================
    {
      mdsItem: "N0350A",
      description: "Insulin Injections Received",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Insulin injections received for diabetes management.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-insulin-all",
              quote: "HumaLOG administered per sliding scale"
            }
          ]
        }
      }
    },
    {
      mdsItem: "N0350B",
      description: "Days Insulin Received",
      columns: {
        A: {
          answer: "7",
          confidence: "high",
          rationale: "Insulin received all 7 days of look-back period.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410A",
      description: "Antipsychotic",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No antipsychotic medications ordered or administered.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410B",
      description: "Antianxiety",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No antianxiety medications.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410C",
      description: "Antidepressant",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No antidepressant medications.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410D",
      description: "Hypnotic",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No hypnotic medications.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410E",
      description: "Anticoagulant",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No anticoagulant medications.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410F",
      description: "Antibiotic",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "IV antibiotic (Vancomycin) administered.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-abx-001",
              quote: "Vancomycin 1g IV Q12H x 14 days for cellulitis"
            }
          ]
        }
      }
    },
    {
      mdsItem: "N0410G",
      description: "Diuretic",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No diuretic medications.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "N0410H",
      description: "Opioid",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No opioid medications.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION O - Special Treatments, Procedures, and Programs
    // ============================================
    {
      mdsItem: "O0110A",
      description: "Chemotherapy (IV, oral, via port)",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No chemotherapy orders or administration records found on admission.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No chemotherapy during the resident stay period.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110B",
      description: "Radiation",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No radiation therapy orders or documentation.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No radiation therapy during stay.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110C",
      description: "Oxygen therapy - continuous or intermittent",
      columns: {
        A: {
          answer: "yes",
          confidence: "medium",
          rationale: "Oxygen therapy documented on admission - may have been temporary.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-o2-001",
              quote: "O2 2L NC PRN for SpO2 < 92%"
            },
            {
              sourceType: "vital-signs",
              sourceId: "vitals-001",
              quote: "SpO2 91% on room air, O2 started at 2L"
            }
          ]
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "Oxygen therapy discontinued after admission day. No ongoing oxygen use.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-o2-001",
              quote: "O2 weaned and discontinued, SpO2 stable on room air"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0110D",
      description: "Suctioning",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No suctioning orders or documentation.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No suctioning required during stay.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110E",
      description: "Tracheostomy care",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "Patient does not have a tracheostomy.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No tracheostomy present.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110F",
      description: "Ventilator or respirator",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No ventilator or respirator use on admission.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No ventilator or respirator use during stay.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110G",
      description: "IV Medications",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Vancomycin 1g IV Q12H was administered on admission for cellulitis treatment.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-iv-001",
              quote: "Vancomycin 1g IV Q12H x 14 days for cellulitis - Start Date: 08/07/2025"
            },
            {
              sourceType: "mar",
              sourceId: "mar-iv-001",
              quote: "Vancomycin 1g IV administered at 08:00 on 08/07/2025 by RN Demo"
            }
          ],
          firstAdministered: "08/07/25",
          lastAdministered: "08/10/25"
        },
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "IV medication administration continued throughout the stay.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-iv-003",
              quote: "Vancomycin 1g IV administered per order - 08/08/2025 08:00"
            }
          ],
          firstAdministered: "08/07/25",
          lastAdministered: "08/14/25"
        }
      }
    },
    {
      mdsItem: "O0110H",
      description: "Transfusions",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No blood transfusion orders or documentation.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No transfusions during stay.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110I",
      description: "Dialysis",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No dialysis orders or ESRD diagnosis.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No dialysis during stay.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0110J",
      description: "IV Access - Peripheral IV, Midline, or Central Line",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Peripheral IV placed on admission for IV medication administration.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-iv-001",
              quote: "20G PIV placed in right forearm, patent, no signs of infiltration"
            }
          ]
        },
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "IV access maintained throughout stay for antibiotic therapy.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-iv-002",
              quote: "PIV site assessed, patent and intact, dressing clean and dry"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0110O",
      description: "Isolation or Quarantine for Active Infectious Disease",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "Not in isolation on admission.",
          evidence: []
        },
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "All isolation criteria met: positive infection test, active isolation order, private room placement.",
          evidence: [
            {
              sourceType: "lab-result",
              sourceId: "lab-covid-001",
              quote: "COVID-19 PCR: POSITIVE, detected 08/10/2025"
            },
            {
              sourceType: "order",
              sourceId: "order-isolation-001",
              quote: "Contact and Droplet Precautions for COVID-19 - Active"
            },
            {
              sourceType: "progress-note",
              sourceId: "note-room-001",
              quote: "Patient placed in private room 214 for isolation per infection control protocol"
            }
          ],
          steps: [
            {
              step: 1,
              name: "Positive Infection Test",
              passed: "yes",
              confidence: "high",
              rationale: "COVID-19 PCR positive test confirmed on 08/10/2025.",
              evidence: [
                {
                  sourceType: "lab-result",
                  sourceId: "lab-covid-001",
                  quote: "COVID-19 PCR: POSITIVE, detected 08/10/2025"
                }
              ]
            },
            {
              step: 2,
              name: "Isolation Order",
              passed: "yes",
              confidence: "high",
              rationale: "Active isolation precautions order in place.",
              evidence: [
                {
                  sourceType: "order",
                  sourceId: "order-isolation-001",
                  quote: "Contact and Droplet Precautions for COVID-19"
                }
              ]
            },
            {
              step: 3,
              name: "Single Room",
              passed: "yes",
              confidence: "high",
              rationale: "Patient documented in private room for isolation.",
              evidence: [
                {
                  sourceType: "progress-note",
                  sourceId: "note-room-001",
                  quote: "Patient placed in private room 214 for isolation"
                }
              ]
            }
          ],
          startDate: "08/10/25"
        }
      }
    },
    {
      mdsItem: "O0110Z",
      description: "None of the Above",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "Patient has treatments documented above.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "Patient has treatments documented above.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0250A",
      description: "Insulin - Injections, days received",
      columns: {
        A: {
          answer: "7",
          confidence: "high",
          rationale: "Patient received insulin injections on 7 of the last 7 days.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-insulin-001",
              quote: "HumaLOG 10 unit subcutaneously administered for elevated BS - 08/08/2025 07:30"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-007",
              quote: "HumaLOG 10 unit subcutaneously for TYPE 2 DIABETES MELLITUS - 08/13/2025 07:30"
            }
          ],
          firstAdministered: "08/08/25",
          lastAdministered: "08/14/25"
        }
      }
    },
    {
      mdsItem: "O0250B",
      description: "Insulin - Number of days insulin order changed",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Insulin orders unchanged during period.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0300A",
      description: "Therapies - Speech-Language Pathology",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "SLP evaluation and treatment provided.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-slp-001",
              quote: "SLP initial evaluation completed. Treatment for cognitive-communication"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0300B",
      description: "Therapies - Occupational Therapy",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "OT evaluation and treatment provided.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-ot-001",
              quote: "OT initial evaluation. ADL training initiated"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0300C",
      description: "Therapies - Physical Therapy",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "PT evaluation and treatment provided.",
          evidence: [
            {
              sourceType: "therapy-note",
              sourceId: "note-pt-001",
              quote: "PT initial evaluation. Gait training and strengthening program"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0300D",
      description: "Therapies - Respiratory Therapy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No respiratory therapy ordered.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0300E",
      description: "Therapies - Psychological Therapy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No psychological therapy ordered.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0300F",
      description: "Therapies - Recreational Therapy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No recreational therapy ordered.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0400",
      description: "Therapy Minutes",
      columns: {
        A: {
          answer: "multiple",
          confidence: "high",
          rationale: "Multiple therapy disciplines with documented minutes.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0425A",
      description: "Restorative Nursing - Range of Motion (Passive)",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "PROM provided by nursing.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0425B",
      description: "Restorative Nursing - Range of Motion (Active)",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "AROM exercises provided.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0425C",
      description: "Restorative Nursing - Splint/Brace Assistance",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No splint or brace in use.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0430",
      description: "Distinct Calendar Days of Restorative Nursing",
      columns: {
        A: {
          answer: "6",
          confidence: "high",
          rationale: "Restorative nursing provided 6 days during look-back.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0500A",
      description: "Influenza Vaccine Received",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Influenza vaccine received this season.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-flu-001",
              quote: "Influenza vaccine administered 10/15/2024"
            }
          ]
        }
      }
    },
    {
      mdsItem: "O0500B",
      description: "Pneumococcal Vaccine Received",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Pneumococcal vaccine up to date.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "O0500C",
      description: "COVID-19 Vaccine Received",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "COVID-19 vaccination up to date.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-covid-vax-001",
              quote: "COVID-19 vaccination series complete, booster received"
            }
          ]
        }
      }
    },

    // ============================================
    // SECTION P - Restraints and Alarms
    // ============================================
    {
      mdsItem: "P0100A",
      description: "Physical Restraints - Trunk Restraint",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No trunk restraints used.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "P0100B",
      description: "Physical Restraints - Limb Restraint",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No limb restraints used.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "P0100C",
      description: "Physical Restraints - Chair Prevents Rising",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No chair that prevents rising.",
          evidence: [
            {
              sourceType: "nursing-note",
              sourceId: "note-restraint-001",
              quote: "No restraints in use. Patient ambulatory with assistance."
            }
          ]
        }
      }
    },
    {
      mdsItem: "P0100D",
      description: "Physical Restraints - Side Rails",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No full side rails used as restraint.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "P0100E",
      description: "Physical Restraints - Other",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No other restraints used.",
          evidence: []
        }
      }
    },

    // ============================================
    // SECTION Q - Participation in Assessment
    // ============================================
    {
      mdsItem: "Q0100",
      description: "Participation in Assessment",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient participated in assessment.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "Q0300",
      description: "Resident's Overall Expectation",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Patient expects to return home.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-goals-001",
              quote: "Patient states goal is to return home after rehabilitation"
            }
          ]
        }
      }
    },
    {
      mdsItem: "Q0400",
      description: "Discharge Plan",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Active discharge planning with goal of community return.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "Q0500A",
      description: "Is Active Discharge Planning Already Occurring?",
      columns: {
        A: {
          answer: "1",
          confidence: "high",
          rationale: "Active discharge planning in progress.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "Q0500B",
      description: "Has Resident's Goals Changed?",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "Goals remain consistent.",
          evidence: []
        }
      }
    },
    {
      mdsItem: "Q0600",
      description: "Referral",
      columns: {
        A: {
          answer: "0",
          confidence: "high",
          rationale: "No referral to local contact agency needed.",
          evidence: []
        }
      }
    }
  ],
  timing: {
    totalMs: 4523,
    orderClassificationMs: 1200,
    adminLookupMs: 890,
    decisionMs: 2433
  }
};

// Helper to get mock answers by section
function getMockDataForSection(sectionCode) {
  // Handle special case for GG section (two letters)
  const sectionItems = MOCK_MDS_DATA.items.filter(item => {
    if (sectionCode === 'GG') {
      return item.mdsItem.startsWith('GG');
    }
    // For single-letter sections, make sure we don't match GG when looking for G
    if (sectionCode.length === 1) {
      return item.mdsItem.startsWith(sectionCode) && !item.mdsItem.startsWith('GG');
    }
    return item.mdsItem.startsWith(sectionCode);
  });

  return {
    ...MOCK_MDS_DATA,
    items: sectionItems
  };
}

// Export for use in content script
if (typeof window !== 'undefined') {
  window.SUPER_MOCK_DATA = MOCK_MDS_DATA;
  window.getSuperMockDataForSection = getMockDataForSection;
}
