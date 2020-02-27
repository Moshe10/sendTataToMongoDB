// advertisingOnClick = async () => {
//     // let access = await isAllowedAccess();
//     // if (access) {
//     //     if (prepareData(this.props.currentTaskData, this.props.newLine, this.props.updateNewLine)) {
//     //         this.setState({ AdvertisingOnClick: true, SaveDraft: false }, () => {
//     //             this.advertising();
//     //         });
//     //     }
//     // }
//     // else window.location.reload();

//     let access = await isAllowedAccess();
//     if (access) {
//         let data = prepareData(this.props.currentTaskData, this.props.newLine, this.props.updateNewLine);
//         if (data) {

//             let checkIfRemoveWorkProcess = this.checkIfRemoveWorkProcess(data);
//             if (checkIfRemoveWorkProcess || this.state.removedWorkProcess) {
//                 if (window.confirm(TEXT_TO_ALERT_OF_MAKE_SURE_DELETE_WORK_PROCESS)) {
//                     // this.props.addOrderToWorkProcess(this.props.currentTaskData)
//                     // this.props.changeAdvertisingOnClickToTrue();
//                     // this.props.changeSaveDraftToTrue();
//                     this.setState({ AdvertisingOnClick: true, SaveDraft: false, removedWorkProcess: false }, () => {
//                         this.advertising(data);
//                     });
//                 }
//                 else {
//                     this.updateSpecificTaskFromDB();
//                     this.setState({ removedWorkProcess: false });
//                 }
//             }
//             else if (!checkIfRemoveWorkProcess || !this.state.removedWorkProcess) {
//                 this.setState({ AdvertisingOnClick: true, SaveDraft: false }, () => {
//                     this.advertising(data);
//                 });
//             }

//         }
//     }
//     else window.location.reload();

// }