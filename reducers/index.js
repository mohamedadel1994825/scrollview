import DonorSearch from './donors/search';

import DonorRegester from './donors/register';
import DonorNewVisit from './donors/newVisit';
import DonorMedicalCheckUp from './donors/medicalCheckup';
import DonorPhlebotomy from './donors/phlebotomy';
import DispatchDonor from './donors/dispatch';
import visitQueue from './donors/visitQueue';
import ReconcilitionProcess from './processing/reconciliation';
import SperationProcess from './processing/separation';
import GroupinglabProcess from './processing/groupingLab';
import CenterFugation from './processing/centerfugation';
import ReleaseProcessing from './processing/release';
import DiscardProcessing from './processing/discard';
import StoreProcessing from './processing/processingStore';
import WithDrwalProcess from './processing/withDrwal';
import LabelPrinting from './processing/LabelPrinting';
import StoreIssuing from './issuing/issuingStore';
import TrackingBarcode from './tracking/trackingBarcode';
//==========SEROLOGY REDUCERS===================
import Reconcilation from './serology/reconciliation';
import GroupingLab from './serology/groupingLap';
import NatLabSerology from './serology/natLap';
import virologySerology from './serology/virologyLab'
//==================PATIENT REDUCER//==============
import PatientSearch from './patients/search';
import PatientRegister from './patients/register';
import NewRequestPatient from './patients/newRequest';
import RequestInfo from './patients/requestInfo';
import PatientReseriveUnites from './patients/reserveUnites';
import PatientCrossMatching from './patients/crossMatching';
import PatientIssuingUnites from './patients/issuingUnits';
import GroupingSamples from './patients/groupingSamples';
const reducers = {
	DonorSearch,
	DonorRegester,
	DonorNewVisit,
	DonorMedicalCheckUp,
	DonorPhlebotomy,
	DispatchDonor,
	visitQueue,
	Reconcilation,
	GroupingLab,
	NatLabSerology,
	ReconcilitionProcess,
	SperationProcess,
	GroupinglabProcess,
	CenterFugation,
	ReleaseProcessing,
	DiscardProcessing,
	StoreProcessing,
	WithDrwalProcess,
	LabelPrinting,
	StoreIssuing,
	TrackingBarcode,
	PatientSearch,
	PatientRegister,
	NewRequestPatient,
	RequestInfo,
	PatientReseriveUnites,
	PatientCrossMatching,
	PatientIssuingUnites,
	GroupingSamples,
	virologySerology
};
export default reducers;
