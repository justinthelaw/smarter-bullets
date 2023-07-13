export const { CLIENT_HOST, CLIENT_PORT, NODE_ENV, FAVICON_URL } = process.env

export const ENV: string = NODE_ENV || 'development'
export const HOST: string = CLIENT_HOST || 'localhost'
export const PORT: number = parseInt(CLIENT_PORT || '8080')

export const OPTIMIZATION_STATUS = {
  OPTIMIZED: 0,
  FAILED_OPT: 1,
  NOT_OPT: -1,
  MAX_UNDERFLOW: -4
}

export const FORMS = {
  AF707: {
    description: 'Officer Performance Report (Lt thru Col) - AF Form 707, 20150731, V2',
    width: 201.041,
    fields: [
      's1.rateeIdentificationData',
      's2.jobDescription',
      's3.performanceFactors',
      's4.raterOverallAssessment',
      's5.additionalRaterOverallAssessment',
      's6.reviewer',
      's7.functionalExaminerAirForceAdvisor',
      's8.rateesAcknowledgement',
      's9.performanceFactors',
      's10.remarks',
      's11.referralReport'
    ]
  },
  DAF910: {
    description: 'Enlisted Performance Report (AB/Spc1 thru TSgt) - DAF Form 910, 20220316',
    width: 202.321,
    fields: [
      's1.rateeIdentificationData',
      's2.jobDescription',
      's3.performanceInPrimaryDutiesTrainingRequirements',
      's4.FollowershipLeadership',
      's5.wholeAirmanGuardianConcept',
      's6.overallPerformanceAssessment',
      's7.raterInformation',
      's8.additionalRaterComments',
      's9.unitCommanderMilitaryOrCivilianDirectorOtherAuthorizedReviewerComments',
      's10.functionalExaminerAirForceAdvisor',
      's11.remarks',
      's12.rateesAcknowledgement'
    ]
  },
  AF911: {
    description: 'Enlisted Performance Report (MSgt thru SMSgt) - AF Form 911, 20150731, V2',
    width: 202.321,
    fields: [
      's1.rateeIdentificationData',
      's2.jobDescription',
      's3.performanceInLeadershipPrimaryDutiesFollowershipTrainingRequirements',
      's4.wholeAirmanGuardianConcept',
      's5.overallPerformanceAssessment',
      's6.raterInformation',
      's7.additionalRaterComments',
      's8.unitCommanderMilitaryOrCivilianDirectorOtherAuthorizedReviewerComments',
      's9.finalEvaluatorComments',
      's10.functionalExaminerAirForceAdvisor',
      's11.remarks',
      's12.rateesAcknowledgement'
    ]
  },
  AF912: {
    description: 'Enlisted Performance Report (CMSgt) - AF Form 912, 20150529, V2',
    width: 201.041,
    fields: [
      's1.rateeIdentificationData',
      's2.ratersPerformanceAssessment',
      's3.raterInformation',
      's4.seniorRaterPerformanceAssessment',
      's5.functionalExaminerAirForceAdvisor',
      's6.rateesAcknowledgement',
      's7.remarks',
      's8.referralReport'
    ]
  },
  AF1206: {
    description: 'Nomination For Award - AF Form 1206, 20170802',
    width: 202.321,
    fields: ['s1.nomineeIdentification', 's2.specificAccomplishments', 's3.specificAccomplishmentsContinued']
  }
}
