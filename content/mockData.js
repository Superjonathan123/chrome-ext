// Mock MDS AI Answer Data
// This will be replaced with actual API calls later

const MOCK_MDS_DATA = {
  patientId: "patient-123",
  assessmentId: "assessment-456",
  assessmentType: "5-day",
  solvedAt: "2025-08-31T12:00:00.000Z",
  items: [
    // O0110A1 - Chemotherapy: Match (both say No)
    {
      mdsItem: "O0110A1",
      description: "Chemotherapy",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No chemotherapy orders or administration records found in admission period. Patient's diagnosis is orthopedic (trimalleolar fracture) with no oncological history.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No chemotherapy orders or administration records found during the resident stay period.",
          evidence: []
        }
      }
    },
    // O0110A2 - IV Medications: Mismatch on Column A (PCC says No, Super says Yes)
    {
      mdsItem: "O0110A2",
      description: "IV Medications",
      columns: {
        A: {
          answer: "yes",
          confidence: "high",
          rationale: "Vancomycin 1g IV Q12H was administered on admission for cellulitis treatment. IV antibiotic therapy was initiated within 24 hours of admission.",
          evidence: [
            {
              sourceType: "order",
              sourceId: "order-iv-001",
              quote: "Vancomycin 1g IV Q12H x 14 days for cellulitis - Start Date: 08/07/2025"
            },
            {
              sourceType: "mar",
              sourceId: "mar-iv-001",
              quote: "Vancomycin 1g IV administered at 08:00 on 08/07/2025 by RN Smith"
            },
            {
              sourceType: "mar",
              sourceId: "mar-iv-002",
              quote: "Vancomycin 1g IV administered at 20:00 on 08/07/2025 by RN Johnson"
            }
          ],
          firstAdministered: "08/07/25",
          lastAdministered: "08/10/25"
        },
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "IV medication administration continued throughout the stay. Multiple IV administrations documented in MAR.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-iv-003",
              quote: "Vancomycin 1g IV administered per order - 08/08/2025 08:00"
            },
            {
              sourceType: "mar",
              sourceId: "mar-iv-004",
              quote: "Vancomycin 1g IV administered per order - 08/09/2025 08:00"
            }
          ],
          firstAdministered: "08/07/25",
          lastAdministered: "08/14/25"
        }
      }
    },
    // O0110A3 - Oral Medications: Needs Review (low confidence)
    {
      mdsItem: "O0110A3",
      description: "Medications",
      columns: {
        A: {
          answer: "no",
          confidence: "medium",
          rationale: "No specific medications matching O0110A3 criteria found. However, medication reconciliation documentation is incomplete for admission period.",
          evidence: [
            {
              sourceType: "progress-note",
              sourceId: "note-med-001",
              quote: "Medication reconciliation pending pharmacy review"
            }
          ]
        },
        B: {
          answer: "no",
          confidence: "low",
          rationale: "Unable to determine with certainty. MAR shows multiple oral medications but categorization is unclear without pharmacy classification.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-oral-001",
              quote: "Multiple oral medications documented - see full MAR"
            }
          ]
        }
      }
    },
    // O0110A10 - Other: Match
    {
      mdsItem: "O0110A10",
      description: "Other",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No other special treatments documented on admission.",
          evidence: []
        },
        B: {
          answer: "no",
          confidence: "high",
          rationale: "No other special treatments documented during stay.",
          evidence: []
        }
      }
    },
    // O0100E2 - Insulin Injections: Mismatch (PCC says No, Super says Yes with strong evidence)
    {
      mdsItem: "O0100E2",
      description: "Insulin Injections - 7 Day Look-Back",
      columns: {
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "Patient received insulin injections on 7 of the last 7 days for diabetes management. Sliding scale insulin with scheduled doses documented.",
          evidence: [
            {
              sourceType: "mar",
              sourceId: "mar-insulin-001",
              quote: "HumaLOG 10 unit subcutaneously administered for elevated BS - 08/08/2025 07:30"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-002",
              quote: "HumaLOG 10 unit subcutaneously one time only for BS above 400 - 08/08/2025 12:00"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-003",
              quote: "HumaLOG 8 unit subcutaneously for blood sugar above 400 - 08/09/2025 07:30"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-004",
              quote: "HumaLOG 10 unit intramuscularly for hyperglycemic - 08/10/2025 11:45"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-005",
              quote: "HumaLOG 5 unit subcutaneously before meals for DM - 08/11/2025 07:30"
            },
            {
              sourceType: "mar",
              sourceId: "mar-insulin-006",
              quote: "HumaLOG 10 unit subcutaneously for DM - 08/12/2025 07:30"
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
    // O0110M1 - Isolation: Mismatch with detailed steps
    {
      mdsItem: "O0110M1",
      description: "Isolation or Quarantine for Active Infectious Disease",
      columns: {
        B: {
          answer: "yes",
          confidence: "high",
          rationale: "All isolation criteria met: positive infection test, active isolation order, and private room placement documented.",
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
    // O0110B1 - Radiation: Match (both No)
    {
      mdsItem: "O0110B1",
      description: "Radiation",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No radiation therapy orders or documentation found. Patient has no oncological diagnoses.",
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
    // O0110C1 - Oxygen Therapy: Needs Review
    {
      mdsItem: "O0110C1",
      description: "Oxygen Therapy",
      columns: {
        A: {
          answer: "yes",
          confidence: "medium",
          rationale: "Oxygen therapy documented but duration unclear. May have been temporary post-operative.",
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
          rationale: "Oxygen therapy discontinued after admission day. No ongoing oxygen use documented.",
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
    // O0110D1 - Suctioning: Match
    {
      mdsItem: "O0110D1",
      description: "Suctioning",
      columns: {
        A: {
          answer: "no",
          confidence: "high",
          rationale: "No suctioning orders or documentation on admission.",
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
    // O0110E1 - Tracheostomy Care: Match
    {
      mdsItem: "O0110E1",
      description: "Tracheostomy Care",
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
    // O0110F1 - Ventilator: Match
    {
      mdsItem: "O0110F1",
      description: "Ventilator or Respirator",
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
    // O0110H2 - IV Access: Mismatch
    {
      mdsItem: "O0110H2",
      description: "IV Access",
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
  // Filter items that belong to the requested section
  const sectionItems = MOCK_MDS_DATA.items.filter(item =>
    item.mdsItem.startsWith(sectionCode)
  );

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
