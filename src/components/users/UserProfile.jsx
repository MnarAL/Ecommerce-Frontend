// import React from 'react'

// const UserProfile = () => {

//   const { userData } = useUsersState();
//   // const dispatch: AppDispatch = useDispatch();

//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ProfileFormData>();

//   const onSubmit: SubmitHandler<ProfileFormData> = async (data) => {
//     if (!userData?.userId) {
//       toast.error('User data is not available');
//       return;
//     }

//     try {
//       const response = await dispatch(
//         updateUser({ updateUserData: data, userId: userData.userId })
//       );
//       console.log('Response from Update: ', response);
//       // toast.success(response.payload.message)
//     } catch (error) {
//       console.log(error);
//       toast.error('Update failed');
//     }
//   };

//   return (
//     <div className="container flex-space-around">
//       <UserSidebar />
//       <div className="main-container">
//         {userData && (
//           <>
//             <img
//               src={userData.image}
//               alt="profile image"
//               className="round-image"
//             />
//             <h3>Name: {userData.name}</h3>
//             <p>Email: {userData.email}</p>
//             <p>Address: {userData.address}</p>
//             <p>Role: {userData.isAdmin ? 'Admin' : 'User'}</p>
//             <p>
//               Account Created:{' '}
//               {userData.createdAt &&
//                 new Date(userData.createdAt).toLocaleDateString()}
//             </p>
//             <button
//               className="btn"
//               onClick={() => {
//                 setIsFormOpen(!isFormOpen);
//               }}
//             >
//               {isFormOpen ? 'Close Edit Profile' : 'Edit Profile'}
//             </button>
//           </>
//         )}

//         {/* add edit profile form  */}
//         {isFormOpen && (
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-field">
//               <label htmlFor="name"> Name: </label>
//               <input
//                 type="text"
//                 {...register('name', {
//                   required: 'Name is required',
//                   minLength: {
//                     value: 2,
//                     message: 'Name must be at least 2 characters',
//                   },
//                 })}
//               />
//               {errors.name && <p>{errors.name.message}</p>}
//             </div>

//             <div className="form-field">
//               <label htmlFor="address"> Address: </label>
//               <textarea id="" {...register('address')}></textarea>
//             </div>

//             <button className="btn" type="submit">
//               Update Profile
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }; }

// export default UserProfile
