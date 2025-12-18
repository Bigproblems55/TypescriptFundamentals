type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export default function Status({ status }: StatusProps) {
      const statusInput: StatusProps = {
        status: 'loading'
    }
    let message ;
    if(statusInput.status === 'loading'){
        message = 'Loading...'
    } else if (statusInput.status === 'error'){
        message = 'Error fetching data...';
    } else if (statusInput.status === 'success'){
        message = 'Data fetched successfully!';
    }
    return (
        <div>
            <h2>Status</h2>
            <p>{message}</p>
        </div>
    )
}



 