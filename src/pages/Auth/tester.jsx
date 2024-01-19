<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', border: '1px solid #eee',backgroundColor: '#f5f5f5' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(value) => setEmail(value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showpassword? "text" : "password"} placeholder="Password" onChange={(value) => setPassword(value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="show password" value={showpassword} onChange={() => setshowpassword((prev) => !prev)}/>
                </Form.Group>
                <Button onClick={createUser}>
                    Submit
                </Button>
            </Form>
        </div>