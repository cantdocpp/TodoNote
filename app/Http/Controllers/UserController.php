<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function login(Request $request) {
        
        return response()->json([
            'success' => true,
            'user' => $request->email
        ], 200);
    }

    public function register(Request $request)
    {
        $messages = [
            'name.required' => 'The name field is required.'
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:users|max:30',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ], $messages); 

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors()->all(),
            ]);
        } else {
            $data = [
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'name' => $request->name
            ];

            DB::table('users')->insert($data);

            return response()->json([
                'success' => true,
                'request_name' => $request->name
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
