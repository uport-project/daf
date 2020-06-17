interface IAgentRESTMethod {
  type: 'GET' | 'POST'
  path: string
}

export const supportedMethods: Record<string, IAgentRESTMethod> = {
  availableMethods: { type: 'POST', path: '/availableMethods' },
  dataStoreSaveMessage: { type: 'POST', path: '/dataStoreSaveMessage' },
  dataStoreSaveVerifiableCredential: { type: 'POST', path: '/dataStoreSaveVerifiableCredential' },
  dataStoreSaveVerifiablePresentation: { type: 'POST', path: '/dataStoreSaveVerifiablePresentation' },
  resolveDid: { type: 'POST', path: '/resolveDid' },
  handleMessage: { type: 'POST', path: '/handleMessage' },
  keyManagerCreateKey: { type: 'POST', path: '/keyManagerCreateKey' },
  keyManagerGetKey: { type: 'POST', path: '/keyManagerGetKey' },
  keyManagerDeleteKey: { type: 'POST', path: '/keyManagerDeleteKey' },
  keyManagerImportKey: { type: 'POST', path: '/keyManagerImportKey' },
  keyManagerEncryptJWE: { type: 'POST', path: '/keyManagerEncryptJWE' },
  keyManagerDecryptJWE: { type: 'POST', path: '/keyManagerDecryptJWE' },
  keyManagerSignJWT: { type: 'POST', path: '/keyManagerSignJWT' },
  keyManagerSignEthTX: { type: 'POST', path: '/keyManagerSignEthTX' },
  identityManagerGetProviders: { type: 'POST', path: '/identityManagerGetProviders' },
  identityManagerGetIdentities: { type: 'POST', path: '/identityManagerGetIdentities' },
  identityManagerGetIdentity: { type: 'POST', path: '/identityManagerGetIdentity' },
  identityManagerCreateIdentity: { type: 'POST', path: '/identityManagerCreateIdentity' },
  identityManagerImportIdentity: { type: 'POST', path: '/identityManagerImportIdentity' },
  identityManagerDeleteIdentity: { type: 'POST', path: '/identityManagerDeleteIdentity' },
  identityManagerAddKey: { type: 'POST', path: '/identityManagerAddKey' },
  identityManagerRemoveKey: { type: 'POST', path: '/identityManagerRemoveKey' },
  identityManagerAddService: { type: 'POST', path: '/identityManagerAddService' },
  identityManagerRemoveService: { type: 'POST', path: '/identityManagerRemoveService' },
  sendMessageDIDCommAlpha1: { type: 'POST', path: '/sendMessageDIDCommAlpha1' },
  createSelectiveDisclosureRequest: { type: 'POST', path: '/createSelectiveDisclosureRequest' },
  getVerifiableCredentialsForSdr: { type: 'POST', path: '/getVerifiableCredentialsForSdr' },
  validatePresentationAgainstSdr: { type: 'POST', path: '/validatePresentationAgainstSdr' },
  dataStoreORMGetMessages: { type: 'POST', path: '/dataStoreORMGetMessages' },
  dataStoreORMGetMessagesCount: { type: 'POST', path: '/dataStoreORMGetMessagesCount' },
  dataStoreORMGetVerifiableCredentialsByClaims: {
    type: 'POST',
    path: '/dataStoreORMGetVerifiableCredentialsByClaims',
  },
  dataStoreORMGetVerifiableCredentialsByClaimsCount: {
    type: 'POST',
    path: '/dataStoreORMGetVerifiableCredentialsByClaimsCount',
  },
  dataStoreORMGetVerifiableCredentials: { type: 'POST', path: '/dataStoreORMGetVerifiableCredentials' },
  dataStoreORMGetVerifiableCredentialsCount: {
    type: 'POST',
    path: '/dataStoreORMGetVerifiableCredentialsCount',
  },
  dataStoreORMGetVerifiablePresentations: { type: 'POST', path: '/dataStoreORMGetVerifiablePresentations' },
  dataStoreORMGetVerifiablePresentationsCount: {
    type: 'POST',
    path: '/dataStoreORMGetVerifiablePresentationsCount',
  },
  createVerifiablePresentation: { type: 'POST', path: '/createVerifiablePresentation' },
  createVerifiableCredential: { type: 'POST', path: '/createVerifiableCredential' },
}
