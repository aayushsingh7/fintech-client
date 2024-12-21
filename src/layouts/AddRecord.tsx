import { FC, useState } from 'react'
import styles from '@/styles/layout/AddRecord.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAppContext } from '@/context/AppContext'

interface AddRecordProps {

}

function getMonthEndDate() {
    const today = new Date();
    // Create date for first day of next month, then subtract one day
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return lastDay.toISOString();
}

const AddRecord: FC<AddRecordProps> = ({ }) => {
    const { setCreateRecord, recordType, user, setIncomeRecordsFunc, setExpenseRecordsFunc, setDebtPlansFunc } = useAppContext()
    const [type, setType] = useState<string>("income")
    const [loading, setLoading] = useState<boolean>(false)
    const [recordDetails, setRecordDetails] = useState<any>({
        title: "",
        amount: 0,
        description: "",
        recordType: "",
        status: "",
        period: 0,
        month: { startDate: new Date().toISOString(), endDate: getMonthEndDate() },
        paidSoFar: 0,
        savings: 0,
        amountToBePayedPerMonth: 0,
        repaymentPeroid: 0,
        annualIncome: 0,
        expensePerMonth: 0,
        interest: 0,
    })

    const handleUserInput = (e: any) => {
        let name = e.target.name;
        console.log(e.target.value)
        setRecordDetails((oldDetails: any) => {
            return { ...oldDetails, [name]: e.target.value }
        })
    }

    const craeteNewRecord = async () => {
        setLoading(true)
        const data = recordType == "debt" ? {
            title: recordDetails.title,
            annualIncome: Number(recordDetails.annualIncome),
            recordType: "debt",
            repaymentPeroid: Number(recordDetails.repaymentPeroid),
            month: recordDetails.month,
            paidSoFar: Number(recordDetails.paidSoFar),
            expensePerMonth: Number(recordDetails.expensePerMonth),
            savings: Number(recordDetails.savings),
            amountToBePayedPerMonth: 100,
            totalDebt: Number(recordDetails.totalDebt),
            currentDebtPaymentPerMonth: Number(recordDetails.currentDebtPaymentPerMonth),
            user: user._id,
            interest: Number(recordDetails.interest)
        } : {
            title: recordDetails.title,
            description: recordDetails.description,
            amount: Number(recordDetails.amount),
            recordType: type,
            user: user._id,
            month: recordDetails.month
        }

        data.recordType == "income" ? setIncomeRecordsFunc({ ...data, createdAt: new Date().toISOString() }) : setExpenseRecordsFunc({ ...data, createdAt: new Date().toISOString() })

        try {
            const createNew = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/create`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            let response = await createNew.json()
            console.log(response)
            recordType == "debt" ? setDebtPlansFunc(response.data) : null
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }


    return (
        <div className={styles.rgb_container}>
            <div className={styles.add_record}>
                <div className={styles.header}>
                    <h4>Add new Record</h4>
                    <Button disabled={recordType == "debt" && loading ? true : false} onClick={() => setCreateRecord(false)}><AiOutlineClose /></Button>
                </div>
                <div className={styles.inputs_container}>
                    <Input onChange={(e) => handleUserInput(e)} name='title' inputStyleDark='none' type='text' placeholder='Enter Title' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                    {
                        recordType !== "debt" ? <>
                            <Input onChange={(e) => handleUserInput(e)} name='description' inputStyleDark='none' type='text' placeholder='Enter Description (if any)' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                            <Input onChange={(e) => handleUserInput(e)} name="amount" inputStyleDark='none' type='text' placeholder='Enter Amount' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />
                        </> :
                            <>

                                {/* <Input onChange={(e) => handleUserInput(e)} name="" inputStyleDark='none' type='text' placeholder='Enter Total Debt Amount' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} /> */}

                                <Input onChange={(e) => handleUserInput(e)} name="totalDebt" inputStyleDark='none' type='text' placeholder='Enter Total Debt' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                                <Input onChange={(e) => handleUserInput(e)} name="currentDebtPaymentPerMonth" inputStyleDark='none' type='text' placeholder='Enter Current Debt Amount Pay Per Month' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />


                                <Input onChange={(e) => handleUserInput(e)} name="repaymentPeroid" inputStyleDark='none' type='text' placeholder='Enter Repayment Period' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                                <Input onChange={(e) => handleUserInput(e)} name="annualIncome" inputStyleDark='none' type='text' placeholder='Enter Annual Income' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />


                                <Input onChange={(e) => handleUserInput(e)} name="expensePerMonth" inputStyleDark='none' type='text' placeholder='Enter Monthly Expenses' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                                <Input onChange={(e) => handleUserInput(e)} name="savings" inputStyleDark='none' type='text' placeholder='Enter Savings' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                                <Input onChange={(e) => handleUserInput(e)} name="interest" inputStyleDark='none' type='text' placeholder='Enter Interest Rate' style={{ background: "#222222", borderRadius: "10px", width: "100%", fontSize: "0.7rem", marginBottom: "15px", padding: "15px" }} />

                            </>
                    }


                    {
                        recordType !== "debt" &&
                        <>
                            <h5 className={styles.record_type}>Select Transaction Type</h5>
                            <div className={styles.btn_container}>
                                <Button
                                    onClick={() => setType("income")}
                                    style={type === "income" ? {
                                        color: '#00da00',
                                        border: '2px solid #00da00'
                                    } : undefined}
                                >
                                    Income
                                </Button>

                                <Button
                                    onClick={() => setType("expense")}
                                    style={type === "expense" ? {
                                        color: '#ff0000',
                                        border: '2px solid #ff0000'
                                    } : undefined}
                                >
                                    Expense
                                </Button>
                            </div></>

                    }
                </div>
                <Button disabled={loading} onClick={craeteNewRecord} style={{ padding: "20px", background: "var(--active-background)", fontSize: "0.8rem", borderRadius: "10px" }}>{loading ? "Adding Record..." : "Add Record"}</Button>
            </div>
        </div >
    )
}

export default AddRecord