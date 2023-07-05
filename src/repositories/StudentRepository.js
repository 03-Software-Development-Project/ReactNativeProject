import {FirebaseGateway as FBGateway} from '../gateways'
import Student from '../models/Student'

const StudentRepository = {
  async signOut() {
    try {
      await FBGateway.signOut()
    } catch (error) {
      console.log(error)
    }
  },

  async signIn(email, password) {
    try {
      const {user} = await FBGateway.signIn(email, password)
      return user
    } catch (error) {
      throw new Error(error)
    }
  },

  async signUp(
    email,
    password,
    firstName,
    lastName,
    photoURL,
    phoneNumber,
    gender,
    birthdate,
    address
  ) {
    const {user} = await FBGateway.signUp(email, password)
    await user.updateProfile({
      displayName: `${firstName} ${lastName}`,
      photoURL,
      phoneNumber,
    })
    await FBGateway.insertStudent(
      user.uid,
      firstName,
      lastName,
      null,
      gender,
      birthdate,
      address
    )
    return new Student({
      id: user.uid,
      firstName,
      lastName,
      class: null,
      photoURL,
      phoneNumber,
      gender,
      birthdate,
      address,
    })
  },
  onStudentAuthStateChanged(listener) {
    return FBGateway.onAuthStateChanged(async (user) => {
      if (!user) {
        listener(null)
        return
      }
      const studentAccount = {
        id: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
      listener(studentAccount)
    })
  },
}
export default StudentRepository