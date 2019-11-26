import { Domain } from "domain";
import MainStore from "../containers/Pages/Processing/MainStore";

/////--------------------------------------////////////////
///// api const Url
/////------------------------------------///////////////

export const DOMAIN = "http://localhost:5050";

// --------------------------------------------------------
// API end points
// --------------------------------------------------------
export default {
  //////////////////Donation moduele//////////////////////
  Donation: {
    SEARCHFORDONOR: () => `${DOMAIN}/donation/en/donors/searchfordonor`,
    GETREGESTERDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/getDonorDropdowns`,
    ADDNEWDONOR: () => `${DOMAIN}/donation/en/donors/`,
    GETDONORDATA: donorId => `${DOMAIN}/donation/en/Donors/${donorId}`,
    GETLASTVISIT: donorId =>
      `${DOMAIN}/donation/en/DonorVisits/GetLastDonorVisit/${donorId}`,
    GETVISITSELIGIBLILITY: donorId =>
      `${DOMAIN}/donation/en/DonorVisits/GetVisitsEligibility/${donorId}`,
    DONATIONTYPESDROPDOWNLIST: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/getDonationTypesDropdown`,
    SUPDONATIONTYPESDROPDOWNLIST: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/getSubDonationTypesDropdown`,
    VALIDATEDONATIONTYPE: () =>
      `${DOMAIN}/donation/en/donorvisits/validatedonationtype`,
    ADDNEWVISIT: () => `${DOMAIN}/donation/en/donorvisits`,
    ADDMEDICALCHECKUP: () => `${DOMAIN}/donation/en/medicalcheckup/`,
    GETVISITDATA: visitID => `${DOMAIN}/donation/en/DonorVisits/${visitID}`,
    GETREMIDICALCHECKUPDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/getMedicalCheckUpDropdowns`,

    GETPHLEBOTOMYDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/getPhlebotomyDropDowns`,
    ADDPHLEBOTOMY: () => `${DOMAIN}/donation/en/phlebotomy/`,
    GetVISITQUEUE: () => `${DOMAIN}/donation/en/DonorVisits/visitsQueue`,
    GETALLDISPATCHDATA: () => `${DOMAIN}/donation/en/dispatch/`,
    GETDISPATCHUNIT: id =>
      `${DOMAIN}/donation/en/Dispatch/GetDispatchById/${id}`,
    ADDDISPATCH: () => `${DOMAIN}/donation/en/dispatch`,
    DELETEDISPATCHUNIT: id => `${DOMAIN}/donation/en/Dispatch/${id}`,
    EDITDONORDATA: donorId => `${DOMAIN}/donation/en/Donors/${donorId}`,
    EDITMEDICALCHECKUP: id => `${DOMAIN}/donation/en/MedicalCheckUp/${id}`,
    GETMEDICALCHECKUPWITHVISTID: visitId =>
      `${DOMAIN}/donation/en/MedicalCheckUp/GetMedicalCheckupByVisitId?visitId=${visitId}`,
    GETVISTEDITDATA: visitId => `${DOMAIN}/donation/en/DonorVisits/${visitId}`,
    EDITVISTEDITDATA: id => `${DOMAIN}/donation/en/DonorVisits/${id}`,
    EDITPHLBOTMYDATA: id => `${DOMAIN}/donation/en/Phlebotomy/${id}`,
    GETPHELBOTMYVISTID: visitId =>
      `${DOMAIN}/donation/en/Phlebotomy/GetPhlebotomyByVisitId?visitId=${visitId}`,
    CHECKBARCODEEXIST: barcode =>
      `${DOMAIN}/donation/en/Phlebotomy/CheckBarcodeExsits/${barcode}`
  },
  ////////////////////////////////////Serology////////////////////////////////////////////////
  Serology: {
    ADDSAMPLES: () => `${DOMAIN}/serology/en/Reconciliation`,
    GETCOLLECTIONSITES: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/GetCollectionSitesDropDownList`,
    GETCOLLECTIONSITEHISTORY: () =>
      `${DOMAIN}/serology/en/reconciliation/getallreconciliations`,
    GETALLRECONCILATIONSAMPLES: () =>
      `${DOMAIN}/serology/en/reconciliation/getallreconciliationssamples`,
    SAVECHANGES: rowId => `${DOMAIN}/serology/en/reconciliation/Item/${rowId}`,
    GETALLGROUPINGSAMPLES: () => `${DOMAIN}/serology/en/GroupingLab/GetSamples`,
    ADDALLGROUPINGSAMPLES: () =>
      `${DOMAIN}/serology/en/groupinglab/submitresults`,
    GETALLNATSAMPLES: () => `${DOMAIN}/serology/en/natlab/getsamples`,
    ADDALLNATSAMPLES: () => `${DOMAIN}/serology/en/natlab/submitresults`,
    GETVIROLOGYDATA: () => `${DOMAIN}/serology/en/VirologyLab/GetSamples`,
    ADDVIROLOGYDATA: () => `${DOMAIN}/serology/en/VirologyLab/SubmitResults`,
    GETLIPEMICTEST: () => `${DOMAIN}/serology/en/lipemictest/getsamples`,
    ADDLIPEMICTEST: () => `${DOMAIN}/serology/en/lipemictest/submitresults`
  },
  //////////////////////////////////Processing/////////////////////////////////////////////////////
  Processing: {
    AddSAMPLESRECON: () =>
      `${DOMAIN}/processing/en/BagsReconciliation/AddReconciliation`,
    GETCOLLECTIONSITESRECO: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/GetCollectionSitesDropDownList`,
    GETBARCODEINFO: barcode =>
      `${DOMAIN}/processing/en/BagsReconciliation/GetBagDetails/${barcode}`,
    GETALLRECONHISTORY: () =>
      `${DOMAIN}/processing/en/BagsReconciliation/GetAllReconciliations`,
    GETALLRECONCAUDITDATA: () =>
      `${DOMAIN}/processing/en/BagsReconciliation/GetAllReconciliationsItems`,
    DELETERECONBARCODE: barcodeId =>
      `${DOMAIN}/processing/en/BagsReconciliation/${barcodeId}`,
    EDITRECONBARCODE: barcodeId =>
      `${DOMAIN}/processing/en/BagsReconciliation/Item/${barcodeId}`,
    REMOVECONFIRMATION: barcodeId =>
      `${DOMAIN}/processing/en/Separation/RemoveComponentSeprationConfirmation/${barcodeId}`,
    GETALLSPERATEDBYUNIT: barcodeId =>
      `${DOMAIN}/processing/en/Separation/GetSeparationByUnit/${barcodeId}`,
    ADDSPERATIONBYUNIT: () =>
      `${DOMAIN}/processing/en/Separation/AddSeparationByUnit`,
    GETALLSPERATEDBYBATCH: bagId =>
      `${DOMAIN}/processing/en/Separation/GetSeparationByBatch/${bagId}`,
    ADDSPERATIONBYBATCH: () =>
      `${DOMAIN}/processing/en/Separation/AddSeparationByBatch`,
    GETALLBAGTYPE: () => `${DOMAIN}/auxiliary/en/dropdowns/BagTypes`,
    ADDGROUPINGSAMPLEPROCESS: () =>
      `${DOMAIN}/processing/en/ProcessingGroupingLab/SubmitResults`,
    GETGROUPINGSAMPLEPROCESS: () =>
      `${DOMAIN}/processing/en/ProcessingGroupingLab/GetBags`,
    EDITGROUBINGLAPPROCSS: brcodeId =>
      `${DOMAIN}//processing/en/ProcessingGroupingLab/${brcodeId}`,
    GETGROUPINGAUDITSAMPLEPROCESS: () =>
      `${DOMAIN}/processing/en/ProcessingGroupingLab/GetHistory`,
    GETALLBAGSMATCHINGBLOODTYPE: () =>
      `${DOMAIN}/processing/en/Centerfugation/GetAllowedBagsMatchingBloodType`,
    ADDCENTERFUGATION: () =>
      `${DOMAIN}/processing/en/Centerfugation/SubmitCenterfugationResults`,
    GETALLBLOODTYPE: programType =>
      `${DOMAIN}/processing/api/Centerfugation/GetBloodTypesMatchingSelectedProgram?CenterugationProgramTypeId=${programType}`,
    GETPROGRAMTYPE: centerFugationId =>
      `${DOMAIN}/processing/api/Centerfugation/GetProgramTypesMatchingSelectedCenterfugationType?centerfugationTypeId=${centerFugationId}`,
    GETCENTERFUGATIONTYPEID: () =>
      `${DOMAIN}/processing/api/Centerfugation/GetCenterfugeTypesDropDownList`,
    ADDRELEASEBYUNIT: () => `${DOMAIN}/processing/en/Release`,
    ADDRELEASEBYBATCH: () => `${DOMAIN}/processing/en/Release`,
    GETRELEASEBYUNIT: () => `${DOMAIN}/processing/en/Release/GetReleaseByUnit`,
    GETRELEASEBYBATCH: () =>
      `${DOMAIN}/processing/en/Release/GetReleaseByBatch`,
    GETSHAREDBLOODCOMPONENT: () =>
      `${DOMAIN}/auxiliary/en/dropdowns/bloodComponentTypes`,
    ADDDISCARDBYUNIT: () => `${DOMAIN}/processing/en/Discard`,
    ADDDISCARDBYBATCH: () => `${DOMAIN}/processing/en/Discard`,
    GETDISCARDBYBATCH: () =>
      `${DOMAIN}/processing/en/Discard/GetDiscardByBatch`,
    GETDISCARDBYUNIT: () => `${DOMAIN}/processing/en/Discard/GetDiscardByUnit`,
    GETDISCARDEDREASON: () =>
      `${DOMAIN}/processing/en/Discard/discardReasonsDropDownList`,
    SHAREDMAINSTORE: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/ProcessingMainStores`,
    SHEVIELESSHAREDSTORE: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/ProcessingStoresShelves`,
    SHAREDSUBSTORE: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/ProcessingSubStores`,
    ADDMAINSTOREBYUNIT: () => `${DOMAIN}/Processing/en/ProcessingStore`,
    ADDMAINSTOREBYBATCH: () => `${DOMAIN}/Processing/en/ProcessingStore`,
    GETMSINSTOREBYUNIT: () =>
      `${DOMAIN}/Processing/en/ProcessingStore/Main/GetByUnit`,
    GETMAINSTOREBYBATCH: () =>
      `${DOMAIN}/Processing/en/ProcessingStore/Main/GetByBatch`,
    GETWiTHDRWALDATA: () =>
      `${DOMAIN}/processing/en/Withdrawl/GetWithdrawlBarcodes`,
    ADDWITHDRAWALDATA: () => `${DOMAIN}/processing/en/Withdrawl/AddWithdrawl`,
    ADDGROUPINGSAMPLEPROCESSLABELPRINTING: () =>
      `${DOMAIN}/processing/en/LabelPrinting/AddPrintProcess`,
    GETPRINTBYUNIT: () => `${DOMAIN}/processing/en/LabelPrinting/GetByUnit`,
    VERIFYLABELPRINTED: () =>
      `${DOMAIN}/processing/en/LabelPrinting/VerifyLabel`,
    GETHISTORYPROCESSINGSTORE: id =>
      `${DOMAIN}/processing/en/ProcessingStore/Main/GetAllComponentsByStoreId?id=${id}`,
    GETBLOODWITHMAINSTOREPROCESS: id =>
      `${DOMAIN}/processing/en/ProcessingStore/GetProcessingStore?storeId=${id}`
  },
  /////////////////////////////////Issuing///////////////////////////////////////
  Issuing: {
    ADDMAINSTOREBYUNIT: () =>
      `${DOMAIN}/Issuing/en/IssuingStore/CheckInComponentToStore`,
    ADDMAINSTOREBYBATCH: () =>
      `${DOMAIN}/Issuing/en/IssuingStore/CheckInComponentToStore`,
    GETMSINSTOREBYUNIT: () => `${DOMAIN}/Issuing/en/IssuingStore/GetByUnit`,
    GETMAINSTOREBYBATCH: () => `${DOMAIN}/Issuing/en/IssuingStore/GetByBatch`,
    GETISSUINGREPORT: () => `${DOMAIN}/issuing/en/StockReports`,
    SHAREDMAINSTOREISSING: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/IssuingMainStores`,
    SHEVIELESSHAREDSTOREISSING: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/IssuingStoresShelves`,
    SHAREDSUBSTOREISSING: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/IssuingSubStores`,
    ISSINGBLOODSTORE: MainStore =>
      `${DOMAIN}/Issuing/en/IssuingStore/GetIssuingStore?id=${MainStore}`
  },
  ///////////////////Tracking/////////////////////////
  Tracking: {
    GETBARCODETRACKING: id =>
      `${DOMAIN}/Issuing/en/BarcodeTracking/Barcode/${id}`,
    GETTUBELINE: id =>
      `${DOMAIN}/Issuing/en/BarcodeTracking/GetTubeLineTraking?TubeLine=${id}`,
    GETUNITTRACKING: (barcodeId, standardCode) =>
      `${DOMAIN}/Issuing/en/BarcodeTracking/GetComponentTracking?barCode=${barcodeId}&componentBarcode=${standardCode}`,
    GETSEROLOGYTRACKING: id =>
      `${DOMAIN}/Issuing/en/BarcodeTracking/GetSerologyResult?barCode=${id}`,
    GETPHLEPOTOMY: id =>
      `${DOMAIN}/Issuing/en/BarcodeTracking/GetPhlepotomyResult?barCode=${id}`
  },
  Patient: {
    SEARCHFORPATIENT: () => `${DOMAIN}/Patient/en/Patient/SearchForPatient`,
    ADDNEWPATIENT: () => `${DOMAIN}/Patient/en/Patient/`,
    NEEDEDCOMPONENTDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/dropdowns/bloodComponentTypes`,
    BLOODGROUPDROPDOWN: () => `${DOMAIN}/auxiliary/en/Dropdowns/BloodGroups`,
    ADDNEWREQUEST: () => `${DOMAIN}/Patient/en/Requests`,
    CHECKAVAILABILITY: () => `${DOMAIN}/Patient/en/Requests/CheckAvailability`,
    GETPATIENTDATA: patiantId => `${DOMAIN}/Patient/en/Patient/${patiantId}`,
    GETREQUESTCATEGORYDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/dropdowns/Categories`,
    GETREQUESTCATEGORYDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/dropdowns/Categories`,
    GETREQUESTHOSPITALDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Hospitals`,
    GETREQUESTPHONETYPESDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/PhenoTypeCondition`,
    GETREQUESTTRANSNFUSIONSDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Trasnfusion`,
    GETREQUESTDIAGNOSISDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Diagnosis`,
    GETREQUESTPRIORITYDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Priority`,
    GETREQUESTPATIENTSTYPESDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/PatientTypes`,
    GETREQUESTPHYSICIANSDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Physicians`,
    GETREQUESTSURGEYTYPESDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/SurgeryType`,
    GETREQUESTSERVICEDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Services`,
    GETREQUESTMEDICATIONDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Medication`,
    ADDREQUESTINFO: () => `${DOMAIN}/Patient/en/RequestInfo/AddRequestInfo`,
    GETREQUESTDATA: requestId => `${DOMAIN}/Patient/en/Requests/${requestId}`,
    GETALLRESERIVEDUNITESBYREQESTID: id =>
      `${DOMAIN}/Patient/en/ReservedUnits/GetAllReservedUnitsByRequestId?requestId=${id}`,
    ADDRESERVIEDUNITES: () =>
      `${DOMAIN}/Patient/en/ReservedUnits/AddReservedUnit`,
    GETTECHNIQSHARED: () => `${DOMAIN}/auxiliary/en/Dropdowns/Techniques`,
    GETRESULTSHARED: () => `${DOMAIN}/auxiliary/en/Dropdowns/TestResults`,
    ADDCROSSMATCHINGDATA: () =>
      `${DOMAIN}/Patient/en/CrossMatching/AddCrossMatchingUnit`,
    GETVISUALINSPECTIONSHARED: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/VisualInspection`,
    ADDISSUINGUNITES: () => `${DOMAIN}/Patient/en/UnitsIssuing/AddUnitsIssuing`,
    GETSOURCEOFSAMPLESDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/SourceOfSample`,
    GETPHLEBOTOMISTDROPDOWN: () =>
      `${DOMAIN}/auxiliary/en/Dropdowns/Phlebotomist`,
    ADDGROUPINGSAMPLES: () =>
      `${DOMAIN}/Patient/en/GroupingSample/AddPatientGruopingSample`
  }
};
