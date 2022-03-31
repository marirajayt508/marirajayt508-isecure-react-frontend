import { host } from './host_config'

const testKeys = require('hcaptcha-test-keys')

export const Ping_Api=host+'/ping'

export const Encrypt_Api = host+'/Register'

export const Decrypt_Api = host+'/Decryption'

export const Otp_Api = host+'/Otp'

export const Register_Api = host+'/InsertBasicLogin'

export const Hcaptcha_sitekey = testKeys.sitekey

export const Check  = host+'/Check'

export const Get_Key = host+'/Getkey'

export const Google_Client_Id = "119898231803-dp1u5kpvqd8pv1cq9r9mdv4a0gji7us6.apps.googleusercontent.com"

export const Ckeck_key_Api = host+'/KeyCheck'

export const Qr_Api = host+"/StartSession"

export const Qr_Api_Check = host+"/CheckSession"

export const Qr_Api_End = host+"/EndSession"

export const login_check = host+"/LoginCheck"

export const login_check_navi = host+"/LoginCheckNavi"